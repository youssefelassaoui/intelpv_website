const Hero = () => {
    return (
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Intel.PV</span>
                  <span className="block text-green-600">Intelligent monitoring for clean energy systems</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Smarter monitoring, better performance. Advanced solutions for photovoltaic power plants monitoring and
                  optimization.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#demo"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                    >
                      Request Demo
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
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
  
        {/* Device frames section using the frames.png image */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative h-full w-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Using the frames.png image that contains both laptop and phone mockups */}
              <div className="relative w-full h-full flex items-center justify-center lg:justify-end lg:pr-8">
                <div className="relative" style={{ maxWidth: "90%", maxHeight: "90%" }}>
                  <img
                    src="/frames.png"
                    alt="Intel.PV Dashboard on Devices"
                    className="object-contain w-full h-full"
                    style={{
                      filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.15)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.12))",
                      transform: "translateY(-5%)", // Slight upward shift
                    }}
                  />
                  {/* Additional shadow element underneath */}
                  <div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-4 rounded-full bg-black opacity-20 blur-md"
                    style={{ filter: "blur(8px)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero
  
  