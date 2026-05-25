import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowUpRight, BarChart3, Cpu, Leaf, Radio, ShieldCheck, Sparkles, Wind, Zap } from "lucide-react";
import heroImage from "@/assets/hero-station.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoSentine — Air Quality Intelligence for EV Charging" },
      { name: "description", content: "Real-time air quality, pollution and safety monitoring for EV charging stations. Hyderabad pilot proposal." },
      { property: "og:title", content: "EcoSentine — Smarter, Safer EV Charging" },
      { property: "og:description", content: "IoT + AI environmental monitoring for EV chargers. Live dashboards, ESG reports, and safety alerts." },
    ],
  }),
  component: Index,
});

const marqueeItems = [
  "PM2.5 monitoring", "AQI · live", "ESG-ready reporting", "Edge AI anomaly detection",
  "NCAP-aligned", "Smart Cities Mission", "LoRa + WiFi telemetry", "Solar-powered nodes",
];

const features = [
  { icon: Wind, title: "Air Quality Sensing", desc: "PM2.5, PM10, CO, NO₂, VOCs and AQI tracked at the charger using MQ-135 + laser PM sensors.", num: "01" },
  { icon: Cpu, title: "Edge AI Detection", desc: "On-device TensorFlow Lite models flag particulate spikes from charger fans in real time.", num: "02" },
  { icon: Radio, title: "WiFi + LoRa Mesh", desc: "Resilient telemetry to the cloud — works in dense urban canyons and highway corridors.", num: "03" },
  { icon: BarChart3, title: "Operator Dashboards", desc: "Live AQI, trends and site benchmarking for ops teams and CSR officers.", num: "04" },
  { icon: ShieldCheck, title: "Safety Alerts", desc: "Instant SMS / push alerts when pollutant thresholds approach WHO limits.", num: "05" },
  { icon: Leaf, title: "Auto ESG Reports", desc: "Monthly PDF reports mapped to NCAP and Smart Cities Mission KPIs.", num: "06" },
];

function Index() {
  return (
    <div>
      {/* HERO — editorial split */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/40 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-16 pt-12 md:grid-cols-12 md:gap-6 md:pb-24 md:pt-20">
          {/* Left meta column */}
          <div className="md:col-span-2">
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <div>① Pilot</div>
              <div>Hyderabad, IN</div>
              <div className="text-foreground">2025 — 2026</div>
            </div>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              Live pilot proposal · Hyderabad
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-tight">
              Every charge,<br />
              <span className="italic">cleaner</span> air<br />
              <span className="relative inline-block">
                & safer sites.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q 75 2, 150 6 T 298 5" stroke="oklch(0.86 0.19 110)" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              EcoSentine adds real-time environmental intelligence to EV charging stations —
              transforming them from power points into accountable, ESG-ready hubs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/proposal"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Read the Proposal
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Activity className="h-4 w-4" /> See live dashboard
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative md:col-span-3">
            <div className="absolute -inset-4 rounded-3xl bg-accent/30 blur-2xl" aria-hidden />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-foreground/10 shadow-card">
              <img
                src={heroImage}
                alt="Smart EV charging station with environmental sensors in Hyderabad"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border bg-background/95 p-3 backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                  Banjara Hills · live
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display text-3xl tabular-nums">142</span>
                  <span className="text-xs text-muted-foreground">AQI · moderate</span>
                </div>
              </div>
              <div className="animate-spin-slow absolute -top-3 -right-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-[9px] font-bold uppercase tracking-widest text-foreground">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                  <defs>
                    <path id="circle" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <text fontSize="11" fontWeight="700">
                    <textPath href="#circle">PILOT · 2026 · PILOT · 2026 · </textPath>
                  </text>
                </svg>
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-border bg-background">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-border md:grid-cols-4">
            {[
              { v: "22/30", l: "polluted cities in India" },
              { v: "1.67M", l: "annual deaths · air pollution" },
              { v: "30%", l: "faster anomaly detection" },
              { v: "₹2.5K", l: "all-in node cost" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-6">
                <div className="font-display text-3xl md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="overflow-hidden border-b border-border bg-foreground py-5 text-background">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((t, i) => (
            <div key={i} className="flex items-center gap-12 font-display text-2xl">
              <span>{t}</span>
              <span className="text-accent">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM — bento */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">② The problem</div>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
                EV chargers grow fast — and quietly <span className="italic">pollute</span>.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-muted-foreground">
                Fast-charger fans, brake-dust resuspension and idling traffic at hubs push PM2.5
                beyond WHO limits at nearly half of measured sites. Operators have no visibility,
                and ESG reporting is left blank.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { v: "47%", t: "of sites breach WHO PM2.5 limits" },
                  { v: "0", t: "integrated ESG datasets today" },
                  { v: "₹15K+", t: "cost of legacy AQ monitors" },
                ].map((x) => (
                  <div key={x.t} className="rounded-2xl border border-border bg-card p-5">
                    <div className="font-display text-3xl">{x.v}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{x.t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES grid — large numbered */}
      <section className="border-b border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">③ The platform</div>
              <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.95] md:text-6xl">
                Sensors, AI & reports — built for <span className="italic">operators</span>.
              </h2>
            </div>
            <Link to="/dashboard" className="group inline-flex items-center gap-2 text-sm font-medium">
              View live dashboard
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative bg-card p-8 transition-colors hover:bg-background"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl text-muted-foreground/60">{f.num}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — horizontal flow */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">④ How it works</div>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
            From <span className="italic">sensor</span> to <span className="italic">ESG report</span>.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Sense", d: "MQ-135 + laser PM sensors at the charger." },
              { n: "02", t: "Edge AI", d: "ESP32 + TFLite filter & detect anomalies." },
              { n: "03", t: "Stream", d: "WiFi/LoRa to cloud analytics." },
              { n: "04", t: "Report", d: "Live dashboards + monthly ESG PDFs." },
            ].map((s, i) => (
              <div key={s.n} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-brutal">
                  <div className="font-display text-4xl text-accent">{s.n}</div>
                  <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
                {i < 3 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-accent md:block">
                    <ArrowUpRight className="h-6 w-6 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — dark slab */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-20">
          <div className="bg-noise absolute inset-0 opacity-[0.07]" aria-hidden />
          <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl" aria-hidden />
          <div className="relative grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-background/50">⑤ Ready when you are</div>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
                Make your network <span className="italic text-accent">CSR-ready</span>.
              </h2>
              <p className="mt-6 max-w-xl text-background/70">
                One urban site. Three months. Measurable ESG impact and operational insight —
                deployed for the cost of a single legacy AQ monitor.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3 md:col-span-4">
              <Link to="/contact" className="group inline-flex items-center justify-between gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]">
                Request the Hyderabad pilot
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link to="/proposal" className="inline-flex items-center justify-between gap-2 rounded-full border border-background/20 px-6 py-4 text-sm font-medium hover:bg-background/10">
                View full proposal
                <Zap className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
