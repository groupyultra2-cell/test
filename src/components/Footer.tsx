"use client";

import Link from "next/link";
import { Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Security", "Corporate Cards", "Global Payments", "API Docs"]
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact", "Partners"]
  },
  {
    title: "Resources",
    links: ["Blog", "Community", "Support", "Trust Center", "Status"]
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy", "Licensing", "Compliance"]
  }
];

export function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
             <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
                </div>
                <span className="text-xl font-bold tracking-tight">NovaPay</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
                The modern financial operating system for global businesses. Automate treasury, manage expenses, and scale faster.
            </p>
            <div className="flex gap-4">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
                        <Icon className="w-5 h-5" />
                    </button>
                ))}
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center group gap-1">
                      {link}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 NovaPay Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-white transition-colors">Security Information</Link>
            <Link href="#" className="hover:text-white transition-colors">Responsible Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
