import { Button } from "@/components/ui/button";
import { openPaymentLink } from "@/lib/payment";
import { useState, useEffect } from "react";
import { Handle } from "vaul";

const StickyFooter = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const viewportHeight = window.innerHeight;
      const isMobileDevice = window.innerWidth < 768;
      
      // For mobile: show after scrolling just 30vh, for desktop: 50vh
      const threshold = isMobileDevice ? viewportHeight * 0.3 : viewportHeight * 0.5; 
      const shouldBeSticky = scrollHeight > threshold;

      console.log('Sticky Footer Debug:', {
        scrollHeight,
        viewportHeight,
        threshold,
        shouldBeSticky,
        isMobileDevice,
        windowWidth: window.innerWidth
      });

      setIsSticky(shouldBeSticky);
      setIsMobile(isMobileDevice);
    };

    // Initial checks
    checkMobile();
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all duration-300 ${
        isSticky
          ? "!fixed !bottom-0 !left-0 !right-0 !z-[99999] !block"
          : "relative"
      }`}
      style={{
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        className="mx-auto w-full px-2 sm:px-4 md:px-6 py-3 sm:py-3 md:py-4 shadow-2xl border border-white/10 bg-[#181B2A]"
        style={{
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backgroundColor: '#181B2A !important',
          minHeight: '60px',
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4">
          {/* Left side - Pricing and Deadline */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-end space-x-2 md:space-x-3">
              <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight drop-shadow">
                ₹ 99
              </span>
              <span className="text-sm md:text-lg text-pink-300 line-through font-medium opacity-80">
                ₹4,999
              </span>
            </div>
            <div className="text-xs text-gray-300 mt-0 sm:mt-0.5 md:mt-1 tracking-wide uppercase text-center sm:text-left">
              Deadline{" "}
              <span className="text-pink-400 font-semibold">
                10th August
              </span>
            </div>
          </div>

          {/* Right side - Register Now Button */}
          <div className="w-full sm:w-auto">
            <Button
              onClick={openPaymentLink}
              className="w-full sm:w-auto bg-[#B3124B] hover:bg-[#99103f] text-white font-bold py-2 sm:py-2 md:py-3 px-6 sm:px-8 md:px-10 rounded-xl shadow-lg border-0 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-pink-300 text-sm sm:text-base md:text-lg min-h-[44px]"
              style={{
                boxShadow: "0 4px 24px 0 rgba(248, 87, 166, 0.25)",
                letterSpacing: "0.03em",
              }}
            >
              Register Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
