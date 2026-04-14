import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/Pilot3.png',
  title: 'Pilot 3 Digital Podium',
  description:
    'This ergonomic, mobile smart podium is powered by an Intel i5 tablet, combining a built-in 4K document camera with bi-directional touch control. Delivering wireless 4K casting and an 8-hour dual-charge battery life, it enables completely untethered, interactive multimedia presentations for modern educational and corporate environments.',
  specs: [
    { label: 'Smart 4K touch display',value: '' },
    { label: 'Powerful i5 performance',value: '' },
    { label: 'Long battery & secure design',value: '' },
    { label: 'Smart Touch Display',value: '' },
    { label: 'Powerful PC',value: '' },
    { label: '4K Document Camera',value: '' },
    { label: 'Wireless 4K HDMI Casting',value: '' },
    { label: 'Bi-directional Multi-touch',value: '' },
  ],

};

export default function IndoorDigitalStandee() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/PodiumBanner.jpeg'
        bannerAlt="Pilot 3 Digital Podium Banner"
        className='text-black'
        title="Pilot 3 Digital Podium"
        description="An advanced mobile digital teaching station featuring a 13.3″ multitouch display, integrated 4K document camera, and seamless wireless 4K HDMI casting."
      />
      <ProductDetail {...productData} showSpecs={false} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
