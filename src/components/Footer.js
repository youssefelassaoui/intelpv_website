const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <p className="mb-2">Green Energy Park</p>
              <p className="mb-2">Route Régionale Kelaa Km 3, R206</p>
              <p className="mb-2">Ben Guerir, Morocco</p>
              <p className="mb-2">
                <strong>Phone:</strong> +212 606-027495
              </p>
              <p className="mb-2">
                <strong>Email:</strong> sana@greenenergypark.ma
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-green-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-green-400 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-green-400 transition-colors"
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#demo"
                  className="hover:text-green-400 transition-colors"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Logo and copyright */}
          <div className="flex flex-col">
            <div className="flex justify-start md:justify-center space-x-4 mb-6">
              {/* Updated logo containers to match the Partners component */}
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src="/gep.png"
                  alt="Green Energy Park"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-logo.svg";
                  }}
                />
              </div>
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src="/iresen.png"
                  alt="IRESEN"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-logo.svg";
                  }}
                />
              </div>
              <div className="w-24 h-16 flex items-center justify-center">
                <img
                  src="/um6p.png"
                  alt="UM6P"
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-logo.svg";
                  }}
                />
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-sm text-gray-400 text-center md:text-right">
                &copy; {new Date().getFullYear()} Green Energy Park. All rights
                reserved.
              </p>
              <p className="text-sm text-gray-400 text-center md:text-right mt-1">
                Intel.PV - Intelligent monitoring for clean energy systems
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
