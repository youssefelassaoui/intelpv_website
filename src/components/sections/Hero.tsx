import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="rgba(34, 197, 94, 0.05)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Intel.PV</span>
                <span className="block text-green-600">
                  Intelligent monitoring for clean energy systems
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
                Smarter monitoring, better performance. Advanced solutions for
                photovoltaic power plants monitoring and optimization.
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                </div>
                <div className="ml-3">
                  <a
                    href="#features"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Device Mockups */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-full w-full flex items-center justify-center">
          {/* Laptop Mockup */}
          <div className="relative w-[80%] max-w-[600px]">
            <img
              src="/images/placeholder.svg"
              alt="Laptop Mockup"
              className="w-full"
            />
            <div className="absolute top-[8%] left-[12%] right-[12%] bottom-[28%] overflow-hidden">
              <img
                src="/images/placeholder.svg"
                alt="Dashboard Preview"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="absolute right-0 bottom-0 w-[25%] max-w-[200px]">
            <img
              src="/images/placeholder.svg"
              alt="Phone Mockup"
              className="w-full"
            />
            <div className="absolute top-[6%] left-[8%] right-[8%] bottom-[6%] overflow-hidden rounded-[20px]">
              <img
                src="/images/placeholder.svg"
                alt="Mobile Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
