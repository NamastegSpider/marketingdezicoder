import AIChallengePage from "@/components/AIChallengePage";
import AIForAllStagesSection from "@/components/AIForAllStagesSection";
import { MadeWithDyad } from "@/components/made-with-dyad";
import SkillStackSection from "@/components/SkillStackSection";
import StickyFooter from "@/components/StickyFooter";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/VideoSection";
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
import { openPaymentLink } from "@/lib/payment";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="w-full group">
    <button
      onClick={onToggle}
      className={`w-full py-6 px-6 text-left flex items-center justify-between rounded-2xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#B3124B]/20 ${
        isOpen 
          ? 'bg-gradient-to-r from-[#B3124B]/5 to-pink-500/5 border-2 border-[#B3124B]/20 shadow-lg' 
          : 'bg-white hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 border-2 border-gray-200 hover:border-[#B3124B]/30 shadow-md hover:shadow-lg'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-[#B3124B] to-pink-600 shadow-lg' 
            : 'bg-gray-100 group-hover:bg-gradient-to-r group-hover:from-[#B3124B] group-hover:to-pink-600'
        }`}>
          <HelpCircle className={`w-5 h-5 transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-gray-600 group-hover:text-white'
          }`} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-[#B3124B] transition-colors duration-300">
          {question}
        </h3>
      </div>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
        isOpen 
          ? 'bg-[#B3124B] rotate-180 shadow-lg' 
          : 'bg-gray-100 group-hover:bg-[#B3124B] group-hover:shadow-md'
      }`}>
        <ChevronDown className={`w-4 h-4 transition-all duration-300 ${
          isOpen ? 'text-white' : 'text-gray-600 group-hover:text-white'
        }`} />
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
    }`}>
      <div className="px-6 pb-6 pt-2">
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 border-l-4 border-[#B3124B] shadow-sm">
          <p className="text-gray-700 leading-relaxed font-medium">{answer}</p>
        </div>
      </div>
    </div>
  </div>
);

const IndexNew = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      q: "Do I need to install anything?",
      a: "No installations required! Just open www.dezicoder.com in your browser on any device (mobile/laptop).",
    },
    {
      q: "Can I use this on mobile?",
      a: "Absolutely! DeziCoder works seamlessly on any device - smartphone, tablet, or computer.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, you'll receive a completion certificate after finishing the session and your project.",
    },
    {
      q: "What if I can't attend live?",
      a: "All registered participants receive the recording plus exclusive bonus materials.",
    },
  ];

  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden bg-white text-gray-900 relative w-full">
      {/* Subtle background pattern */}
      {/* <div className="absolute inset-0 z-0">
        <div className="hidden"></div>
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.3) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div> */}

      {/* Header */}
      <header className="relative z-50 bg-[#181B2A] backdrop-blur-xl border-b border-[#232946]/60 sticky top-0 shadow-lg shadow-[#B3124B]/10 w-full">
        <div className="w-full md:max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-6 gap-4 md:gap-0">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/logo192.png"
                alt="DeziCoder Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-extrabold text-2xl text-white tracking-tight drop-shadow-lg">
              DeziCoder Workshop
            </span>
          </div>

          {/* Date & CTA */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <div className="flex items-center space-x-3 bg-[#232946] px-4 md:px-5 py-2 rounded-xl border border-[#B3124B]/30 shadow-sm w-full sm:w-auto">
              <div className="w-8 h-8 bg-[#B3124B] rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-white">
                10th August
                </span>
                <span className="text-xs text-white">11 AM – 2 PM</span>
              </div>
            </div>
            <Button
              onClick={openPaymentLink}
              className="w-full sm:w-auto bg-[#B3124B] hover:bg-[#99103f] text-white font-bold py-3 px-6 md:px-8 rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Register</span>
              <span className="line-through text-white/70 text-xs md:text-sm">
                ₹ 4,999
              </span>
              <span className="text-white font-bold text-base md:text-lg">
                ₹ 99
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full ">
        {/* Hero Section */}
        <section className="relative overflow-hidden my-8 md:my-12 px-4 sm:px-8 lg:px-12 rounded-2xl md:rounded-3xl shadow-2xl border border-white/10 bg-[#181B2A] w-full">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 opacity-0 pointer-events-none"></div>

          {/* Grid Pattern Overlay */}
          <div className="hidden"></div>

          {/* Content */}
          <div className="relative z-10 w-full md:max-w-7xl mx-auto py-10 md:py-16 px-0 sm:px-6">
            <div className="text-center w-full">
              {/* Badges */}
              <div className="flex flex-col items-center space-y-3 md:space-y-4 mb-6 md:mb-10">
                {/* Premium Badge */}
                <div className="flex items-center justify-center bg-white text-black px-6 py-2 rounded-xl font-semibold text-sm shadow-lg border border-white/10 tracking-wide">
                  <Award className="w-4 h-4 mr-2" />
                  Limited Time Offer - Only{" "}
                  <span className="font-bold ml-1">₹ 99</span>
                  <span className="ml-2 text-gray-600 line-through">
                    ₹ 4,999
                  </span>
                </div>
                {/* No Coding Badge */}
                <div className="flex items-center bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium text-xs shadow-lg border border-white/20">
                  No Coding Required
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight tracking-tight mb-6 md:mb-8 text-white drop-shadow-xl">
                <span>
                  Build Full&nbsp;
                  <span className="text-white">Stack Apps</span>
                </span>
                <br />
                <span>
                  Using{" "}
                  <span className="text-[#B3124B]">AI Coding Agent</span>
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-10 max-w-full md:max-w-2xl mx-auto text-gray-200 leading-relaxed font-medium hidden xs:block">
                Master AI-powered development in our intensive 3-hour workshop.
                <br />
                Launch your first professional web application live using{" "}
                <span className="text-white font-bold">DeziCoder's</span>{" "}
                revolutionary platform.
              </p>
              {/* Short description for mobile */}
              <p className="text-base mb-6 max-w-full mx-auto text-gray-200 leading-relaxed font-medium block xs:hidden">
                Master AI-powered development in our 3-hour workshop.
              </p>

              {/* Main Image */}
              <div className="mb-6 md:mb-10 max-w-full md:max-w-2xl mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                <img
                  src="/mainPage_image.jpeg"
                  alt="DeziCoder Workshop"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Main CTA */}
              <div className="mb-4 md:mb-6">
                <Button
                  onClick={openPaymentLink}
                  className="w-full sm:w-auto bg-[#B3124B] hover:bg-[#99103f] text-white font-extrabold py-4 md:py-6 px-8 md:px-16 rounded-2xl text-lg md:text-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#B3124B]"
                >
                  Register Now for{" "}
                  <span className="text-accent-green ml-2">₹ 99</span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Deal Highlight Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-24 h-24 bg-[#B3124B] rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#B3124B]/10 to-pink-500/10 border border-[#B3124B]/20 rounded-full text-[#B3124B] text-sm font-semibold mb-8 shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-[#B3124B] to-pink-500 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
                Unbeatable Deal for Limited Time Only
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Deal Highlight: <span className="text-[#B3124B]">₹4,999 → ₹99 Only</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Get everything you need to master AI-powered development at an incredible value
              </p>
            </div>

            {/* Deal Cards and Table */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              
              {/* Pricing Table */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-[#B3124B] to-pink-600 px-6 py-4">
                  <h3 className="text-xl font-bold text-white text-center">What's Included</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {[
                      { item: "3-Hour Workshop Access", price: "₹1,999" },
                      { item: "DeziCoder Pro (2-month free)", price: "₹1,999" },
                      { item: "Certificate + Project Access", price: "₹999" }
                    ].map((row, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                        <span className="text-gray-700 font-medium">{row.item}</span>
                        <span className="text-gray-900 font-semibold">{row.price}</span>
                      </div>
                    ))}
                    <div className="border-t-2 border-[#B3124B] pt-4 mt-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">TOTAL VALUE</span>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-400 line-through">₹4,999</div>
                          <div className="text-2xl font-extrabold text-[#B3124B]">Only ₹99</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Value Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#B3124B] to-pink-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Limited Time Offer</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    This exclusive pricing is available for a limited time only. Don't miss out on this incredible opportunity to transform your development skills.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#B3124B] to-pink-600 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">What You Get</h3>
                  </div>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Live 3-hour interactive workshop</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>2 months free DeziCoder Pro access</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Project completion certificate</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>Lifetime access to workshop materials</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button
                    onClick={openPaymentLink}
                    className="w-full bg-[#B3124B] hover:bg-[#99103f] text-white font-extrabold py-4 px-8 rounded-2xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-[#B3124B]"
                  >
                    Register Now → Pay ₹99
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Your Instructors Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-[#181B2A] to-[#232946] relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-[#B3124B] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-[#B3124B] to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                Meet Your Expert Instructors
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Learn from Industry Leaders
              </h2>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Our world-class instructors bring years of real-world experience in AI, development, and entrepreneurship
              </p>
            </div>

            {/* Instructors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
              {[
                {
                  name: "Kumar Gautam",
                  title: "Ex-Missiles Scientist",
                  company: "@DRDO | Founder Dezicoder",
                  image: "https://raw.githubusercontent.com/NamastegSpider/uploadsfortesting/refs/heads/main/1738510898818.jpg",
                  expertise: "AI Application Research"
                },
                {
                  name: "Gaurav Save",
                  title: "Columbia University",
                  company: "@Founder | Master Classes",
                  image: "https://raw.githubusercontent.com/NamastegSpider/uploadsfortesting/refs/heads/main/Gauv-sir-P1011750-min-311kb.jpeg",
                  expertise: "AI Researcher"
                },
                {
                  name: "Dr. Abhinav Mishra",
                  title: "AI Research Director",
                  company: "@Phd IIT Mandi | MS IIT Gauhati",
                  image: "https://raw.githubusercontent.com/NamastegSpider/uploadsfortesting/refs/heads/main/1.png",
                  expertise: "Machine Learning & AI Strategy"
                }
              ].map((instructor, index) => (
                <div key={index} className="group relative">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15">
                    {/* Instructor Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={instructor.image}
                          alt={instructor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Online indicator */}
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Instructor Info */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#B3124B] transition-colors duration-300">
                        {instructor.name}
                      </h3>
                      <p className="text-gray-300 font-medium mb-1">
                        {instructor.title}
                      </p>
                      <p className="text-[#B3124B] font-semibold text-sm mb-3">
                        {instructor.company}
                      </p>
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-3"></div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {instructor.expertise}
                      </p>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#B3124B]/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 md:mt-16">
              <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Learn from the Best?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join our expert-led workshop and gain hands-on experience with cutting-edge AI tools and techniques
                </p>
                <Button
                  onClick={openPaymentLink}
                  className="bg-gradient-to-r from-[#B3124B] to-pink-600 hover:from-[#99103f] hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Secure Your Spot Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-6 sm:py-10 md:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="text-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232946] mb-3 sm:mb-4">
                Workshop Overview
              </h2>
              <p className="text-base sm:text-lg text-[#B3124B] max-w-2xl mx-auto px-4">
                A comprehensive learning experience designed for serious
                developers
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-400 hover:shadow-2xl hover:border-[#B3124B]">
                <div className="relative p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#B3124B] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <Clock className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232946] mb-2 sm:mb-3">
                    3 Hours
                  </div>
                  <div className="text-[#232946] font-medium text-sm sm:text-base">
                    Intensive Workshop
                  </div>
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                    Deep-dive learning session
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-400 hover:shadow-2xl hover:border-[#B3124B]">
                <div className="relative p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#B3124B] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232946] mb-2 sm:mb-3">
                    Live
                  </div>
                  <div className="text-[#232946] font-medium text-sm sm:text-base">
                    Interactive Session
                  </div>
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                    Real-time collaboration
                  </div>
                </div>
              </div>

              <div className="group relative bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-400 hover:shadow-2xl hover:border-[#B3124B]">
                <div className="relative p-4 sm:p-6 md:p-8 text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#B3124B] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                    <Award className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#232946] mb-2 sm:mb-3">
                    Certificate
                  </div>
                  <div className="text-[#232946] font-medium text-sm sm:text-base">
                    Upon Completion
                  </div>
                  <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
                    Industry-recognized credential
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AIForAllStagesSection />

        {/* What You'll Learn */}
        <section className="py-12 sm:py-16 md:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Target className="w-3 h-3 sm:w-4 sm:h-4" />
                Workshop Curriculum
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-900 leading-tight px-4">
                What You'll Learn (Workshop Curriculum)
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
                This is real project-based learning — not theory
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: Globe,
                  title: "Build full-stack web apps using only plain English",
                  desc: "Learn to create complete web applications without writing a single line of code - just describe what you want in plain English",
                },
                {
                  icon: Zap,
                  title: "Prompt Engineering 101: Master the skill of instructing AI",
                  desc: "Discover the art of communicating effectively with AI to get exactly the results you want from your prompts",
                },
                {
                  icon: Code,
                  title: "Understand front-end, back-end, hosting & databases (easily)",
                  desc: "Grasp the fundamentals of web development architecture without getting lost in technical complexity",
                },
                {
                  icon: Shield,
                  title: "Connect your app to Supabase – a powerful no-code backend",
                  desc: "Integrate your application with a robust database and authentication system using Supabase's no-code platform",
                },
                {
                  icon: Play,
                  title: "Live debugging, editing & refining your app in real time",
                  desc: "Learn to troubleshoot, modify, and improve your application as you build it during the live session",
                },
                {
                  icon: Rocket,
                  title: "Deploy your app on the internet with one click",
                  desc: "Make your application accessible to the world instantly with simple deployment strategies",
                },
                {
                  icon: Award,
                  title: "Get project certificate + complimentary tools",
                  desc: "Receive official certification of completion plus bonus tools and resources to continue your journey",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 p-4 sm:p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-[#B3124B]"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-gray-100 transition-colors duration-300">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  {/* Subtle indicator */}
                  <div className="w-8 h-0.5 bg-gray-300 mt-4 sm:mt-6 group-hover:bg-gray-400 transition-colors duration-300"></div>
                </div>
              ))}
            </div>

            {/* Professional CTA */}
            <div className="text-center mt-10 md:mt-20">
              <div
                onClick={openPaymentLink}
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
              >
                <BookOpen className="w-5 h-5" />
                Begin Your Learning Path
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </section>

        <AIChallengePage />
        <SkillStackSection />
        <VideoSection />

        {/* Who Should Attend */}
        <section className="py-12 sm:py-16 md:py-24 bg-gray-50 relative">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 px-4">
                Who Should Attend
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Perfect for anyone looking to build web applications without
                traditional coding
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "Students & Graduates",
                  desc: "School and college students looking to build practical skills",
                },
                {
                  icon: Users,
                  title: "Educators & Trainers",
                  desc: "Teachers wanting to create educational applications",
                },
                {
                  icon: Briefcase,
                  title: "Business Professionals",
                  desc: "Entrepreneurs and startup founders needing quick solutions",
                },
                {
                  icon: Palette,
                  title: "Creative Professionals",
                  desc: "Designers, freelancers, and content creators",
                },
                {
                  icon: Target,
                  title: "Career Switchers",
                  desc: "Professionals exploring tech opportunities",
                },
                {
                  icon: Shield,
                  title: "Working Professionals",
                  desc: "Engineers, PMs, and analysts who want to ship faster with AI",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#B3124B]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* No Prerequisites Required */}
        <div className="w-full flex justify-center my-10 md:my-16 px-2">
          <div
            className="rounded-2xl px-4 md:px-10 py-6 md:py-8 max-w-2xl w-full border border-white/10 shadow-xl flex flex-col items-center bg-[#181B2A]"
          >
            <div className="mb-4 flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="url(#prereq-gradient)" />
                <path
                  d="M8 12l2 2 4-4"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="prereq-gradient"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B3124B" />
                    <stop offset="1" stopColor="#F857A6" />
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                No Prerequisites Required
              </h3>
            </div>
            <p className="text-gray-200 text-lg text-center max-w-md">
              Just bring your{" "}
              <span className="text-pink-400 font-semibold">creativity</span>{" "}
              and willingness to learn.
              <br />
              <span className="text-pink-300">We’ll handle the rest.</span>
            </p>
          </div>
        </div>

        {/* Enhanced FAQ section with modern design */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white mb-8 md:mb-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#B3124B] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center mb-12 md:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#B3124B]/10 to-pink-500/10 border border-[#B3124B]/20 rounded-lg text-[#B3124B] text-sm font-medium mb-6">
                <HelpCircle className="w-4 h-4" />
                Support Center
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Got questions? We've got answers. Find everything you need to know about our AI workshop.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFAQ === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#B3124B]/10 to-pink-500/10 border border-[#B3124B]/20 rounded-full text-[#B3124B] text-sm font-semibold mb-8 shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-[#B3124B] to-pink-500 rounded-full flex items-center justify-center">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
                What Others Are Saying
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Real feedback from our workshop participants
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              {[
                {
                  name: "Riya",
                  role: "B.Tech",
                  quote: "I built a working app in 15 minutes without coding!",
                  image: "https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  name: "Ankit",
                  role: "Entrepreneur", 
                  quote: "Finally something that teaches AI tools + projects. Worth it!",
                  image: "https://images.unsplash.com/photo-1727278465739-b3b5266e18de?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                },
                {
                  name: "Nitesh",
                  role: "Computer Teacher",
                  quote: "This is the future of learning. Prompt > Code.",
                  image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#B3124B]/20">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional help section */}
            <div className="text-center mb-20 sm:mb-24">
              <div className="bg-gradient-to-r from-[#B3124B]/5 to-pink-500/5 rounded-2xl p-8 border border-[#B3124B]/10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">Can't find what you're looking for? We're here to help!</p>
                <div className="flex justify-center">
                <a href="https://wa.me/919945563047?text=Hi! I'm interested in the DeziCoder AI Workshop. Can you help me with registration?"
          target="_blank"
          rel="noopener noreferrer"
          className="group">
  <Button className="bg-gradient-to-r from-[#B3124B] to-pink-600 hover:from-[#99103f] hover:to-pink-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
    Contact Support 
  </Button>
</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
      </main>
      
      
      <StickyFooter />
    </div>
  );
};

export default IndexNew;
