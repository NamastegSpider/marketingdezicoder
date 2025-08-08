import React from "react";
import { Check, X } from "lucide-react";

const AIChallengePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <div className="max-w-8xl mx-auto px-6 py-16 bg-[#181B2A] text-white rounded-2xl shadow-2xl border border-white/10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-4">
            BECOME AN AI EXPERT IN JUST 3 HOURS
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Master Top AI Skills and Stay Ahead in 3 Hours
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Unlock in-demand AI tools, create impactful automations, and
            future-proof your career with cutting-edge knowledge.
          </p>
        </div>

        {/* Completely Redesigned Learning Outcomes Section */}
        <div className="w-full mb-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
              <div className="w-6 h-6 bg-gradient-to-r from-[#B3124B] to-pink-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              What You'll Master in 3 Hours
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              You will learn step-by-step strategies and hands-on exercises to:
            </h2>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">
            {/* LEFT: What You'll Learn */}
            <div className="space-y-8">
              <div className="text-center xl:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 rounded-xl text-green-100 text-sm font-bold mb-6 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ✨ Skills You'll Gain
                </div>
                <h3 className="text-2xl font-bold text-green-100 mb-8">
                  Master These Core Competencies
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Learn to build websites & apps using just prompts",
                    desc: "Master the art of creating complete web applications by simply describing what you want in plain English - no coding required.",
                    icon: "💬"
                  },
                  {
                    title: "Free access to India's #1 AI-powered builder: DeziCoder",
                    desc: "Get exclusive access to DeziCoder, the most advanced AI development platform that transforms your ideas into reality instantly.",
                    icon: "🚀"
                  },
                  {
                    title: "Perfect for students, creators, entrepreneurs, teachers",
                    desc: "Whether you're starting your career, building a business, or teaching others - this workshop is designed for everyone, regardless of technical background.",
                    icon: "👥"
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-green-300">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: What You'll Avoid */}
            <div className="space-y-8">
              <div className="text-center xl:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/20 to-rose-500/20 border border-red-400/40 rounded-xl text-red-100 text-sm font-bold mb-6 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  🚫 Problems We Solve
                </div>
                <h3 className="text-2xl font-bold text-red-100 mb-8">
                  Skip These Common Frustrations
                </h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Technical Jargon Confusion",
                    desc: "No more spending hours trying to understand overwhelming concepts or complex technical terminology.",
                    icon: "😵‍💫"
                  },
                  {
                    title: "Generic Tutorial Trap",
                    desc: "Avoid getting stuck with surface-level tutorials that don't apply to your real-life needs and goals.",
                    icon: "📚"
                  },
                  {
                    title: "Expensive Consultant Costs",
                    desc: "Stop paying expensive developers or consultants to implement AI solutions when you can do it yourself.",
                    icon: "💸"
                  }
                ].map((item, index) => (
                  <div key={index} className="group relative">
                    <div className="bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-200/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-red-300">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 leading-relaxed font-medium">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* By the end of this workshop section */}
        <div className="mb-16">
          <h2 className="text-2xl font-normal text-white mb-8 text-center">
            By the end of this workshop, you'll have:
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Box 1 - Built a Custom GPT */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Built a Custom GPT
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Create AI systems that mirror your writing style and
                    decision-making processes.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 - Automated Complex Workflows */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Automated Complex Workflows
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Use no-code tools to simplify and streamline tasks like
                    email responses, app connections, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Box 3 - Mastered Visual and Creative AI Tools */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">
                    Mastered Visual and Creative AI Tools
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dive into MidJourney, Runway ML, and video/audio AI to build
                    stunning, professional-grade outputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concluding Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
            <p className="text-xl font-semibold text-white max-w-4xl mx-auto leading-relaxed">
              With a <span className="text-[#B3124B] font-bold">Live Expert-Led Session</span> and actionable workbook-led
              exercises, this is more than just a workshop - it's your <span className="text-pink-300 font-bold">roadmap to
              becoming AI-ready</span> to tackle the demands of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChallengePage;
