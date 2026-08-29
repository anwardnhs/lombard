import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const AnimatedNumber = ({ 
  value, 
  prefix = "", 
  suffix = "", 
  decimals = 0 
}: {
  value: number; 
  prefix?: string; 
  suffix?: string; 
  decimals?: number;
}) => {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  const formatted = decimals > 0
    ? display.toFixed(decimals)
    : Math.round(display).toLocaleString();

  return (
    <div ref={ref}>
      <span className="text-[#52796F] font-light">
        {prefix}{formatted}{suffix}
      </span>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { value: 36.5, prefix: "₦", suffix: "T", decimals: 1, label: "Total Assets", sublabel: "$25.2B USD" },
    { value: 14, prefix: "", suffix: "", decimals: 0, label: "Countries", sublabel: "Sub-Saharan Africa" },
    { value: 24800, prefix: "", suffix: "", decimals: 0, label: "Employees", sublabel: "Across Operations" },
    { value: 6.5, prefix: "₦", suffix: "T", decimals: 1, label: "Market Cap", sublabel: "$4.48B USD" },
  ];

  return (
    <section className="relative bg-[#1a1f1a] py-24 px-6 border-y border-[#52796F]/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(199, 211, 188, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199, 211, 188, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                className="relative group"
              >
                {/* Hover accent line */}
                <div className="absolute -left-4 top-0 bottom-0 w-[1px] bg-[#52796F] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                
                <div className="text-left">
                  <div className="text-[clamp(2.5rem,5vw,4rem)] leading-none mb-3">
                    <AnimatedNumber {...stat} />
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-[#52796F]/60 font-medium">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-[#52796F]/40">
                      {stat.sublabel}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom accent */}
        <motion.div 
          className="mt-16 pt-8 border-t border-[#52796F]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-6 text-[10px] tracking-[0.15em] uppercase text-[#52796F]/40">
            <span>FY 2025 Performance</span>
            <div className="flex items-center gap-6">
              <span>Net Profit: ₦460B</span>
              <span className="w-px h-3 bg-[#52796F]/20" />
              <span>ROE: 12.8%</span>
              <span className="w-px h-3 bg-[#52796F]/20" />
              <span>NPL Ratio: 4.2%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;