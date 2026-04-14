import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Products from '@/components/Products/productsView';

export default function digitalStandee() {
  const digitalStandee = {
    bannerImage: "/images/PodiumBanner.jpeg",
    bannerAlt: "Interactive Smart Podiums Banner",
    title: "Interactive Smart Podiums",
    description: "Elevate corporate presentations with our premium digital podiums. Featuring integrated touch screens and seamless A/V control for elite boardrooms.",
    bannerTextColor: "text-black",
  
    productsS: [
      {
        image: "/images/Pilot3.png",
        title: "Digital Podium",
        subtitle: "",
        name: "Pilot 3 Digital Podium",
        href: "/products/pilot-3-podium",
        features: [
          "Smart 4K touch display",
          "Powerful i5 performance",
          "Long battery & secure design",
          "Smart Touch Display",
          "Long Batter Life"
        ]
      },    
    ],

  };

  return (
    <div className="min-h-screen">
      <Header />
      <Products {...digitalStandee} />
      <Footer />
    </div>
  );
}