import Header from '@/components/Landingpage/Header';
import OutdoorScreens from '@/components/Products/OutdoorScreens';
import Footer from '@/components/Landingpage/Footer';

export default function OutdoorScreensPage() {
  const outdoorSMDData = {
    bannerImage: "/images/Productbanner.jpeg",
    bannerAlt: "Outdoor SMDs Banner",
    title: "Outdoor SMDs",
    description: "View our full range of rugged, high-performance outdoor displays, including digital billboards and all-weather pole streamer technology.",
    sectionHeading: "Module Series",
    sectionHeadingP: "Premium Series",
    sectionHeadingR: "Rental Series",
    products: [
      {
        image: "/images/ModuleSeries.png",
        title: "P-3 SMD Screen",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "P-4 SMD Screen",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "P-5 SMD Screen",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "P-6 SMD Screen",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "P-8 SMD Screen",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "P-10 SMD Screen",
        subtitle: "Outdoor"
      },
    ],
    productsP: [
      {
        image: "/images/ModuleSeries.png",
        title: "Smart Box Series",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "Transparent Series",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "Ultra Fine Series",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "Iron Cabinet Series",
        subtitle: "Outdoor"
      },
      {
        image: "/images/pilotproseries.png",
        title: "Creative Series",
        subtitle: "Outdoor"
      },
      {
        image: "/images/ModuleSeries.png",
        title: "Digital Pole Streamer",
        subtitle: "Outdoor"
      },
    ],
    productsR: [
      {
        image: "/images/Dazzle.png",
        title: "Dazzel IV Series",
        subtitle: "Outdoor"
      },
        {
        image: "/images/shinproseries.png",
        title: "Shin Pro Series",
        subtitle: "Outdoor"
      },
        {
        image: "/images/pilotproseries.png",
        title: "Pilot Pro Series",
        subtitle: "Outdoor"
      },
        {
        image: "/images/eswanseries.png",
        title: "E-Swan Series",
        subtitle: "Outdoor"
      },

    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      <OutdoorScreens {...outdoorSMDData} />
      <Footer />
    </div>
  );
}
