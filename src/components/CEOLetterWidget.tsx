import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaEnvelopeOpenText } from "react-icons/fa6";
import chide from "@/assets/chide.png";

const CEOLetterWidget = () => {
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsWidgetVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWidgetVisible(false);
    sessionStorage.setItem("lombard_ceo_letter_dismissed", "true");
    setHasDismissed(true);
  };

  const openLetter = () => {
    setIsWidgetVisible(false);
    setIsModalOpen(true);
  };

  const closeLetter = () => {
    setIsModalOpen(false);
    sessionStorage.setItem("lombard_ceo_letter_dismissed", "true");
    setHasDismissed(true);
  };

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {isWidgetVisible && !isModalOpen && !hasDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 group cursor-pointer"
            onClick={openLetter}
          >
            <div className="bg-[#0a0c0a] border border-[#52796F]/30 shadow-2xl rounded-2xl p-4 flex items-center gap-4 hover:border-[#52796F] transition-colors max-w-[320px]">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10">
                <img src={chide} alt="Dr. Chide Okonkwo" className="object-cover w-full h-full object-top" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#52796F] mb-1">A message from</p>
                <p className="text-white text-sm truncate font-medium">The Group CEO</p>
              </div>
              <button 
                onClick={handleDismiss}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors shrink-0"
              >
                <FaXmark />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLetter}
              className="absolute inset-0 bg-[#0a0c0a]/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-full max-w-5xl bg-[#F9F9F7] rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-full"
            >
              {/* Close Button - positioned absolutely to the modal */}
              <button 
                onClick={closeLetter}
                className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 text-black transition-colors"
              >
                <FaXmark />
              </button>

              {/* Image side - taking up 40% on desktop */}
              <div className="w-full md:w-2/5 bg-[#111311] relative min-h-[250px] md:min-h-0 hidden md:block">
                <img src={chide} alt="Dr. Chide Okonkwo" className="absolute inset-0 w-full h-full object-cover object-top opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white font-sans text-2xl mb-1">Dr. Chide Okonkwo</h3>
                  <p className="text-[#52796F] text-xs font-bold uppercase tracking-widest">Group CEO</p>
                </div>
              </div>

              {/* Text side - taking up 60% on desktop, styled scrollbar */}
              <div className="w-full md:w-3/5 p-8 sm:p-10 lg:p-14 overflow-y-auto font-poppins text-[#0F120F] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-black/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-black/20">
                <div className="md:hidden flex items-center gap-4 mb-8">
                  <img src={chide} alt="Dr. Chide" className="w-16 h-16 rounded-full object-cover border border-[#0F120F]/10" />
                  <div>
                    <h3 className="font-sans text-xl mb-1">Dr. Chide Okonkwo</h3>
                    <p className="text-[#52796F] text-xs font-bold uppercase tracking-wider">Group CEO</p>
                  </div>
                </div>

                <FaEnvelopeOpenText className="text-[#52796F] text-3xl mb-8" />
                
                <h2 className="font-sans text-3xl sm:text-4xl mb-6 leading-tight pr-8">Building the Future of African Finance</h2>
                
                <div className="space-y-6 text-base text-[#0F120F]/80 leading-relaxed">
                  <p>
                    Dear Partners, Clients, and Shareholders,
                  </p>
                  <p>
                    We stand at a defining moment in the evolution of Africa's financial landscape. The complexities of today's global markets require not just resilience, but a profound commitment to agility and strategic foresight.
                  </p>
                  <p>
                    Over the past year, Lombard HoldCo has demonstrated the immense strength of our diversified model. As we navigate macroeconomic shifts, our focus remains unwavering: to deploy institutional capital where it matters most, driving sustainable growth across the continent.
                  </p>
                  <p>
                    Our mandate goes beyond conventional banking. We are actively shaping the infrastructure of tomorrow—investing deeply in talent, robust governance, and transformative technologies that will define the next generation of financial services. 
                  </p>
                  <p>
                    I am incredibly proud of what our team has achieved, but our ambition dictates that this is merely the beginning. Thank you for your continued trust as we build an institution that Africa can be unequivocally proud of.
                  </p>
                  <p className="pt-6 font-medium italic text-[#0F120F]">
                    — Dr. Chide Okonkwo
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CEOLetterWidget;
