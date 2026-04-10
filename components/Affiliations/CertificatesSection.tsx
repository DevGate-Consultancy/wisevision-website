import Image from 'next/image';

export default function CertificatesSection() {
  const certificates = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      image: "/images/certificates/iso-9001.jpg",
      category: "Quality Assurance"
    },
    {
      name: "CE Certification",
      description: "European Conformity Mark",
      image: "/images/certificates/ce-cert.jpg",
      category: "Safety Standards"
    },
    {
      name: "RoHS Compliant",
      description: "Restriction of Hazardous Substances",
      image: "/images/certificates/rohs-cert.jpg",
      category: "Environmental Compliance"
    },
    {
      name: "FCC Certification",
      description: "Federal Communications Commission",
      image: "/images/certificates/fcc-cert.jpg",
      category: "Regulatory Compliance"
    },
    {
      name: "Energy Star",
      description: "Energy Efficiency Certification",
      image: "/images/certificates/energy-star.jpg",
      category: "Environmental Standards"
    },
    {
      name: "UL Listed",
      description: "Underwriters Laboratories Safety Certification",
      image: "/images/certificates/ul-cert.jpg",
      category: "Safety Standards"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900 mb-4">
            Certifications & Standards
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality is demonstrated through internationally recognized certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 bg-white rounded-lg flex items-center justify-center p-4 border border-gray-200">
                  <Image
                    src={certificate.image}
                    alt={`${certificate.name} certificate`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-outfit font-semibold text-gray-900 mb-2">
                  {certificate.name}
                </h3>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {certificate.category}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">
            Additional certificates available upon request. Contact us for detailed documentation.
          </p>
        </div>
      </div>
    </div>
  );
}
