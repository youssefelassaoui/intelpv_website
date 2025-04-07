const Partners = () => {
  const partners = [
    {
      name: "IRESEN",
      logo: "/iresen.png",
    },
    {
      name: "Green Energy Park",
      logo: "/gep.png",
    },
    {
      name: "UM6P",
      logo: "/um6p.png",
    },
    {
      name: "OCP",
      logo: "/ocp.png",
    },
    {
      name: "VEOLIA",
      logo: "/veolia.png",
    },
    {
      name: "CARTIF",
      logo: "/cartif.png",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            Our Partners
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted Collaborations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We work with leading organizations in renewable energy and research.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex justify-center items-center h-24"
              >
                <div className="w-32 h-20 flex items-center justify-center">
                  <img
                    className="max-w-full max-h-full object-contain"
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder-logo.svg";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
