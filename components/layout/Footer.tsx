import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

const services = [
  "Web Development",
  "App Development",
  "AI Solutions",
  "SaaS Development",
  "Digital Marketing",
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Our Process", href: "/about#process" },
  { label: "Careers", href: "/about#careers" },
  { label: "Contact", href: "/contact" },
];

const resources = [
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/resources" },
  { label: "Insights", href: "/resources" },
  { label: "AI & Tech Articles", href: "/resources" },
  { label: "Book Consultation", href: "/book" },
];

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="h-2 w-full grad" />

      <div className="bg-glass">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl grad text-white font-semibold">
                  O
                </span>
                <span className="font-semibold text-fg">Optimus Consulting</span>
              </div>

              <p className="mt-4 text-sm text-muted">
                A top-tier global consulting, SaaS, and AI engineering partner for complex and high-budget projects.
              </p>

              <div className="mt-6 space-y-3 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  contact@optimusconsulting.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-blue-500" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  San Francisco, CA
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-fg">Services</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {services.map((s) => (
                  <li key={s} className="hover:text-fg transition">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-fg">Company</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {company.map((c) => (
                  <li key={c.href}>
                    <Link className="hover:text-fg transition" href={c.href}>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-fg">Resources</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {resources.map((r) => (
                  <li key={r.href}>
                    <Link className="hover:text-fg transition" href={r.href}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3 text-muted">
                <a className="hover:text-fg transition" href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
                <a className="hover:text-fg transition" href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a className="hover:text-fg transition" href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-6 text-xs text-muted-2">
            © 2026 Optimus Consulting Agency. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
