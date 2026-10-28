import { useState } from "react";
import { ArrowUpRight, ArrowUp, ArrowDown } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import InstitutionalLayout, {
  SectionHeading,
} from "@/components/InstitutionalLayout";
import {
  tickers,
  keyMetrics,
  latestEarnings,
  annualReports,
  sharePriceHistory,
  dividendHistory,
  analystCoverage,
  shareholderServices,
} from "@/data/investors";

const sections = [
  ["overview", "Overview"],
  ["results", "Results & reports"],
  ["share-price", "Share price"],
  ["dividends", "Dividends"],
  ["shareholders", "Shareholder services"],
];
export default function Investors() {
  const [period, setPeriod] = useState<"1Y" | "5Y">("1Y");
  const prices =
    period === "1Y" ? sharePriceHistory.oneYear : sharePriceHistory.fiveYear;
  return (
    <InstitutionalLayout
      title="Investor relations"
      label="Investor relations"

      aside={
        <a
          className="text-link"
          href="mailto:investor.relations@lombardholdco.com"
        >
          Contact investor relations <ArrowUpRight size={18} />
        </a>
      }
    >
      <nav className="section-navigation" aria-label="Investor sections">
        <div className="site-container">
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </nav>
      <section id="overview" className="institutional-section site-container">
        <SectionHeading
          label="Group overview"
          title="Financial information"
        ></SectionHeading>
        <div className="financial-metrics">
          {keyMetrics.map((metric) => (
            <div key={metric.label}>
              <span className="eyebrow">{metric.label}</span>
              <strong>{metric.value}</strong>
              <span>{metric.subValue}</span>
            </div>
          ))}
        </div>
      </section>
      <section id="results" className="institutional-section tinted-section">
        <div className="site-container">
          <SectionHeading
            label="Financial reporting"
            title="Results & reports"
          />
          <div className="results-layout">
            <div className="earnings-panel">
              <span className="eyebrow">
                Latest results · {latestEarnings.quarter}
              </span>
              <h3>Quarterly results</h3>
              <dl>
                {[
                  ["Revenue", latestEarnings.revenue],
                  ["Net income", latestEarnings.netIncome],
                  ["Return on equity", latestEarnings.roe],
                  ["Non-performing loans", latestEarnings.npl],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div className="report-actions">
                <a href={latestEarnings.deckUrl}>
                  Request presentation <ArrowUpRight size={18} />
                </a>
                <a href={latestEarnings.transcriptUrl}>
                  Request transcript <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
            <div className="report-register">
              <h3>Annual reports</h3>
              {annualReports.map((report) => (
                <a
                  key={report.year}
                  href={`mailto:investor.relations@lombardholdco.com?subject=${encodeURIComponent(report.title + " request")}`}
                >
                  <span className="report-year">{report.year}</span>
                  <div>
                    <h4>{report.title}</h4>
                    <span>Request report</span>
                  </div>
                  <ArrowUpRight size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="share-price"
        className="institutional-section site-container"
      >
        <SectionHeading
          label="Equity information"
          title="Share price"
        ></SectionHeading>
        <span className="market-data-note">
          Historical prices · 9 February 2026
        </span>
        <div className="market-quotes">
          {[tickers.ngx, tickers.lse].map((ticker) => (
            <div key={ticker.symbol}>
              <div>
                <span className="eyebrow">{ticker.exchange}</span>
                <h3>{ticker.symbol}</h3>
              </div>
              <div>
                <strong>
                  {ticker.currency === "GBP" ? "£" : "₦"}
                  {ticker.price.toFixed(2)}
                </strong>
                <span className="quote-change">
                  {ticker.change >= 0 ? (
                    <ArrowUp size={15} />
                  ) : (
                    <ArrowDown size={15} />
                  )}{" "}
                  {ticker.changePercent}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="price-chart-panel">
          <div className="chart-toolbar">
            <h3>
              NGX share price <span>NGN</span>
            </h3>
            <div
              className="institutional-tabs"
              role="group"
              aria-label="Share price period"
            >
              {(["1Y", "5Y"] as const).map((value) => (
                <button
                  key={value}
                  aria-pressed={period === value}
                  onClick={() => setPeriod(value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <div
            className="price-chart"
            role="img"
            aria-label={`Lombard NGX historical share price over ${period === "1Y" ? "one year" : "five years"}`}
          >
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={prices}
                margin={{ top: 15, right: 15, left: 0, bottom: 10 }}
              >
                <defs>
                  <linearGradient id="share-area" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#52796f" stopOpacity={0.18} />
                    <stop offset="100%" stopColor="#52796f" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#dfe4dc" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 12 }}
                  tickMargin={12}
                  axisLine={false}
                  tickLine={false}
                  minTickGap={35}
                />
                <YAxis
                  domain={["auto", "auto"]}
                  tick={{ fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={50}
                />
                <Tooltip formatter={(value) => [`₦${value}`, "Share price"]} />
                <Area
                  dataKey="price"
                  stroke="#52796f"
                  fill="url(#share-area)"
                  strokeWidth={2}
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section id="dividends" className="institutional-section tinted-section">
        <div className="site-container dividends-layout">
          <div>
            <span className="eyebrow section-label">Distributions</span>
            <h2>Dividend history</h2>
          </div>
          <div className="data-table-wrap">
            <table className="institutional-table">
              <caption className="table-unit-note">
                NGN per ordinary share
              </caption>
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Interim</th>
                  <th scope="col">Final</th>
                  <th scope="col">Total / share</th>
                </tr>
              </thead>
              <tbody>
                {dividendHistory.map((item) => (
                  <tr key={item.year}>
                    <th scope="row">{item.year}</th>
                    <td>₦{item.interim.toFixed(2)}</td>
                    <td>₦{item.final.toFixed(2)}</td>
                    <td>₦{item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="institutional-section site-container">
        <SectionHeading label="Research coverage" title="Analyst coverage" />
        <div className="data-table-wrap">
          <table className="institutional-table">
            <thead>
              <tr>
                <th scope="col">Institution</th>
                <th scope="col">Analyst</th>
                <th scope="col">Last update</th>
              </tr>
            </thead>
            <tbody>
              {analystCoverage.map((item) => (
                <tr key={item.firm}>
                  <th scope="row">{item.firm}</th>
                  <td>{item.analyst}</td>
                  <td>
                    {new Date(item.lastUpdate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section
        id="shareholders"
        className="institutional-section shareholder-section"
      >
        <div className="site-container">
          <SectionHeading
            label="Shareholder enquiries"
            title="Shareholder services"
          />
          <div className="shareholder-layout">
            <div>
              <h3>Registrar</h3>
              <p>{shareholderServices.registrar.name}</p>
              <address>{shareholderServices.registrar.address}</address>
              <a href={`mailto:${shareholderServices.registrar.email}`}>
                {shareholderServices.registrar.email}
              </a>
              <a
                href={`tel:${shareholderServices.registrar.phone.replace(/\s/g, "")}`}
              >
                {shareholderServices.registrar.phone}
              </a>
            </div>
            <div className="shareholder-forms">
              <h3>Forms &amp; administration</h3>
              {shareholderServices.forms.map((item) => (
                <a key={item.title} href={item.url}>
                  {item.title}
                  <ArrowUpRight size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </InstitutionalLayout>
  );
}
