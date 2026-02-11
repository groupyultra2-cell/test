"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-24 text-center">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-8">
                    Ready to modernize <br /> your treasury?
                </h2>
                <p className="text-black/70 text-lg md:text-xl max-w-xl mx-auto mb-12">
                    Join over 2,500 forward-thinking companies already using NovaPay to power their global operations.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/80 transition-all flex items-center justify-center gap-2 group">
                        Get Started for Free
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto bg-transparent border-2 border-black/20 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-black/5 transition-all">
                        Talk to Sales
                    </button>
                </div>

                <p className="mt-8 text-black/40 text-sm font-medium">
                    No credit card required. Up and running in 10 minutes.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
