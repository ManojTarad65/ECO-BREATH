import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarRange, ChartBar, Cpu, FileText, IndianRupee, Target, TrendingUp, Wrench } from "lucide-react";

export const Route = createFileRoute("/proposal")({
  head: () => ({
    meta: [
      { title: "Pilot Proposal — EcoSentine for EV Charging" },
      { name: "description", content: "Detailed pilot proposal: deploy EcoSentine at one Hyderabad EV charging site for 3 months to validate AQI monitoring, safety alerts and ESG reporting." },
      { property: "og:title", content: "EcoSentine Pilot Proposal — Hyderabad" },
      { property: "og:description", content: "Three-month pilot to validate IoT + AI environmental monitoring at urban EV charging stations." },
    ],
  }),
  component: ProposalPage,
});

const sections = [
  { num: "01", icon: FileText, title: "Abstract", body: "EcoSentine integrates IoT sensors with AI to monitor air quality and environmental conditions at EV charging stations, providing operators with live dashboards, alerts and ESG reports. A pilot at a single Hyderabad site will validate system performance, user safety improvements and sustainability metrics over 3 months — targeting reduced operational risks and enhanced CSR reporting." },
  { num: "02", icon: Target, title: "Introduction", body: "EV charging infrastructure in India is growing rapidly amid serious urban pollution challenges — 22 of the world's 30 most polluted cities are here. Current stations focus on power delivery but ignore local air-quality impacts, user comfort and ESG data needs. EcoSentine adds an intelligent layer using affordable sensors (MQ-135, PM2.5) integrated via Arduino / ESP32." },
  { num: "03", icon: Cpu, title: "Existing Drawbacks", body: "Today's EV monitoring emphasises charger status, temperature and humidity but rarely covers comprehensive air quality. Drawbacks include fragmented systems lacking AI prediction, high costs for advanced sensors (₹15K–50K), and overlooked PM2.5 emissions from charger fans exceeding WHO limits at nearly half of sites." },
  { num: "04", icon: TrendingUp, title: "Motivation", body: "India's NCAP mandates more charging stations, but air pollution causes 1.67 M deaths yearly, with EV sites potentially worsening local conditions through non-exhaust emissions. Operators need differentiated sustainability features for CSR. EcoSentine fills this gap with affordable (₹2.5K–3.5K), solar-powered tech aligned with the Smart Cities Mission." },
  { num: "05", icon: Wrench, title: "Proposed Method", body: "Deploy sensors (air quality, PM2.5, gas) near one Hyderabad EV station — e.g. a public hub — connected via WiFi / LoRa to cloud AI (TensorFlow / scikit-learn) for processing. The dashboard shows live AQI, alerts on spikes, and automated ESG reports. Architecture: IoT edge → cloud analytics → mobile / web alerts." },
  { num: "06", icon: ChartBar, title: "Expected Results", body: "We anticipate 30% faster anomaly detection than legacy systems, improved site safety via alerts, and ESG reports showing pollution trends. Data will quantify charger-induced PM spikes, validate scalability and highlight ROI through better operator positioning — with potential for 55–60% margins in production." },
];

const timeline = [
  { month: "Month 1", title: "Setup & Integration", items: ["Site survey & sensor mounting", "Charger telemetry integration", "Cloud + dashboard provisioning"] },
  { month: "Month 2", title: "Testing & Tuning", items: ["AI anomaly model training", "Threshold calibration", "Operator + user UAT"] },
  { month: "Month 3", title: "Reporting & Handover", items: ["ESG report generation", "Performance analysis vs baseline", "Scale-up roadmap"] },
];

function ProposalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden />
        <div className="absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-[1400px] px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Document<br />№ 001/2026
              </div>
            </div>
            <div className="md:col-span-10">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Pilot Proposal</div>
              <h1 className="mt-3 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight">
                EcoSentine for<br />
                <span className="italic">EV Charging</span> Stations
              </h1>
              <p className="mt-8 max-w-3xl text-lg text-muted-foreground">
                A 3-month pilot at one urban site in Hyderabad to demonstrate value for operators
                and ESG goals — combining IoT sensing, edge AI and CSR-grade reporting.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                {[
                  { i: CalendarRange, l: "3 months" },
                  { i: IndianRupee, l: "₹2.5K–3.5K / node" },
                  { i: Target, l: "1 urban hub" },
                ].map((b) => (
                  <span key={b.l} className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-4 py-2">
                    <b.i className="h-3.5 w-3.5 text-accent" /> {b.l}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections — magazine layout */}
      <section className="border-b border-border bg-secondary/30 py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {sections.map((s) => (
              <article key={s.title} className="bg-card p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl text-muted-foreground/50">{s.num}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                    <s.icon className="h-4 w-4" />
                  </div>
                </div>
                <h2 className="mt-6 font-display text-3xl leading-tight">{s.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — vertical rail */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Timeline</div>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
                Three months,<br /><span className="italic">three milestones</span>.
              </h2>
            </div>
            <div className="md:col-span-8">
              <div className="relative space-y-6 border-l-2 border-dashed border-foreground/20 pl-8">
                {timeline.map((t, i) => (
                  <div key={t.month} className="relative">
                    <div className="absolute -left-[42px] flex h-10 w-10 items-center justify-center rounded-full bg-accent font-display text-sm text-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-brutal">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.month}</div>
                      <h3 className="mt-1 font-display text-2xl">{t.title}</h3>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                        {t.items.map((it) => (
                          <li key={it} className="flex gap-2 text-sm text-muted-foreground">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion + CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-16">
            <div className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Conclusion</div>
                <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
                  Stations as <span className="italic">sustainable hubs</span>.
                </h2>
                <p className="mt-6 max-w-2xl text-muted-foreground">
                  This pilot positions EcoSentine as a must-have for EV operators — combining safety,
                  compliance and differentiated CSR positioning in one affordable package.
                </p>
              </div>
              <div className="flex flex-col justify-end gap-3 md:col-span-5">
                <Link to="/contact" className="group inline-flex items-center justify-between gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background hover:scale-[1.02]">
                  Request the pilot
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link to="/dashboard" className="inline-flex items-center justify-between gap-2 rounded-full border border-foreground/20 px-6 py-4 text-sm font-medium hover:bg-secondary">
                  See live dashboard
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
