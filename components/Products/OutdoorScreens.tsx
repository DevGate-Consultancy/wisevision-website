import Image from 'next/image';
import ProductCard from './card';

interface Product {
  image: string;
  title: string;
  subtitle: string;
}

interface OutdoorScreensProps {
  bannerImage: string;
  bannerAlt: string;
  title: string;
  description: string;
  sectionHeading: string;
  sectionHeadingP: string;
  sectionHeadingR: string;
  products: Product[];
  productsP:Product[];
  productsR:Product[];
}

export default function OutdoorScreens({
  bannerImage,
  bannerAlt,
  title,
  description,
  sectionHeading,
  sectionHeadingP,
  sectionHeadingR,
  products,
  productsP,
  productsR
}: OutdoorScreensProps) {
  return (
    <div className="w-full">

      {/* Banner */}
      <div className="relative w-full h-[340px] md:h-[400px]">
        {/* Background image */}
        <Image
          src={bannerImage}
          alt={bannerAlt}
          fill
          className="object-cover"
          priority
        />
      

        {/* Text - left-aligned, vertically centred */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-lg text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Product Cards Module Series */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit text-center text-gray-900 mb-10">
            {sectionHeading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
          </div>

          {products.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.slice(3).map((product, index) => (
                <ProductCard
                  key={index + 3}
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                />
              ))}
            </div>
          )}
        </div>
      </div>


        {/* Product Cards Premium*/}
      <div className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-outfit text-center text-gray-900 mb-10">
            {sectionHeadingP}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {productsP.slice(0, 3).map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
          </div>

          {productsP.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productsP.slice(3).map((product, index) => (
                <ProductCard
                  key={index + 3}
                  image={product.image}
                  title={product.title}
                  subtitle={product.subtitle}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Cards Rental */}
<div className="bg-gray-50 py-16 px-4 font-outfit">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-10">
      {sectionHeadingR}
    </h2>

    {/* First Row: Exactly 3 items */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {productsR.slice(0, 3).map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
        />
      ))}
    </div>

    {/* Second Row: Exactly 1 item */}
    {productsR.length > 3 && (
      <div className="flex justify-start"> 
        <div className="w-full md:w-1/3"> {/* Matches the width of one column from the grid above */}
          {productsR.slice(3, 4).map((product, index) => (
            <ProductCard
              key={index + 3}
              image={product.image}
              title={product.title}
              subtitle={product.subtitle}
            />
          ))}
        </div>
      </div>
    )}
  </div>
</div>

    </div>
  );
}