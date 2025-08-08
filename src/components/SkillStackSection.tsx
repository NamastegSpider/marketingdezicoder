import React from "react";

const SkillStackSection = () => {
  const tools = [
    // First row (clearly visible)
    {
      name: "ChatGPT",
      icon: "https://chat.openai.com/favicon.ico",
      color: "text-green-500",
    },
    {
      name: "Perplexity",
      icon: "https://perplexity.ai/favicon.ico",
      color: "text-gray-700",
    },
    {
      name: "Claude",
      icon: "https://claude.ai/favicon.ico",
      color: "text-orange-500",
    },
    {
      name: "DeepSeek",
      icon: "https://deepseek.com/favicon.ico",
      color: "text-blue-600",
    },

    {
      name: "Writesonic",
      icon: "https://writesonic.com/favicon.ico",
      color: "text-blue-600",
    },
    {
      name: "rollout",
      icon: "https://rollout.com/favicon.ico",
      color: "text-green-600",
    },
    {
      name: "Emily",
      icon: "https://emily.ai/favicon.ico",
      color: "text-gray-700",
    },
    // Second row (blurred but identifiable)
    {
      name: "Runway",
      icon: "https://runwayml.com/favicon.ico",
      color: "text-gray-700",
    },
    {
      name: "Gamma",
      icon: "https://gamma.app/favicon.ico",
      color: "text-purple-600",
    },
    {
      name: "Tapas.ai",
      icon: "https://tapas.ai/favicon.ico",
      color: "text-blue-600",
    },
    {
      name: "Lumen AI",
      icon: "https://lumenai.com/favicon.ico",
      color: "text-blue-500",
    },
    {
      name: "Midjourney",
      icon: "https://midjourney.com/favicon.ico",
      color: "text-purple-600",
    },
    // Third row (blurred but identifiable)
    {
      name: "Writesonic AI",
      icon: "https://writesonic.com/favicon.ico",
      color: "text-rainbow",
    },
    {
      name: "Agentive",
      icon: "https://agentive.ai/favicon.ico",
      color: "text-blue-600",
    },
    {
      name: "Leonardo AI",
      icon: "https://leonardo.ai/favicon.ico",
      color: "text-multicolor",
    },
  ];

  // Add a state to track screen width
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 550);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, only show the first 6 (or 8) tools, and only the clear ones
  const visibleTools = React.useMemo(() => {
    if (isMobile) {
      // Show only the first 6 tools (all clear)
      return tools.slice(0, 6);
    }
    return tools;
  }, [isMobile, tools]);

  return (
    <section className=" bg-white text-gray-900 relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-sm text-gray-600 font-medium tracking-wider mb-4">
            SKILL STACK
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Models you would Operate
          </h1>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {visibleTools.map((tool, index) => {
            // On mobile, all shown are clear; on desktop, first 4 clear, rest blurred
            const isBlurred = isMobile ? false : index >= 4;

            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-4 transition-all duration-300 ${
                  isBlurred
                    ? "blur-sm opacity-90 cursor-default border border-gray-200"
                    : "hover:shadow-lg hover:border-gray-300 cursor-pointer"
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 flex items-center justify-center">
                    {!isBlurred ? (
                      <img
                        src={tool.icon}
                        alt={`${tool.name} icon`}
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          // Fallback to a generic icon if the favicon fails to load
                          e.currentTarget.style.display = "none";
                          (
                            e.currentTarget.nextElementSibling as HTMLElement
                          ).style.display = "flex";
                        }}
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                    <div
                      className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600"
                      style={{ display: "none" }}
                    >
                      {tool.name.charAt(0)}
                    </div>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      isBlurred
                        ? "text-gray-400"
                        : tool.color === "text-gray-600"
                        ? "text-gray-600"
                        : tool.color === "text-orange-500"
                        ? "text-orange-500"
                        : tool.color === "text-blue-600"
                        ? "text-blue-600"
                        : tool.color === "text-green-600"
                        ? "text-green-600"
                        : tool.color === "text-green-500"
                        ? "text-green-500"
                        : tool.color === "text-purple-600"
                        ? "text-purple-600"
                        : tool.color === "text-blue-500"
                        ? "text-blue-500"
                        : "text-gray-900"
                    }`}
                  >
                    {tool.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillStackSection;
