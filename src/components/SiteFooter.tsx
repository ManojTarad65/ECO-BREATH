import { Link } from "@tanstack/react-router";
import { Leaf, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-foreground text-background">
      <div className="bg-noise absolute inset-0 opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-[1400px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
              Cleaner air,<br />
              <span className="italic text-accent">one charge</span> at a time.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
            >
              Start a pilot <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-background/50">Pilot</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              <li>Hyderabad, India</li>
              <li>3-month deployment</li>
              <li>₹2.5K–3.5K / node</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-background/50">Aligned</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              <li>NCAP</li>
              <li>Smart Cities</li>
              <li>ESG / CSR</li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-background/50">Reach</h4>
            <ul className="mt-4 space-y-2 text-sm text-background/80">
              <li>ecosentine21@gmail.com</li>
              <li>+91 63006 22651</li>
              <li>Telangana, IN</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/60">
          <div className="flex items-center gap-2">
            <Leaf className="h-3.5 w-3.5 text-accent" />
            © {new Date().getFullYear()} EcoSentine — Hyderabad pilot proposal.
          </div>
          <div>Built for operators · ESG-ready · NCAP-aligned</div>
        </div>
      </div>
    </footer>
  );
}