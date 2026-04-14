import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/IndoorStandee.png',
  title: 'INDOOR SMD DIGITAL STANDEE',
  description:
    'WISE VISION delivers a highly adaptable, all-in-one indoor display system featuring a modular cabinet base and magnetic screen attachments for seamless vertical or horizontal expansion. The integrated lockable wheels provide effortless mobility and stable, space-saving deployment across corporate and retail environments. Engineered for exceptional clarity at close viewing distances, these standees are available in ultra-fine pixel pitches—including P1.2, P1.5, P1.8, and P2.5—allowing you to select the exact pixel density required for uncompromised, professional-grade visual precision.',
  specs: [
    { label: 'Standard Screen Size​',value: '' },
    { label: 'Backward Foldable Design',value: '' },
    { label: 'Plug-and-play Design',value: '' },
    { label: 'Multi-screen Seamless Splicing',value: '' },
    { label: 'Easy Movement',value: '' },
    { label: 'Magnetic Frame',value: '' },
    { label: 'Ultra Lightweight',value: '' },
    { label: '4k / Full HD Resolution',value: '' },
  ],

};

export default function IndoorDigitalStandee() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/StandeeBanner.jpeg'
        bannerAlt="Standee Banner"
        className='text-black'
        title="INDOOR DIGITAL STANDEE"
        description="WISE VISION’s all-in-one modular digital standees provide scalable, mobile visual infrastructure featuring magnetic screen attachments and lockable wheels."
      />
      <ProductDetail {...productData} showSpecs={false} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
