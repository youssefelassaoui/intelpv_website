const Features = () => {
    const features = [
      {
        title: "Performance KPIs",
        description:
          "Make data-driven decisions with powerful performance analytics. Track key indicators to optimize energy yield, enhance system health, and streamline operations & maintenance (O&M) for long-term profitability.",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
      },
      {
        title: "Realtime Monitoring",
        description:
          "Gain complete visibility over all your photovoltaic installations from a single, intuitive dashboard. Monitor live data anytime, anywhere.",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        ),
      },
      {
        title: "Realtime Notification",
        description:
          "Never miss a critical event! Get real-time alerts via email, SMS, or app notifications for anomalies, performance drops, or maintenance needs.",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        ),
      },
      {
        title: "Anomalies Detection",
        description:
          "Stay ahead of failures with intelligent machine learning algorithms that detect irregularities and potential issues before they impact energy production. Reduce downtime and maintenance costs effortlessly.",
        icon: (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        ),
      },
    ]
  
    return (
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Smart Solutions for Better Performance
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our comprehensive monitoring system provides you with all the tools needed to optimize your solar power
              plant performance.
            </p>
          </div>
  
          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="relative flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    {feature.icon}
                  </div>
                  <p className="mt-4 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  <div className="mt-2 text-base text-gray-500 max-w-md">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Features
  
  