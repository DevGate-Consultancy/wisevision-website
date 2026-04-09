import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import WhyChooseUs from '@/components/Landingpage/WhyChooseUs';
import ProductDetail from '@/components/Products/ProductDetail';
import Banner from '@/components/Products/banner';

const productData = {
  image: '/images/P1.2SMDScreen.png',
  title: 'P1.2 SMD Screen',
  description:
    'The indoor P 1.2 SMD Screen is a type of LED display that utilizes Surface-Mounted Device (SMD) technology. The “P 1.2” refers to the pixel pitch of 1.2mm. It means the pixels are very closely packed, resulting in incredibly sharp and detailed images. The crystal clear image formation in the P1.2 HD LED Display Module makes it a perfect fit for indoor SMD Screens.',
  specs: [
    { label: 'Pixel Pitch',    value: '1.2mm' },
    { label: 'Module Size',    value: '320 x 160 mm' },
    { label: 'Resolution',     value: '256*128 dots' },
    { label: 'LED',            value: 'SMD1010' },
    { label: 'Type',           value: 'Hard Plastic/Aluminium' },
    { label: 'Contrast',       value: '3000:1, 10,000:1' },
    { label: 'Brightness',     value: '500-1000nits' },
    { label: 'Max Current',    value: '≤6.6 A' },
    { label: 'Pixel Density',  value: '640000dots/㎡' },
    { label: 'Refresh Rate',   value: '≥3840Hz' },
    { label: 'Port',           value: 'HUB320' },
  ],
};

export default function P3SMDScreenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Banner 
        bannerImage='/images/p3smd.png'
        bannerAlt="P1.2 SMD Screen"
        title="P1.2 SMD Screen"
        description="WISE VISION proudly presents the P1.2 SMD indoor Screen. 
        This specific display solution is designated for brands 
        looking forward to high-resolution displays with crystal clear colors."
      />
      <ProductDetail {...productData} />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
