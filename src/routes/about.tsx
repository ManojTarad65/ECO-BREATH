import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Cpu,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Radio,
  Sparkles,
  Target,
  Wind,
} from "lucide-react";
import founderPhoto from "@/assets/me.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Yessasvini Sudarshanam · EcoSentine" },
      {
        name: "description",
        content:
          "Meet Yessasvini Sudarshanam, founder of EcoSentine — building an IoT + AI environmental monitoring layer for EV charging stations across India.",
      },
      { property: "og:title", content: "About — EcoSentine" },
      {
        property: "og:description",
        content:
          "The story behind EcoSentine and its founder, Yessasvini Sudarshanam.",
      },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    icon: Wind,
    num: "01",
    title: "Environmental Sensing",
    desc: "Affordable sensors for PM2.5, gases and AQI deployed where EV chargers actually live — kerbsides, parking decks, highway plazas.",
  },
  {
    icon: Cpu,
    num: "02",
    title: "Edge AI Intelligence",
    desc: "On-device models detect anomalies and pollutant spikes in real time, without leaning on always-on cloud connectivity.",
  },
  {
    icon: Radio,
    num: "03",
    title: "Retrofit-Friendly Hardware",
    desc: "A modular node designed to bolt onto existing chargers — built for India's EV ecosystem at a fraction of legacy AQ-monitor cost.",
  },
  {
    icon: Target,
    num: "04",
    title: "ESG-Ready Insights",
    desc: "Operator dashboards and automatic reports mapped to NCAP and Smart Cities Mission KPIs — the data CSR teams actually need.",
  },
];

const timeline = [
  {
    year: "2025",
    title: "EcoSentine begins",
    body: "Hardware prototyping, sensor calibration, and the first edge-AI experiments for charger-side air-quality monitoring.",
  },
  {
    year: "2025",
    title: "First node assembled",
    body: "ESP32 + laser PM + MQ-135 stack validated against reference AQ monitors — under ₹3K per node.",
  },
  {
    year: "2026",
    title: "Hyderabad pilot",
    body: "Deploying a single retrofit node at an urban charging hub. Three months, real ESG output, real operator feedback.",
  },
];

function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-accent/40 blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-6 pb-16 pt-12 md:grid-cols-12 md:gap-6 md:pb-24 md:pt-20">
          {/* Meta column */}
          <div className="md:col-span-2">
            <div className="flex flex-col gap-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <div>① Founder</div>
              <div>Hyderabad, IN</div>
              <div className="text-foreground">since 2025</div>
            </div>
          </div>

          {/* Headline */}
          <div className="animate-fade-in-up md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-accent" />
                <span className="relative h-2 w-2 rounded-full bg-accent" />
              </span>
              About the founder
            </span>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,6rem)] leading-[0.92] tracking-tight">
              Meet <span className="italic">Yessasvini</span>,<br />
              the mind behind<br />
              <span className="relative inline-block">
                EcoSentine.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 75 2, 150 6 T 298 5"
                    stroke="oklch(0.86 0.19 110)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Yessasvini Sudarshanam is the founder of EcoSentine — an IoT-AI
              environmental monitoring layer for EV charging stations. She's
              building practical technology to help EV infrastructure become
              safer, smarter, and more sustainable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/proposal"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Read the proposal
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                <Mail className="h-4 w-4" /> Get in touch
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative md:col-span-3">
            <div
              className="absolute -inset-4 rounded-3xl bg-accent/30 blur-2xl"
              aria-hidden
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-foreground/10 shadow-card">
              <img
                src={founderPhoto}
                alt="Yessasvini Sudarshanam — founder of EcoSentine"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" aria-hidden />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-border bg-background/95 p-3 backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  Hyderabad · India
                </div>
                <div className="mt-1 font-display text-lg leading-tight">
                  Founder & Builder
                </div>
              </div>
              <div className="animate-spin-slow absolute -top-3 -right-3 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-[9px] font-bold uppercase tracking-widest text-foreground">
                <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                  <defs>
                    <path
                      id="aboutCircle"
                      d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    />
                  </defs>
                  <text fontSize="11" fontWeight="700">
                    <textPath href="#aboutCircle">
                      FOUNDER · ECOSENTINE · FOUNDER ·{" "}
                    </textPath>
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
              { v: "01", l: "founder · solo builder" },
              { v: "IoT + AI", l: "core technology stack" },
              { v: "EV", l: "infrastructure focus" },
              { v: "India", l: "primary deployment market" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-6">
                <div className="font-display text-3xl md:text-4xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE WORK */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                ② Her work
              </div>
              <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
                Hardware, sensing & <span className="italic">AI</span> — in
                service of cleaner sites.
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg text-muted-foreground">
                Her work combines hardware prototyping, environmental sensing,
                and AI-driven monitoring to deliver real-time site intelligence
                for operators. The thread running through it: closing the gap
                between EV charging operations and environmental visibility.
              </p>
              <p className="mt-6 text-lg text-muted-foreground">
                The goal — help charging station operators track air quality,
                detect pollution spikes, and generate useful ESG-ready
                insights. Yessasvini is focused on turning this idea into a
                scalable, retrofit-friendly solution for India's EV ecosystem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="border-b border-border bg-secondary/40 py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                ③ What EcoSentine is
              </div>
              <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[0.95] md:text-6xl">
                Four pillars, one <span className="italic">mission</span>.
              </h2>
            </div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-sm font-medium"
            >
              See the platform
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative bg-card p-8 transition-colors hover:bg-background"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background transition-transform group-hover:scale-110">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-2xl text-muted-foreground/60">
                    {p.num}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="border-b border-border py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            ④ The journey
          </div>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] md:text-6xl">
            From <span className="italic">prototype</span> to{" "}
            <span className="italic">pilot</span>.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {timeline.map((t, i) => (
              <div key={t.title} className="relative">
                <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-brutal">
                  <div className="font-display text-4xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.year}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
                </div>
                {i < timeline.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-accent md:block">
                    <ArrowUpRight className="h-6 w-6 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT / CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-3xl bg-foreground p-10 text-background md:p-20">
          <div className="bg-noise absolute inset-0 opacity-[0.07]" aria-hidden />
          <div
            className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-accent/30 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-background/50">
                ⑤ Connect
              </div>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] md:text-7xl">
                Building this <span className="italic text-accent">together</span>.
              </h2>
              <p className="mt-6 max-w-xl text-background/70">
                If you operate EV infrastructure, work in urban sustainability,
                or just want to talk about clean-air tech for India — Yessasvini
                would love to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:ecosentine21@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-background/10"
                >
                  <Mail className="h-4 w-4" /> ecosentine21@gmail.com
                </a>
                <a
                  href="tel:+916300622651"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-background/10"
                >
                  <Phone className="h-4 w-4" /> +91 63006 22651
                </a>
                <a
                  href="https://www.linkedin.com/in/sudarshanam-yessasvini-358a72287"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-3 text-sm font-medium transition-colors hover:bg-background/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 md:col-span-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-2 rounded-full bg-accent px-6 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.02]"
              >
                Request the Hyderabad pilot
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/proposal"
                className="inline-flex items-center justify-between gap-2 rounded-full border border-background/20 px-6 py-4 text-sm font-medium hover:bg-background/10"
              >
                View full proposal
                <Leaf className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
