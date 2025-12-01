import { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  illustration: string;
  color: string;
}

const TimelineComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timeline: TimelineItem[] = [
    {
      year: "2010",
      title: "Lorem Ipsum Dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      illustration: "🏍️",
      color: "bg-pink-500",
    },
    {
      year: "2015",
      title: "Consectetur Adipiscing",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      illustration: "📱",
      color: "bg-blue-500",
    },
    {
      year: "2018",
      title: "Sed Do Eiusmod",
      description:
        "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
      illustration: "🚀",
      color: "bg-purple-500",
    },
    {
      year: "2020",
      title: "Tempor Incididunt",
      description:
        "Ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      illustration: "🛡️",
      color: "bg-green-500",
    },
    {
      year: "2021",
      title: "Magna Aliqua",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
      illustration: "🤝",
      color: "bg-yellow-500",
    },
  ];

  const totalSteps = timeline.length;

  const goToStep = (index: number) => {
    setActiveStep(index);
  };

  const nextStep = () => {
    if (activeStep < totalSteps - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 via-green-200 to-green-100 relative overflow-hidden">
      {/* Navigation Arrows - Full Height */}
      <button
        onClick={prevStep}
        disabled={activeStep === 0}
        className={`absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 transition-all ${
          activeStep === 0
            ? "bg-white/30 text-white/50 cursor-not-allowed"
            : "bg-white/50 text-gray-700 hover:bg-white hover:shadow-lg"
        }`}
      >
        ‹
      </button>

      <button
        onClick={nextStep}
        disabled={activeStep === totalSteps - 1}
        className={`absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-2xl z-10 transition-all ${
          activeStep === totalSteps - 1
            ? "bg-white/30 text-white/50 cursor-not-allowed"
            : "bg-white/50 text-gray-700 hover:bg-white hover:shadow-lg"
        }`}
      >
        ›
      </button>

      {/* Main Content Area */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-20">
        <div className="max-w-7xl w-full grid grid-cols-2 gap-20 items-center">
          {/* Illustration Side */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Main Circle with Illustration */}
              <div
                className={`w-[400px] h-[400px] ${timeline[activeStep].color} rounded-full flex items-center justify-center text-9xl transition-all duration-700 transform shadow-2xl relative`}
              >
                {timeline[activeStep].illustration}

                {/* Small numbered badges - decorative */}
                <div className="absolute top-8 right-20 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  1
                </div>
                <div className="absolute top-20 right-8 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  2
                </div>
                <div className="absolute bottom-20 right-12 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  3
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 pr-12">
            <h1 className="text-6xl font-bold text-gray-800 transition-all duration-500">
              {timeline[activeStep].title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed transition-all duration-500">
              {timeline[activeStep].description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
        <div className="bg-white rounded-full shadow-lg p-4">
          <div className="flex items-center gap-4">
            {/* Avatar indicator */}
            <div className="w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center shadow-md text-2xl flex-shrink-0">
              {timeline[activeStep].illustration}
            </div>

            {/* Progress dots */}
            <div className="flex-1 flex items-center gap-3">
              {timeline.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className="flex-1 h-1.5 rounded-full transition-all duration-300 hover:h-2"
                  style={{
                    backgroundColor: index === activeStep ? "#4B5563" : "#E5E7EB",
                  }}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;