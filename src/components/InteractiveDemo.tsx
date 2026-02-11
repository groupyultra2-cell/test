"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, DollarSign, Shield } from "lucide-react";

export function InteractiveDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((s) => (s + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { title: "Initiate Transfer", desc: "Select recipient and amount" },
    { title: "Compliance Check", desc: "Automated AML/KYC screening" },
    { title: "Smart Routing", desc: "Selecting fastest local rail" },
    { title: "Funds Delivered", desc: "Instant settlement achieved" }
  ];

  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Move money <br />
              <span className="text-primary">at the speed of light.</span>
            </h2>
            <div className="space-y-6">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex gap-4 p-4 rounded-2xl transition-all duration-500 ${
                    step === i ? "bg-white/5 border border-white/10" : "opacity-40"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    step === i ? "bg-primary text-black" : "bg-white/10"
                  }`}>
                    {step > i ? <CheckCircle2 className="w-5 h-5" /> : <span>{i + 1}</span>}
                  </div>
                  <div>
                    <h4 className="font-bold">{s.title}</h4>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
            <div className="glass border border-white/10 rounded-3xl p-8 aspect-square flex flex-col items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.div
                            key="step0"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                                <DollarSign className="w-12 h-12 text-primary" />
                            </div>
                            <div className="text-3xl font-bold">$142,000.00</div>
                            <div className="text-muted-foreground uppercase tracking-widest text-xs">Sending to London Office</div>
                        </motion.div>
                    )}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, rotate: -10 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 10 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <div className="relative">
                                <div className="w-32 h-32 border-4 border-primary/20 rounded-full animate-spin border-t-primary" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Shield className="w-12 h-12 text-primary" />
                                </div>
                            </div>
                            <div className="text-2xl font-bold italic tracking-tighter">SECURE VERIFICATION...</div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className="flex flex-col items-center gap-8 w-full"
                        >
                           <div className="flex items-center gap-4 w-full justify-center">
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">NY</div>
                                <motion.div
                                    animate={{ width: [0, 100] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="h-1 bg-primary rounded-full relative overflow-hidden"
                                >
                                    <motion.div
                                        animate={{ x: [-20, 120] }}
                                        transition={{ duration: 0.5, repeat: Infinity }}
                                        className="absolute top-0 bottom-0 w-4 bg-white shadow-[0_0_15px_white]"
                                    />
                                </motion.div>
                                <div className="p-4 bg-white/5 rounded-xl border border-white/10">LDN</div>
                           </div>
                           <div className="text-xl font-medium">Optimizing Route via SwiftGo</div>
                        </motion.div>
                    )}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="flex flex-col items-center gap-6"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center text-black"
                            >
                                <CheckCircle2 className="w-12 h-12" />
                            </motion.div>
                            <div className="text-4xl font-bold">Success!</div>
                            <div className="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-mono border border-emerald-500/20">
                                TXN: 0x82f...a10e
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
