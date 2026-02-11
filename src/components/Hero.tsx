"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NovaPay v2.0 is now live
            <ChevronRight className="w-3 h-3" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            The Operating System <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              for Global Finance.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            NovaPay empowers modern businesses to automate treasury, manage cross-border payments, and issue corporate cards with zero friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
              Start Scaling Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Demo
            </button>
          </motion.div>

          {/* Abstract Dashboard Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative w-full max-w-5xl aspect-video rounded-2xl border border-white/10 glass shadow-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
            <div className="p-4 md:p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-6 w-32 bg-white/5 rounded-full" />
              </div>
              <div className="flex-1 grid grid-cols-3 gap-4 md:gap-8">
                <div className="col-span-2 space-y-4">
                  <div className="h-32 bg-primary/10 border border-primary/20 rounded-xl flex items-end p-4">
                    <div className="w-full flex items-end gap-1 h-full">
                      {[40, 70, 45, 90, 65, 80, 50, 60, 85, 40].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                          className="flex-1 bg-primary/40 rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 bg-white/5 rounded-xl border border-white/10 p-4">
                      <div className="h-2 w-12 bg-white/10 rounded-full mb-2" />
                      <div className="h-4 w-20 bg-white/20 rounded-full" />
                    </div>
                    <div className="h-24 bg-white/5 rounded-xl border border-white/10 p-4">
                      <div className="h-2 w-12 bg-white/10 rounded-full mb-2" />
                      <div className="h-4 w-20 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-full bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-3">
                     {[1,2,3,4,5].map(i => (
                        <div key={i} className="flex items-center gap-2">
                           <div className="w-6 h-6 rounded-full bg-white/10" />
                           <div className="flex-1 space-y-1">
                              <div className="h-2 w-full bg-white/10 rounded-full" />
                              <div className="h-2 w-2/3 bg-white/5 rounded-full" />
                           </div>
                        </div>
                     ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay interactive hint */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm pointer-events-none">
                <div className="bg-white text-black px-6 py-3 rounded-full font-bold shadow-xl">
                    Explore Ecosystem
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
