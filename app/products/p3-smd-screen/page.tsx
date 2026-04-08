import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/ModuleSeries.png',
  title: 'P-3 SMD Screen',
  description:
    'The P3 SMD screen is built for outdoor use, with a 3mm pixel pitch that provides clear, sharp visuals, even from a distance. The P3 LED screen resolution is perfect for large outdoor spaces where you need to get your message across clearly. It\'s also built to handle the elements, with a durable design that ensures reliable performance in all weather. Plus, it\'s energy-efficient and easy to control, making it a versatile option for outdoor displays.',
  specs: [
    { label: 'Pixel Pitch',    value: '3.0mm' },
    { label: 'Module Size',    value: '320 x 160 mm' },
    { label: 'Resolution',     value: '10452dots' },
    { label: 'LED',            value: 'SMD1515' },
    { label: 'Type',           value: 'Waterproof/Aluminium' },
    { label: 'Contrast',       value: '4000:1' },
    { label: 'Brightness',     value: '≥4500nits' },
    { label: 'Max Current',    value: '≤8.94 A' },
    { label: 'Pixel Density',  value: '105625dots/㎡' },
    { label: 'Refresh Rate',   value: '≥3840Hz' },
    { label: 'Port',           value: 'HUB75' },
  ],
};

export default function P3SMDScreenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/p3smd.png'
        bannerAlt="P-3 SMD Screen"
        title="P-3 SMD Screen"
        description="View our full range of rugged, high-performance outdoor displays, 
        including digital billboards and all-weather pole streamer technology."
      />
      <ProductDetail {...productData} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
