"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import LogoMark from "./LogoMark";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = useMemo(
    () => (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href)),
    [pathname]
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="container-px">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <LogoMark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition ${isActive(l.href) ? "text-white" : "text-slate-300 hover:text-white"}`}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary">Get Consultation</Link>
          </nav>

          <button className="md:hidden btn-secondary px-3 py-2" aria-label="Open menu" onClick={() => setOpen(v => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-5">
            <div className="card p-4">
              <div className="flex flex-col gap-3">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2 text-sm ${isActive(l.href) ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary">
                  Get Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
