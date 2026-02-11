"use client";

import { motion } from "framer-motion";

const companies = [
  "Acme Corp", "GlobalFlow", "FinTech OS", "Nexa", "Vault", "Pioneer", "Apex", "Orbit"
];

export function Logos() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10">
          Trusted by 500+ global enterprises
        </p>

        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear"
                }
            }}
            className="flex gap-20 whitespace-nowrap"
          >
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="text-2xl font-bold text-muted-foreground/30 hover:text-primary transition-colors cursor-default"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
