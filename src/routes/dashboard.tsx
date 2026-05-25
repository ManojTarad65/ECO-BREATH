import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Activity, AlertTriangle, Battery, Bell, Cpu, Gauge, Mail, MapPin, MessageSquare, Settings2, ThermometerSun, Webhook, Wind } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Live Dashboard — EcoSentine" },
      { name: "description", content: "Simulated live operator dashboard showing AQI, PM2.5, gas levels, alerts and ESG metrics for an EV charging hub in Hyderabad." },
      { property: "og:title", content: "EcoSentine Live Dashboard" },
      { property: "og:description", content: "Real-time operator view of EV charging environmental telemetry." },
    ],
  }),
  component: DashboardPage,
});

function useSimulated(seed: number, min: number, max: number, step = 0.04) {
  const [v, setV] = useState(() => (min + max) / 2);
  useEffect(() => {
    const id = setInterval(() => {
      setV((prev) => {
        const drift = (Math.random() - 0.5) * (max - min) * step;
        const next = Math.max(min, Math.min(max, prev + drift));
        return next;
      });
    }, 1500 + seed * 200);
    return () => clearInterval(id);
  }, [seed, min, max, step]);
  return v;
}

function aqiBand(aqi: number) {
  if (aqi <= 50) return { label: "Good", color: "text-primary", bg: "bg-primary/15" };
  if (aqi <= 100) return { label: "Moderate", color: "text-warning", bg: "bg-warning/15" };
  if (aqi <= 200) return { label: "Unhealthy (sensitive)", color: "text-warning", bg: "bg-warning/15" };
  return { label: "Unhealthy", color: "text-destructive", bg: "bg-destructive/15" };
}

function MetricCard({ icon: Icon, label, value, unit, hint }: { icon: typeof Wind; label: string; value: string; unit: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5 shadow-card">
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="text-xs uppercase tracking-wider">{label}</span>
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="text-3xl font-bold tabular-nums">{value}</span>
        <span className="text-sm text-muted-foreground">{unit}</span>
      </div>
      {hint && <div className="mt-1 text-xs text-muted-foreground">{hint}</div>}
    </div>
  );
}

function Sparkline({ values, color = "oklch(0.32 0.08 155)" }: { values: number[]; color?: string }) {
  const w = 280;
  const h = 60;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const pts = values
    .map((v, i) => `${(i / (values.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-16 w-full">
      <defs>
        <linearGradient id="sparkfill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.86 0.19 110)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.86 0.19 110)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon fill="url(#sparkfill)" points={`0,${h} ${pts} ${w},${h}`} />
      <polyline fill="none" stroke={color} strokeWidth={2} points={pts} />
    </svg>
  );
}

function DashboardPage() {
  const aqi = useSimulated(1, 80, 180);
  const pm25 = useSimulated(2, 25, 95);
  const co = useSimulated(3, 0.4, 2.4);
  const no2 = useSimulated(4, 15, 60);
  const temp = useSimulated(5, 26, 36, 0.02);
  const power = useSimulated(6, 35, 110, 0.06);

  const [history, setHistory] = useState<number[]>(() =>
    Array.from({ length: 30 }, (_, i) => 100 + Math.sin(i / 3) * 30),
  );
  useEffect(() => {
    setHistory((h) => [...h.slice(1), aqi]);
  }, [aqi]);

  const band = aqiBand(aqi);

  // Alert configuration
  const [pm25Warn, setPm25Warn] = useState(55);
  const [pm25Crit, setPm25Crit] = useState(75);
  const [aqiWarn, setAqiWarn] = useState(120);
  const [aqiCrit, setAqiCrit] = useState(160);
  const [notifyEmail, setNotifyEmail] = useState(true);
  const [notifySms, setNotifySms] = useState(false);
  const [notifyWebhook, setNotifyWebhook] = useState(true);
  const [escalate, setEscalate] = useState(true);
  const [escalateAfter, setEscalateAfter] = useState(5);
  const [contactEmail, setContactEmail] = useState("ops@ecosentine.io");
  const [savedTick, setSavedTick] = useState(0);

  const channels = useMemo(() => {
    const c: string[] = [];
    if (notifyEmail) c.push("Email");
    if (notifySms) c.push("SMS");
    if (notifyWebhook) c.push("Webhook");
    return c;
  }, [notifyEmail, notifySms, notifyWebhook]);

  const alerts = useMemo(() => {
    const list: { time: string; severity: "warn" | "info" | "crit"; text: string }[] = [
      { time: "11:47", severity: "info", text: "ESG snapshot exported (Apr-W4)" },
      { time: "10:22", severity: "info", text: "Calibration ping OK · all sensors nominal" },
    ];
    const ch = channels.length ? ` · notifying ${channels.join(", ")}` : " · notifications muted";
    if (pm25 >= pm25Crit) {
      list.unshift({ time: "now", severity: "crit", text: `PM2.5 ${pm25.toFixed(0)} µg/m³ ≥ critical ${pm25Crit}${ch}${escalate ? ` · escalating in ${escalateAfter}m` : ""}` });
    } else if (pm25 >= pm25Warn) {
      list.unshift({ time: "now", severity: "warn", text: `PM2.5 ${pm25.toFixed(0)} µg/m³ above warn ${pm25Warn}${ch}` });
    }
    if (aqi >= aqiCrit) {
      list.unshift({ time: "now", severity: "crit", text: `AQI ${aqi.toFixed(0)} ≥ critical ${aqiCrit}${ch}${escalate ? ` · escalating in ${escalateAfter}m` : ""}` });
    } else if (aqi >= aqiWarn) {
      list.unshift({ time: "now", severity: "warn", text: `AQI ${aqi.toFixed(0)} above warn ${aqiWarn}${ch}` });
    }
    return list.slice(0, 6);
  }, [pm25, aqi, pm25Warn, pm25Crit, aqiWarn, aqiCrit, channels, escalate, escalateAfter]);

  return (
    <div className="mx-auto max-w-[1400px] px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-3 py-1 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            Live telemetry · simulated
          </span>
          <h1 className="mt-4 font-display text-5xl leading-[0.95] md:text-6xl">
            Banjara Hills <span className="italic">EV Hub</span>
          </h1>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Hyderabad, Telangana · Node ECS-001
          </p>
        </div>
        <div className={`rounded-2xl border border-border bg-card px-6 py-4 ${band.bg}`}>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Current AQI</div>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-6xl tabular-nums">{aqi.toFixed(0)}</span>
            <span className={`text-sm font-semibold ${band.color}`}>{band.label}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <MetricCard icon={Wind} label="PM2.5" value={pm25.toFixed(0)} unit="µg/m³" hint="WHO 24h: 15" />
        <MetricCard icon={Gauge} label="CO" value={co.toFixed(2)} unit="ppm" />
        <MetricCard icon={Activity} label="NO₂" value={no2.toFixed(0)} unit="ppb" />
        <MetricCard icon={ThermometerSun} label="Temp" value={temp.toFixed(1)} unit="°C" />
        <MetricCard icon={Battery} label="Charger Load" value={power.toFixed(0)} unit="kW" />
        <MetricCard icon={Cpu} label="Edge Health" value="98" unit="%" hint="Last sync 4s ago" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-semibold">AQI · last 30 readings</h2>
              <p className="text-xs text-muted-foreground">Edge AI smoothing + anomaly window</p>
            </div>
            <span className="text-xs text-muted-foreground">refresh ~2s</span>
          </div>
          <Sparkline values={history} />
          <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">Min</div>
              <div className="font-semibold tabular-nums">{Math.min(...history).toFixed(0)}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Avg</div>
              <div className="font-semibold tabular-nums">{(history.reduce((a, b) => a + b, 0) / history.length).toFixed(0)}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Max</div>
              <div className="font-semibold tabular-nums">{Math.max(...history).toFixed(0)}</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <h2 className="font-semibold">Alerts</h2>
          </div>
          <ul className="mt-4 space-y-3">
            {alerts.map((a, i) => (
              <li key={i} className="flex gap-3 text-sm">
                <span
                  className={`mt-1 h-2 w-2 shrink-0 rounded-full ${
                    a.severity === "crit" ? "bg-destructive" : a.severity === "warn" ? "bg-warning" : "bg-primary"
                  }`}
                />
                <div className="flex-1">
                  <div className="text-foreground">{a.text}</div>
                  <div className="text-xs text-muted-foreground">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {[
          { label: "Avg AQI (30d)", value: "118", sub: "↓ 12% vs city baseline" },
          { label: "PM2.5 alerts handled", value: "27", sub: "100% within SLA" },
          { label: "ESG score", value: "A−", sub: "NCAP-aligned" },
        ].map((k) => (
          <div key={k.label} className="rounded-2xl border border-border/60 bg-card p-6 shadow-card">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">{k.label}</div>
            <div className="mt-2 text-3xl font-bold">{k.value}</div>
            <div className="mt-1 text-sm text-primary">{k.sub}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-border/60 bg-card p-6 shadow-card">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Settings2 className="h-4 w-4 text-primary" />
            <h2 className="font-semibold">Alert thresholds & notifications</h2>
          </div>
          <span className="text-xs text-muted-foreground">
            {savedTick ? "Saved · applied to live feed" : "Changes apply instantly"}
          </span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">PM2.5 warn threshold</Label>
                <span className="text-sm font-semibold tabular-nums">{pm25Warn} µg/m³</span>
              </div>
              <Slider value={[pm25Warn]} min={15} max={150} step={1} onValueChange={(v) => setPm25Warn(Math.min(v[0], pm25Crit - 1))} className="mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">PM2.5 critical threshold</Label>
                <span className="text-sm font-semibold tabular-nums text-destructive">{pm25Crit} µg/m³</span>
              </div>
              <Slider value={[pm25Crit]} min={25} max={250} step={1} onValueChange={(v) => setPm25Crit(Math.max(v[0], pm25Warn + 1))} className="mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">AQI warn threshold</Label>
                <span className="text-sm font-semibold tabular-nums">{aqiWarn}</span>
              </div>
              <Slider value={[aqiWarn]} min={50} max={300} step={1} onValueChange={(v) => setAqiWarn(Math.min(v[0], aqiCrit - 1))} className="mt-2" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label className="text-sm">AQI critical threshold</Label>
                <span className="text-sm font-semibold tabular-nums text-destructive">{aqiCrit}</span>
              </div>
              <Slider value={[aqiCrit]} min={75} max={400} step={1} onValueChange={(v) => setAqiCrit(Math.max(v[0], aqiWarn + 1))} className="mt-2" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl border border-border/60 p-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">Email alerts</div>
                  <div className="text-xs text-muted-foreground">Send breach summary to on-call inbox</div>
                </div>
              </div>
              <Switch checked={notifyEmail} onCheckedChange={setNotifyEmail} />
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border/60 p-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">SMS alerts</div>
                  <div className="text-xs text-muted-foreground">For critical PM2.5/AQI breaches only</div>
                </div>
              </div>
              <Switch checked={notifySms} onCheckedChange={setNotifySms} />
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border/60 p-4">
              <div className="flex items-center gap-3">
                <Webhook className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-medium">Webhook</div>
                  <div className="text-xs text-muted-foreground">POST to operator incident endpoint</div>
                </div>
              </div>
              <Switch checked={notifyWebhook} onCheckedChange={setNotifyWebhook} />
            </div>
            <div className="rounded-xl border border-border/60 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-warning" />
                  <div>
                    <div className="text-sm font-medium">Escalate unacknowledged criticals</div>
                    <div className="text-xs text-muted-foreground">Page secondary on-call after timeout</div>
                  </div>
                </div>
                <Switch checked={escalate} onCheckedChange={setEscalate} />
              </div>
              {escalate && (
                <div className="mt-4 flex items-center gap-3">
                  <Label htmlFor="esc" className="text-xs text-muted-foreground">Escalate after</Label>
                  <Input
                    id="esc"
                    type="number"
                    min={1}
                    max={60}
                    value={escalateAfter}
                    onChange={(e) => setEscalateAfter(Math.max(1, Math.min(60, Number(e.target.value) || 1)))}
                    className="h-8 w-20"
                  />
                  <span className="text-xs text-muted-foreground">minutes</span>
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="contact" className="text-xs text-muted-foreground">On-call contact</Label>
              <Input
                id="contact"
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value.slice(0, 255))}
                className="mt-1"
              />
            </div>
            <Button
              onClick={() => setSavedTick((t) => t + 1)}
              className="w-full"
            >
              Save alert configuration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}