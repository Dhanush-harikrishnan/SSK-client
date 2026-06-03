import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#020C1B] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="relative">
            <h1 className="text-[80px] font-bold text-[#0070F3] tracking-wider mb-4 leading-none">
              SSK
            </h1>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="h-full bg-[#0070F3]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
