'use client';

import logoslider from '@/public/images/clientsslider.jpg';

const clientsTitle = "Our Clients";

export default function OurClients() {
  return (
    <section className="py-8 sm:py-10 md:py-14 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-outfit font-semibold text-[#00AEEF] mb-2 sm:mb-3">
            {clientsTitle}
          </h2>
        </div>
      </div>

      <div className="relative w-full h-[80px] sm:h-[100px] md:h-[120px] overflow-hidden bg-white py-2 sm:py-3">
        <div
          className="animate-marquee mt-3 sm:mt-4 md:mt-5"
          style={{
            backgroundImage: `url(${logoslider.src})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100px',
            height: '100px',
            width: '200%',
          }}
        />
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}