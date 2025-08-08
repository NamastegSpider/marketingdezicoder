import { Button } from "@/components/ui/button";
import { openPaymentLink } from "@/lib/payment";

const AIForAllStagesSection = () => {
  return (
    <section className=" bg-white text-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-left mb-16">
          <div className="text-sm text-gray-600 font-medium tracking-wider mb-4">
            AI FOR ALL STAGES
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Who is this Workshop for?
          </h1>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1 - Early-Career Professionals */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-row  justify-between items-start mb-4">
              <div className="flex flex-col w-1/2">
                <div className="text-2xl font-bold text-gray-900">0-1 Yrs</div>
                <div className="text-sm text-gray-600">of Experience</div>
              </div>
              <div className="text-lg font-semibold text-[#B3124B]">
                For Early-Career Professionals
              </div>
            </div>
            <hr className="border-gray-200 mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed">
              Start your growth by mastering AI coding and becoming a
              high-value asset.
            </p>
          </div>

          {/* Card 2 - Senior Professionals */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-row  justify-between items-start mb-4">
              <div className="flex flex-col w-1/2">
                <div className="text-2xl font-bold text-gray-900">1-10 Yrs</div>
                <div className="text-sm text-gray-600">of Experience</div>
              </div>
              <div className="text-lg font-semibold text-[#B3124B]">
                For Senior Professionals
              </div>
            </div>
            <hr className="border-gray-200 mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed">
              Lead smarter with AI — optimize systems and future-proof your
              teams.
            </p>
          </div>

          {/* Card 3 - Senior Leaders */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-row  justify-between items-start mb-4">
              <div className="flex flex-col w-1/2">
                <div className="text-2xl font-bold text-gray-900">10+ Yrs</div>
                <div className="text-sm text-gray-600">of Experience</div>
              </div>
              <div className="text-lg font-semibold text-[#B3124B]">
                For Senior Leaders
              </div>
            </div>
            <hr className="border-gray-200 mb-4" />
            <p className="text-gray-700 text-sm leading-relaxed">
              Drive strategy with AI. Streamline operations, empower teams, and
              stay ahead.
            </p>
          </div>
        </div>

        {/* Curriculum Section */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-600 font-medium tracking-wider mb-4">
            CURRICULUM
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Learn 3 hours of pure AI Skills
          </h2>
        </div>

        {/* Pricing and Registration Bar */}
        <div className="bg-[#181B2A] text-white rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <span className="text-3xl font-bold text-white">₹ 99</span>
                <span className="text-xl line-through opacity-60">₹4,99</span>
              </div>
              <div className="text-sm text-white">Deadline Saturday Night</div>
            </div>
            <div>
              <Button
                onClick={openPaymentLink}
                className="bg-[#B3124B] hover:bg-[#99103f] text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 border-0"
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIForAllStagesSection;
