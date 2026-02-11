"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Globe, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Global Settlements",
    description: "Settle in 150+ currencies with real-time exchange rates and zero hidden fees.",
    icon: Globe,
    className: "md:col-span-2",
    bgColor: "bg-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    title: "Instant Issuance",
    description: "Issue virtual and physical corporate cards in seconds.",
    icon: Zap,
    className: "md:col-span-1",
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade encryption and multi-sig approval workflows for every transaction.",
    icon: Shield,
    className: "md:col-span-1",
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400"
  },
  {
    title: "AI Treasury",
    description: "Automate liquidity management with predictive AI that optimizes your cash flow.",
    icon: Cpu,
    className: "md:col-span-2",
    bgColor: "bg-orange-500/20",
    iconColor: "text-orange-400"
  }
];

export function Features() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for the speed of modern business.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Stop dealing with legacy banking silos. NovaPay brings all your financial operations into a single, unified dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-8 rounded-3xl border border-white/10 glass overflow-hidden",
                feature.className
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300",
                feature.bgColor
              )}>
                <feature.icon className={cn("w-6 h-6", feature.iconColor)} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
