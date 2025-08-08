import AIChallengePage from "@/components/AIChallengePage";
import AIForAllStagesSection from "@/components/AIForAllStagesSection";
import { MadeWithDyad } from "@/components/made-with-dyad";
import SkillStackSection from "@/components/SkillStackSection";
import StickyFooter from "@/components/StickyFooter";
import { Button } from "@/components/ui/button";
import { openPaymentLink } from "@/lib/payment";
import {
  Star,
  Clock,
  Users,
  CheckCircle,
  Play,
  Calendar,
  MapPin,
  Award,
  Zap,
  Code,
  Smartphone,
  Globe,
  Target,
  BookOpen,
  Briefcase,
  Palette,
  Rocket,
  Shield,
  HelpCircle,
  Download,
  FileCheck,
  Video,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="hidden"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-100 border border-gray-200 rounded-full text-[#b3002d] text-xs sm:text-sm font-medium mb-6 sm:mb-8 shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            See DeziCoder in Action
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 leading-tight px-2">
            Watch How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Experience the revolutionary AI-powered development platform that
            transforms ideas into fully functional applications in minutes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto px-2 sm:px-0">
          {/* Video container */}
          <div className="relative group">
            {/* Glowing/animated border effect */}
            <div className="hidden"></div>
            <div className="relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-gray-200 z-20">
              <div className="relative aspect-[9/16] sm:aspect-video bg-gray-100">
                <iframe
                  src="https://www.youtube.com/embed/x4JrB2-O4RM?si=OwyQin8JfW-kjgNj"
                  title="DeziCoder Platform Demo"
                  className="w-full h-full rounded-2xl sm:rounded-3xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={() => setIsVideoLoaded(true)}
                ></iframe>
                {/* Loading overlay */}
                {!isVideoLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-2xl sm:rounded-3xl z-30">
                    <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 border-3 sm:border-4 border-[#b3002d] border-t-transparent rounded-full animate-spin"></div>
                      <p className="text-[#b3002d] text-sm sm:text-lg font-medium px-4 text-center">
                        Loading Video...
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Floating action buttons */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex items-center space-x-2 sm:space-x-3 z-40">
                <a
                  href="https://youtube.com/shorts/x4JrB2-O4RM?si=OwyQin8JfW-kjgNj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 bg-white/80 border border-gray-200 rounded-lg sm:rounded-xl text-[#b3002d] hover:bg-[#b3002d]/10 transition-all duration-300 group touch-manipulation"
                  aria-label="Open on YouTube"
                >
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
              {/* Bottom info bar with black gradient */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-3 sm:p-4 md:p-6 z-30">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Video className="w-4 h-4 sm:w-5 sm:h-5 text-[#b3002d]" />
                      <span className="text-white font-medium text-sm sm:text-base">
                        Platform Demo
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 sm:space-x-2">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                      <span className="text-gray-200 text-xs sm:text-sm">2:45 min</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs sm:text-sm font-medium">
                      Live Demo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Call-to-action below video */}
           <div className="mt-8 sm:mt-10 md:mt-12 text-center px-2">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-white/80 border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 text-center sm:text-left">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B3124B] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg">
                    Ready to Build?
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    Join the workshop and create your first app
                  </p>
                </div>
              </div>
              <Button
                onClick={openPaymentLink}
                className="bg-[#B3124B] hover:bg-[#99103f] text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto touch-manipulation"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
        {/* Feature highlights */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-2">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Build complete applications in minutes, not months",
            },
            {
              icon: Shield,
              title: "Enterprise Ready",
              desc: "Production-grade code with security best practices",
            },
            {
              icon: Globe,
              title: "Cross Platform",
              desc: "Deploy to web, mobile, and desktop simultaneously",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group bg-white/80 border border-gray-200 rounded-2xl p-4 sm:p-6 hover:bg-[#b3002d]/5 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[#b3002d]/10 to-pink-200/20 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#b3002d]" />
              </div>
              <h3 className="text-gray-900 font-bold text-base sm:text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
