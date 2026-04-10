import Image from 'next/image';

export default function AffiliationsSection() {
  const partners = [
    {
      name: "Samsung",
      logo: "/images/samsung-logo.png",
      description: "Official Samsung Display Partner"
    },
    {
      name: "LG",
      logo: "/images/lg-logo.png", 
      description: "Authorized LG Commercial Display Distributor"
    },
    {
      name: "Sony",
      logo: "/images/sony-logo.png",
      description: "Sony Professional Display Partner"
    },
    {
      name: "Panasonic",
      logo: "/images/panasonic-logo.png",
      description: "Panasonic Visual Solutions Partner"
    },
    {
      name: "Barco",
      logo: "/images/barco-logo.png",
      description: "Barco Certified Partner"
    },
    {
      name: "Christie",
      logo: "/images/christie-logo.png", 
      description: "Christie Digital Display Partner"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We work directly with leading manufacturers to ensure authentic products and reliable support
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center group"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-50 rounded-lg p-4 group-hover:bg-blue-50 transition-colors duration-300">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-outfit font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
