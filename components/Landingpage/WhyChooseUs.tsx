'use client';

const whyChooseUs = {
  title: "Why Choose Us?",
  features: [
    {
      title: "Customized Solutions",
      description: "Wise Vision's custom SMD screen solutions are manufactured to your exact specifications, guaranteeing a perfect fit for any project or setting. We give preference to your specific needs and educate you about best options for digital advertising of your Brand. Display your vision clearly with our excellent SMD screens, LED Display, and Samsung video walls!",
      icon: "/images/CS.png"
    },
    {
      title: "Competitive Pricing",
      description: "Do you need quality with affordability? Wise Vision is your ultimate hub for high-definition SMD Screens in Pakistan. With a commitment to delivering exceptional value, we offer competitive SMD screen prices in Pakistan without compromising on quality. You won't regret getting a quote from us. Call us to get your desired SMD screen solution today!",
      icon: "/images/CP.png"
    },
    {
      title: "Superior Quality",
      description: "We guarantee the best quality for all of your display needs with its superior SMD screens and sound integration. We always cater to enhance your brand's visibility with grace. Our top-notch LED Video Walls & SMD Screens help your brand shine on top. Experience elegance with our high-quality SMD screens and expert SMD screen installation services.",
      icon: "/images/SQ.png"
    },
    {
      title: "Technical Assistance",
      description: "The exceptional technical support staff at Wise Vision is always available to help you. Our team is committed to providing smooth installation and upkeep for optimum performance. We never mind getting back to you if you have any technical issues regarding SMD screens. Just buzz our customer support team, and we will be there for you!",
      icon: "/images/TA.png"
    }
  ]
};

export default function WhyChooseUs() {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-medium text-[#14a4e9]">
            {whyChooseUs.title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-2 sm:px-4 md:px-8 lg:px-0 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {whyChooseUs.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white border-2 sm:border-4 border-[#08425d] rounded-2xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-[#08425d] rounded-lg p-2 sm:p-3 flex-shrink-0">
                    <img 
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-outfit font-medium text-[#0f141e] mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base font-outfit font-normal text-[#0f141e] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
