import { TrendingUp } from "lucide-react";

const tickers = [
  { exchange: "NGX", symbol: "LOMBARD", price: "₦487.50", change: "+2.34%", up: true },
  { exchange: "LSE", symbol: "LMB", price: "$31.20", change: "+1.12%", up: true },
  { exchange: "EUROBOND", symbol: "LOMB 28", price: "6.875%", change: "-0.05%", up: false },
];

const TickerBar = () => {
  const tickerContent = tickers.map((t, i) => (
    <span key={i} className="inline-flex items-center gap-2 mx-8 whitespace-nowrap">
      <span className="text-muted-foreground font-sans text-xs tracking-widest uppercase">{t.exchange}:</span>
      <span className="font-sans text-xs font-semibold text-foreground">{t.symbol}</span>
      <span className="font-sans text-xs text-foreground">{t.price}</span>
      <span className={`font-sans text-xs font-medium ${t.up ? "text-emerald-400" : "text-red-400"}`}>
        {t.up && <TrendingUp className="inline h-3 w-3 mr-0.5" />}
        {t.change}
      </span>
    </span>
  ));

  return (
    <div className="bg-navy-light border-b border-border overflow-hidden">
      <div className="ticker-scroll inline-flex py-2">
        {tickerContent}
        {tickerContent}
        {tickerContent}
        {tickerContent}
      </div>
    </div>
  );
};

export default TickerBar;
