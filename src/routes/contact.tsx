import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Building2, Check, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request the Hyderabad Pilot — EcoSentine" },
      { name: "description", content: "Get in touch with the EcoSentine team to scope a 3-month environmental monitoring pilot at your EV charging hub." },
      { property: "og:title", content: "Contact EcoSentine" },
      { property: "og:description", content: "Request a 3-month pilot for environmental monitoring at your EV charging stations." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-accent/30 blur-3xl" aria-hidden />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-6">
          <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Get in touch · 04</div>
          <h1 className="mt-3 font-display text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-tight">
            Let's deploy your<br />
            first <span className="italic">sentinel</span>.
          </h1>
          <p className="mt-6 max-w-md text-muted-foreground">
            Tell us about your charging network and we'll scope a tailored 3-month pilot — including
            hardware, dashboards and ESG reporting.
          </p>
          <div className="mt-10 grid gap-3">
            {[
              { i: Mail, t: "ecosentine21@gmail.com", s: "Replies within 24 hours" },
              { i: Phone, t: "+91 63006 22651", s: "Mon–Fri · 10am–7pm IST" },
              { i: MapPin, t: "Hyderabad, India", s: "Pilot deployments across Telangana" },
            ].map((c) => (
              <div key={c.t} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-shadow hover:shadow-brutal">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                  <c.i className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-medium">{c.t}</div>
                  <div className="text-xs text-muted-foreground">{c.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-6">
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="relative rounded-3xl border border-border bg-card p-8 md:p-10"
          >
            <div className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Pilot intake form
            </div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background">
                  <Check className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl">Thanks — we'll be in touch.</h2>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Our team will reply within 24 hours with a tailored pilot proposal for your site.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" required />
                  <Field label="Work email" name="email" type="email" required />
                </div>
                <Field label="Company / Operator" name="company" icon={Building2} required />
                <Field label="Number of charging sites" name="sites" type="number" placeholder="e.g. 12" />
                <div>
                  <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us about your goals</label>
                  <textarea
                    rows={4}
                    placeholder="ESG reporting, safety alerts, scaling to highways…"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-4 font-medium text-background transition-transform hover:scale-[1.02]"
                >
                  Request pilot
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam. We'll only use your details to discuss the pilot.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, name, type = "text", required, placeholder, icon: Icon,
}: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; icon?: typeof Building2; }) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <div className="relative mt-1.5">
        {Icon && <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />}
        <input
          id={name} name={name} type={type} required={required} placeholder={placeholder}
          className={`w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground ${Icon ? "pl-11" : ""}`}
        />
      </div>
    </div>
  );
}
