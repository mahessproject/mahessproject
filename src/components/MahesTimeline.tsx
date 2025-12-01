import { useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

const TimelineComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const timeline: TimelineItem[] = [
    {
      year: "2022",
      title: "UI/UX Design Journey",
      description:
        "Started my journey in UI/UX design, learning the fundamentals of user-centered design, wireframing, and prototyping. Focused on creating intuitive digital experiences that prioritize user needs.",
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400&h=400&fit=crop&crop=center",
      color: "#FC5B15",
    },
    {
      year: "2022",
      title: "Photography Passion",
      description:
        "Developed my photography skills, focusing on composition, lighting, and storytelling through images. Specialized in portrait photography and event documentation with creative visual approaches.",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop&crop=center",
      color: "#FC5B15",
    },
    {
      year: "2023",
      title: "Videography & Editing",
      description:
        "Expanded into videography and video editing, creating dynamic content that engages audiences. Mastered video production workflow from pre-production planning to post-production editing.",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=400&fit=crop&crop=center",
      color: "#FC5B15",
    },
    {
      year: "2024",
      title: "Creative Direction",
      description:
        "Evolved into creative direction, combining all my skills to lead creative projects. Focus on strategic visual communication and bringing innovative concepts to life across multiple media.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=400&fit=crop&crop=center",
      color: "#FC5B15",
    },
    {
      year: "2025",
      title: "Integrated Creative Solutions",
      description:
        "Now offering comprehensive creative solutions that combine UI/UX design, photography, videography, and creative direction. Delivering end-to-end creative services for digital and traditional media.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop&crop=center",
      color: "#FC5B15",
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Navigation Arrows - Clean Style */}
      <button
        onClick={prevStep}
        disabled={activeStep === 0}
        className={`absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl z-10 transition-all ${
          activeStep === 0 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-gray-800 hover:scale-110"
        }`}
      >
        ←
      </button>

      <button
        onClick={nextStep}
        disabled={activeStep === totalSteps - 1}
        className={`absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-3xl z-10 transition-all ${
          activeStep === totalSteps - 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-600 hover:text-gray-800 hover:scale-110"
        }`}
      >
        →
      </button>

      {/* Section Title */}
      <div className="text-center pt-16 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-['Montserrat']">My Creative Journey</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Montserrat']">
          Explore my evolution as a creative professional and the skills I've developed along the way
        </p>
      </div>

      {/* Main Content Area */}
      <div className="flex items-center justify-center min-h-[calc(100vh-280px)] px-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Illustration Side */}
          <div className="flex justify-center items-center order-2 lg:order-1">
            <div className="relative">
              {/* Main Circle with Image */}
              <div
                className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full flex items-center justify-center transition-all duration-700 transform shadow-2xl relative overflow-hidden border-4"
                style={{
                  borderColor: timeline[activeStep].color,
                }}
              >
                <img
                  src={timeline[activeStep].image}
                  alt={timeline[activeStep].title}
                  className="w-full h-full object-cover"
                />

                {/* Year badge overlay */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
                  style={{
                    backgroundColor: timeline[activeStep].color,
                    color:
                      timeline[activeStep].color === "#F6F6F6" || timeline[activeStep].color === "#FFFFFF"
                        ? "#111112"
                        : "#FFFFFF",
                  }}
                >
                  {timeline[activeStep].year.slice(-2)}
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div className="text-2xl font-bold text-orange-600 font-['Montserrat']">{timeline[activeStep].year}</div>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 transition-all duration-500 font-['Montserrat']">
              {timeline[activeStep].title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed transition-all duration-500 font-['Montserrat']">
              {timeline[activeStep].description}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg p-4">
          <div className="flex items-center gap-4">
            {/* Current step indicator */}
            <div
              className="w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-md text-xl lg:text-2xl flex-shrink-0 overflow-hidden border-2"
              style={{
                borderColor: timeline[activeStep].color,
              }}
            >
              <img
                src={timeline[activeStep].image}
                alt={timeline[activeStep].title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Progress dots */}
            <div className="flex-1 flex items-center gap-2 lg:gap-3">
              {timeline.map((item, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className="flex-1 h-1.5 rounded-full transition-all duration-300 hover:h-2 relative group"
                  style={{
                    backgroundColor: index === activeStep ? "#FC5B15" : "#E5E7EB",
                  }}
                  aria-label={`Go to ${item.year}: ${item.title}`}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {item.year}
                  </span>
                </button>
              ))}
            </div>

            {/* Step counter */}
            <div className="text-sm font-semibold text-gray-600 flex-shrink-0 font-['Montserrat']">
              {activeStep + 1} / {totalSteps}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineComponent;
