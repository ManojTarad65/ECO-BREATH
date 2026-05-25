import { Link } from "@tanstack/react-router";
import { Leaf, ArrowUpRight } from "lucide-react";

const navItems = [
  { to: "/", label: "Overview", num: "01" },
  { to: "/about", label: "About", num: "02" },
  { to: "/proposal", label: "Proposal", num: "03" },
  { to: "/dashboard", label: "Dashboard", num: "04" },
  { to: "/contact", label: "Contact", num: "05" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background">
            <Leaf className="h-4 w-4" />
            <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent ring-2 ring-background" />
          </span>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-tight">EcoSentine</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">since 2025</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "flex items-center gap-1.5 rounded-full px-3 py-2 text-sm text-foreground bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              <span className="text-[10px] tabular-nums text-muted-foreground">{item.num}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-transform hover:scale-[1.03] sm:inline-flex"
        >
          Request Pilot <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}