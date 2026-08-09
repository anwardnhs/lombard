import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const InvestorSection = () => {
  return (
    <section id="investors" className="py-24 px-6">
      <div className="container mx-auto">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-primary mb-4">Investor Relations</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Financial Performance
        </h2>
        <div className="section-divider w-20 mb-12" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Credit Ratings */}
          <motion.div
            className="border border-border bg-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Credit Ratings</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-sans text-sm text-muted-foreground">Moody's</span>
                <span className="font-sans text-lg font-bold text-primary">B2 (Stable)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="font-sans text-sm text-muted-foreground">Fitch</span>
                <span className="font-sans text-lg font-bold text-primary">B+ (Stable)</span>
              </div>
            </div>
          </motion.div>

          {/* Shareholding */}
          <motion.div
            className="border border-border bg-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Shareholding Structure</h3>
            <div className="space-y-3">
              {[
                { label: "G4 Founders", value: "28.5%" },
                { label: "AfDB", value: "4.2%" },
                { label: "Institutional & Public", value: "67.3%" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between mb-1">
                    <span className="font-sans text-sm text-muted-foreground">{s.label}</span>
                    <span className="font-sans text-sm font-semibold text-foreground">{s.value}</span>
                  </div>
                  <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: s.value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports */}
          <motion.div
            className="border border-border bg-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">Reports & Filings</h3>
            <div className="space-y-3">
              {["2025 Annual Report", "Q3 2025 Results", "2024 Annual Report", "Sustainability Report 2025"].map((r) => (
                <a
                  key={r}
                  href="#"
                  className="flex items-center gap-3 py-3 border-b border-border group hover:border-primary/30 transition-colors"
                >
                  <FileText className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="font-sans text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1">
                    {r}
                  </span>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Market Data Table */}
        <motion.div
          className="mt-12 border border-border bg-card overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-6 border-b border-border">
            <h3 className="font-serif text-xl font-semibold text-foreground">Live Market Data</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  {["Exchange", "Ticker", "Last Price", "Change", "Volume", "Market Cap"].map((h) => (
                    <th key={h} className="font-sans text-xs tracking-wider uppercase text-muted-foreground text-left p-4">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="font-sans text-sm text-foreground p-4">NGX</td>
                  <td className="font-sans text-sm font-semibold text-foreground p-4">LOMBARD</td>
                  <td className="font-sans text-sm text-foreground p-4">₦487.50</td>
                  <td className="font-sans text-sm p-4" style={{ color: "hsl(160, 60%, 55%)" }}>+₦11.20 (+2.35%)</td>
                  <td className="font-sans text-sm text-muted-foreground p-4">12.4M</td>
                  <td className="font-sans text-sm text-foreground p-4">₦6.5T</td>
                </tr>
                <tr className="hover:bg-secondary/50 transition-colors">
                  <td className="font-sans text-sm text-foreground p-4">LSE</td>
                  <td className="font-sans text-sm font-semibold text-foreground p-4">LMB</td>
                  <td className="font-sans text-sm text-foreground p-4">$31.20</td>
                  <td className="font-sans text-sm p-4" style={{ color: "hsl(160, 60%, 55%)" }}>+$0.35 (+1.13%)</td>
                  <td className="font-sans text-sm text-muted-foreground p-4">890K</td>
                  <td className="font-sans text-sm text-foreground p-4">$4.48B</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestorSection;
