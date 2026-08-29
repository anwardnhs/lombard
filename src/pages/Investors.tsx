import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  FaDownload, 
  FaChevronRight, 
  FaChartLine, 
  FaCalendar,
  FaFileContract,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaFilePdf,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
  FaArrowDown
} from "react-icons/fa6";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

// Import data (Mocking structure based on your imports)
import {
  tickers,
  keyMetrics,
  quarterlyEarnings,
  latestEarnings,
  annualReports,
  sharePriceHistory,
  priceStats,
  dividendHistory,
  agmInfo,
  analystCoverage,
  shareholderServices,
  faqs
} from "@/data/investors";

const InvestorsSection = () => {
  const [priceView, setPriceView] = useState<'1Y' | '5Y'>('1Y');
  const [activeSection, setActiveSection] = useState("overview");
  const prefersReducedMotion = useReducedMotion();

  // Refs for ScrollSpy
  const sections = {
    overview: useRef<HTMLDivElement>(null),
    financials: useRef<HTMLDivElement>(null),
    stock: useRef<HTMLDivElement>(null),
    dividends: useRef<HTMLDivElement>(null),
    governance: useRef<HTMLDivElement>(null),
    analysts: useRef<HTMLDivElement>(null),
    services: useRef<HTMLDivElement>(null),
  };

  const scrollTo = (key: keyof typeof sections) => {
    const element = sections[key].current;
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 120;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // ScrollSpy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" } // Trigger when element is near top
    );

    Object.values(sections).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const priceData = priceView === '1Y' ? sharePriceHistory.oneYear : sharePriceHistory.fiveYear;

  const NavItem = ({ id, label, icon: Icon }: any) => (
    <button
      onClick={() => scrollTo(id)}
      className={`group flex items-center w-full text-left py-3 pl-4 border-l-[3px] text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
        activeSection === id
          ? "border-[#0F120F] text-[#0F120F] bg-[#0a0c0a]/5"
          : "border-transparent text-[#0F120F]/50 hover:text-[#0F120F] hover:bg-[#0a0c0a]/[0.02]"
      }`}
    >
      <span className="flex-1">{label}</span>
      {activeSection === id && <Icon className="mr-4 text-[#0F120F]" />}
    </button>
  );

  return (
    <>
      <Header />
      <div className="fixed top-0 left-0 w-full h-20 sm:h-24 bg-[#0a0c0a] z-40" aria-hidden="true" />
      
      <div className="bg-[#F9F9F7] font-poppins text-[#0F120F] min-h-screen pt-20 pb-24">
        
        {/* --- PAGE HEADER --- */}
        <div className="bg-[#F4F4F0] border-b border-[#0F120F]/10 pt-16 pb-20 px-6 lg:px-12">
          <div className="container mx-auto max-w-[1400px]">
            <div className="max-w-4xl">
              <Breadcrumbs items={[{ label: "Investors" }]} className="mb-6" />
              
              <h1 className="font-poppins text-5xl md:text-7xl text-[#0F120F] tracking-tight mb-8">
                Performance & <br /> <span className="text-[#0F120F]/40 italic">Governance.</span>
              </h1>
              <p className="text-xl text-[#0F120F]/80 max-w-2xl leading-relaxed font-light">
                Transparent financial reporting and disciplined capital allocation driving long-term shareholder value.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1400px] px-6 lg:px-12 mt-16">
          <div className="grid lg:grid-cols-12 gap-16 relative">

            {/* --- STICKY SIDEBAR (Hick's Law) --- */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/40 mb-4 pl-4">On this page</p>
                <nav className="flex flex-col mb-8 border-l border-[#0F120F]/10">
                  <NavItem id="overview" label="Market Snapshot" icon={FaChartLine} />
                  <NavItem id="financials" label="Financial Results" icon={FaFileContract} />
                  <NavItem id="stock" label="Share Price" icon={FaArrowTrendUp} />
                  <NavItem id="dividends" label="Dividends" icon={FaCalendar} />
                  <NavItem id="analysts" label="Analyst Coverage" icon={FaChartLine} />
                  <NavItem id="services" label="Shareholder Services" icon={FaEnvelope} />
                </nav>

                {/* Quick IR Contact */}
                <div className="bg-white border-2 border-[#0F120F]/10 p-6 mt-6">
                  <h4 className="font-sans text-lg mb-2 text-[#0F120F]">IR Contact</h4>
                  <p className="text-xs text-[#0F120F]/60 mb-4">
                    For institutional inquiries:
                  </p>
                  <a href="mailto:ir@lombardholdco.com" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-[#52796F] transition-colors">
                    <FaEnvelope /> ir@lombardholdco.com
                  </a>
                </div>
              </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="lg:col-span-9 space-y-24">

              {/* 1. OVERVIEW (Tickers) */}
              <section id="overview" ref={sections.overview} className="scroll-mt-32">
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  {[tickers.ngx, tickers.lse].map((ticker, idx) => (
                    <div key={idx} className="bg-white border-2 border-[#0F120F]/10 p-8 hover:shadow-xl hover:border-[#52796F] transition-all duration-300 group">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#0F120F]/50 mb-1">
                            {ticker.exchange} Ticker
                          </span>
                          <span className="text-2xl font-mono font-bold text-[#0F120F]">{ticker.symbol}</span>
                        </div>
                        <span className={`px-2 py-1 text-xs font-bold font-mono rounded ${
                          ticker.change.toString().startsWith('+') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {ticker.change.toString().startsWith('+') ? <FaArrowUp className="inline text-[10px] mr-1" /> : <FaArrowDown className="inline text-[10px] mr-1" />}
                          {ticker.change}%
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-end border-t border-[#0F120F]/10 pt-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest text-[#0F120F]/50 mb-1">Current Price</p>
                          <p className="font-mono text-2xl font-bold text-[#0F120F]">
                            {ticker.currency === "GBP" ? "£" : "₦"}{ticker.price}
                          </p>
                        </div>
                        <p className="text-xs text-[#0F120F]/40 italic">
                          Updated: {new Date(ticker.lastUpdated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#0a0c0a]/10 border border-[#0F120F]/10 overflow-hidden rounded-sm">
                  {keyMetrics.map((metric, idx) => (
                    <div key={idx} className="bg-white p-6 hover:bg-[#F9F9F7] transition-colors">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#0F120F]/50 mb-2">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-[#0F120F] mb-1">{metric.value}</p>
                      <p className="text-xs font-medium text-[#0F120F]/70">{metric.subValue}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 2. FINANCIAL RESULTS */}
              <section id="financials" ref={sections.financials} className="scroll-mt-32">
                <div className="flex items-end justify-between mb-10 border-b border-[#0F120F]/10 pb-6">
                  <h2 className="font-sans text-3xl md:text-4xl text-[#0F120F]">Financial Results</h2>
                  <span className="hidden md:inline-block text-xs font-bold uppercase tracking-widest text-[#0F120F]/40">
                    Latest Quarter: {latestEarnings.quarter}
                  </span>
                </div>

                <div className="grid md:grid-cols-12 gap-10">
                  {/* Latest Earnings Card */}
                  <div className="md:col-span-7 bg-white p-8 border border-[#0F120F]/10 shadow-sm">
                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F120F]/40 mb-6">Highlights</h3>
                    <div className="grid grid-cols-2 gap-8 mb-8">
                      <div>
                        <p className="text-sm text-[#0F120F]/60 mb-1">Revenue</p>
                        <p className="text-3xl font-light text-[#0F120F]">{latestEarnings.revenue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#0F120F]/60 mb-1">Net Income</p>
                        <p className="text-3xl font-light text-[#0F120F]">{latestEarnings.netIncome}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#0F120F]/60 mb-1">ROE</p>
                        <p className="text-xl font-bold text-[#0F120F]">{latestEarnings.roe}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#0F120F]/60 mb-1">NPL Ratio</p>
                        <p className="text-xl font-bold text-[#0F120F]">{latestEarnings.npl}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-6 border-t border-[#0F120F]/5">
                      <a href={latestEarnings.deckUrl} className="flex items-center gap-2 px-4 py-3 bg-[#0a0c0a] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#52796F] hover:text-[#0F120F] transition-colors">
                        <FaDownload /> Presentation
                      </a>
                      <a href={latestEarnings.transcriptUrl} className="flex items-center gap-2 px-4 py-3 border border-[#0F120F]/20 text-[#0F120F] text-xs font-bold uppercase tracking-widest hover:border-[#0F120F] transition-colors">
                        Transcript
                      </a>
                    </div>
                  </div>

                  {/* Revenue Chart */}
                  <div className="md:col-span-5">
                    <div className="bg-white p-6 border border-[#0F120F]/10 h-full">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F120F]/40 mb-6">Revenue Trend (8 Qtrs)</p>
                      <div className="h-48 w-full">
                        <ResponsiveContainer>
                          <AreaChart data={quarterlyEarnings}>
                            <defs>
                              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0F120F" stopOpacity={0.1}/>
                                <stop offset="95%" stopColor="#0F120F" stopOpacity={0}/>
                              </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis dataKey="quarter" tick={{fontSize: 10}} axisLine={false} tickLine={false} />
                            <Tooltip contentStyle={{backgroundColor: '#0F120F', color: '#fff', fontSize: '12px', border: 'none'}} />
                            <Area type="monotone" dataKey="revenue" stroke="#0F120F" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={2} />
                          </AreaChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Annual Reports (Grid of Cards) */}
                <div className="mt-12">
                  <h3 className="font-sans text-2xl mb-6">Annual Reports</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {annualReports.map((report) => (
                      <div key={report.year} className="group bg-white p-6 border border-[#0F120F]/10 hover:border-[#0F120F] transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-3xl font-bold text-[#0F120F]">{report.year}</span>
                          <FaFilePdf className="text-[#0F120F]/20 group-hover:text-[#0F120F] transition-colors text-2xl" />
                        </div>
                        <p className="text-sm font-medium text-[#0F120F]/70 mb-6 line-clamp-2">{report.title}</p>
                        <a href={report.pdfUrl} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0F120F] group-hover:text-[#52796F] transition-colors">
                          <FaDownload /> Download PDF
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 3. SHARE PRICE */}
              <section id="stock" ref={sections.stock} className="scroll-mt-32">
                <div className="flex items-end justify-between mb-10 border-b border-[#0F120F]/10 pb-6">
                  <h2 className="font-sans text-3xl md:text-4xl text-[#0F120F]">Share Price</h2>
                  
                  {/* Fitts Law: Large Toggle Buttons */}
                  <div className="flex bg-white border border-[#0F120F]/10 rounded-sm overflow-hidden">
                    {['1Y', '5Y'].map((view) => (
                      <button
                        key={view}
                        onClick={() => setPriceView(view as any)}
                        className={`px-6 py-2 text-xs font-bold transition-colors ${
                          priceView === view 
                            ? 'bg-[#0a0c0a] text-white' 
                            : 'bg-white text-[#0F120F]/50 hover:text-[#0F120F]'
                        }`}
                      >
                        {view}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 md:p-10 border border-[#0F120F]/10 mb-8">
                  <div className="h-[350px] w-full">
                    <ResponsiveContainer>
                      <LineChart data={priceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="date" tick={{fontSize: 11}} axisLine={false} tickLine={false} />
                        <YAxis tick={{fontSize: 11}} axisLine={false} tickLine={false} domain={['auto', 'auto']} />
                        <Tooltip contentStyle={{backgroundColor: '#fff', border: '1px solid #eee', fontSize: '12px'}} />
                        <Line type="monotone" dataKey="price" stroke="#0F120F" strokeWidth={2} dot={false} activeDot={{r: 6, fill: '#52796F'}} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Trading Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {[
                    { label: "52W High", val: priceStats.high52Week },
                    { label: "52W Low", val: priceStats.low52Week },
                    { label: "Avg Vol", val: priceStats.avgVolume },
                    { label: "Beta", val: priceStats.beta },
                    { label: "Div Yield", val: priceStats.dividendYield },
                    { label: "P/E", val: priceStats.peRatio }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-4 border border-[#0F120F]/5 text-center">
                      <span className="block text-[9px] font-bold uppercase tracking-widest text-[#0F120F]/40 mb-1">{stat.label}</span>
                      <span className="block font-bold text-[#0F120F]">{stat.val}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. DIVIDENDS */}
              <section id="dividends" ref={sections.dividends} className="scroll-mt-32">
                <h2 className="font-sans text-3xl md:text-4xl text-[#0F120F] mb-10 pb-6 border-b border-[#0F120F]/10">Dividend History</h2>
                
                <div className="bg-white border border-[#0F120F]/10 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F9F9F7] border-b border-[#0F120F]/10">
                      <tr>
                        <th className="py-4 px-6 text-left font-bold text-[#0F120F] uppercase tracking-wider text-xs">Fiscal Year</th>
                        <th className="py-4 px-6 text-right font-bold text-[#0F120F] uppercase tracking-wider text-xs">Interim</th>
                        <th className="py-4 px-6 text-right font-bold text-[#0F120F] uppercase tracking-wider text-xs">Final</th>
                        <th className="py-4 px-6 text-right font-bold text-[#0F120F] uppercase tracking-wider text-xs bg-[#0a0c0a]/5">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#0F120F]/5">
                      {dividendHistory.map((div) => (
                        <tr key={div.year} className="hover:bg-[#F9F9F7] transition-colors">
                          <td className="py-4 px-6 font-bold">{div.year}</td>
                          <td className="py-4 px-6 text-right tabular-nums text-[#0F120F]/70">₦{div.interim}</td>
                          <td className="py-4 px-6 text-right tabular-nums text-[#0F120F]/70">₦{div.final}</td>
                          <td className="py-4 px-6 text-right tabular-nums font-bold bg-[#0a0c0a]/5">₦{div.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 5. ANALYST COVERAGE */}
              <section id="analysts" ref={sections.analysts} className="scroll-mt-32">
                <h2 className="font-sans text-3xl md:text-4xl text-[#0F120F] mb-10 pb-6 border-b border-[#0F120F]/10">Analyst Coverage</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {analystCoverage.map((analyst, idx) => (
                    <div key={idx} className="bg-white p-6 border border-[#0F120F]/10 flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-[#0F120F] text-lg">{analyst.firm}</h4>
                        <p className="text-xs text-[#0F120F]/60 uppercase tracking-wider">{analyst.analyst}</p>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded mb-1 ${
                          analyst.rating.includes('Buy') ? 'bg-green-100 text-green-800' : 
                          analyst.rating.includes('Hold') ? 'bg-gray-100 text-gray-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {analyst.rating}
                        </span>
                        <p className="text-sm font-mono font-bold">TP: ₦{analyst.targetPrice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. SHAREHOLDER SERVICES */}
              <section id="services" ref={sections.services} className="scroll-mt-32">
                <div className="bg-white border-2 border-[#0F120F]/10 p-10 md:p-12">
                  <h2 className="font-sans text-3xl mb-8 text-[#0F120F]">Shareholder Services</h2>
                  
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F120F]/50 mb-4">Registrar Contact</h4>
                      <p className="text-lg font-bold mb-2 text-[#0F120F]">{shareholderServices.registrar.name}</p>
                      <address className="not-italic text-[#0F120F]/70 text-sm leading-relaxed mb-6">
                        {shareholderServices.registrar.address}<br />
                        <span className="block mt-2 text-[#0F120F]">T: {shareholderServices.registrar.phone}</span>
                        <span className="block text-[#0F120F]">E: {shareholderServices.registrar.email}</span>
                      </address>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-[#0F120F]/50 mb-4">Downloads</h4>
                      <div className="grid gap-3">
                        {shareholderServices.forms.map((form, idx) => (
                          <a key={idx} href={form.url} className="flex items-center justify-between p-4 bg-[#0a0c0a]/5 hover:bg-[#0a0c0a]/10 border border-[#0F120F]/10 transition-colors group">
                            <span className="text-sm font-medium text-[#0F120F]">{form.title}</span>
                            <FaDownload className="text-[#0F120F]/40 group-hover:text-[#0F120F]" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InvestorsSection;
