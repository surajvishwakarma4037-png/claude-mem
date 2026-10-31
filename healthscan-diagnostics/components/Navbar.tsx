"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Menu, Phone, ShieldCheck, X } from 'lucide-react';
import { siteConfig } from '@/lib/data';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Services', href: '/services' },
  { label: 'All Diagnostic Tests', href: '/tests' },
  { label: 'Health Packages', href: '/packages' },
  { label: 'Book a Test', href: '/book-test' },
  { label: 'Home Sample Collection', href: '/home-sample' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Patient Portal', href: '/patient' },
  { label: 'Admin', href: '/admin' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-teal text-lg font-bold text-white shadow-soft">
            H
          </div>
          <div>
            <div className="text-lg font-bold tracking-tight text-navy">HealthScan</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">Diagnostics</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition ${pathname === item.href ? 'text-teal' : 'text-slate-600 hover:text-navy'}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-teal hover:text-teal">
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Link href="/book-test" className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-[#0b7e74]">
            Book a Test
          </Link>
        </div>

        <button className="xl:hidden" onClick={() => setOpen((value) => !value)} aria-label="Open menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-xl px-3 py-2 text-sm font-medium ${pathname === item.href ? 'bg-teal/10 text-teal' : 'text-slate-700'}`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={siteConfig.phoneHref} className="mt-2 inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-white/20 to-teal text-lg font-bold">
                H
              </div>
              <div>
                <div className="text-xl font-bold">HealthScan</div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-300">Diagnostics</div>
              </div>
            </div>
            <p className="text-sm text-slate-300">Premium diagnostic support with patient-first care, convenience and secure healthcare reporting.</p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/tests">Diagnostic Tests</Link></li>
              <li><Link href="/packages">Health Packages</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="/book-test">Book a Test</Link></li>
              <li><Link href="/home-sample">Home Collection</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>{siteConfig.address}</li>
              <li><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 HealthScan Diagnostics. Demo content for design evaluation only.</p>
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
