import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'components', 'GovernanceSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add activeTab state
if (!content.includes('const [activeTab')) {
  content = content.replace('const [showBio, setShowBio] = useState(false);', 'const [showBio, setShowBio] = useState(false);\n  const [activeTab, setActiveTab] = useState<"board" | "executive">("board");');
}

// Replace hero sizing
content = content.replace(
  'h1 className="font-sans text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-8 tracking-tight leading-[0.9]"',
  'h1 className="font-sans text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight leading-tight"'
);

// Add Tab selector right after the </motion.div> of the hero section
const tabHTML = \
        </motion.div>
        
        {/* TAB SELECTOR */}
        <div className="flex gap-4 sm:gap-8 mt-12 border-b border-[#0F120F]/10">
          <button 
            onClick={() => setActiveTab("board")}
            className={\pb-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all \\}
          >
            Board of Directors
          </button>
          <button 
            onClick={() => setActiveTab("executive")}
            className={\pb-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all \\}
          >
            Executive Management
          </button>
        </div>
      </section>

      {/* RENDER CONTENT BASED ON TAB */}
      <AnimatePresence mode="wait">
        {activeTab === "board" ? (
          <motion.div
            key="board"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
\;

content = content.replace(
  '</motion.div>\n      </section>\n\n      {/* BOARD OF DIRECTORS (Moved to top) */}',
  tabHTML + '      {/* BOARD OF DIRECTORS (Moved to top) */}'
);

// We need to close the board motion.div and open the executive motion.div
content = content.replace(
  '</section>\n\n      {/* EXECUTIVE COMMITTEE (Carousel) */}',
  '</section>\n          </motion.div>\n        ) : (\n          <motion.div\n            key="executive"\n            initial={{ opacity: 0, y: 20 }}\n            animate={{ opacity: 1, y: 0 }}\n            exit={{ opacity: 0, y: -20 }}\n            transition={{ duration: 0.3 }}\n          >\n      {/* EXECUTIVE COMMITTEE (Carousel) */}'
);

// We need to close the executive motion.div and AnimatePresence
content = content.replace(
  '</section>\n\n    </div>',
  '</section>\n          </motion.div>\n        )}\n      </AnimatePresence>\n\n    </div>'
);

fs.writeFileSync(filePath, content, 'utf8');
