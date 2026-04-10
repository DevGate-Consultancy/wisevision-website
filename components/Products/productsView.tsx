import Image from 'next/image';
import ProductCard from './card';
import Banner from '@/components/Products/banner';

interface Product {
  image: string;
  title: string;
  subtitle: string;
  href?: string;
  id?: string;
  name?: string;
  features?: string[];
  sizes?: string[];
}

interface ProductsProps {
  bannerImage?: string;
  bannerAlt?: string;
  title?: string;
  description?: string;
  sectionHeading?: string;
  sectionHeadingP?: string;
  sectionHeadingR?: string;
  products?: Product[];
  productsP?: Product[];
  productsR?: Product[];
  productsS?: Product[];
  textColor?: string; // Legacy prop for backward compatibility
  bannerTextColor?: string; // Specific color for banner text
  sectionTextColor?: string; // Specific color for section headings
}

export default function Products({
  bannerImage = "",
  bannerAlt = "",
  title = "",
  description = "",
  sectionHeading,
  sectionHeadingP,
  sectionHeadingR,
  products,
  productsP,
  productsR,
  productsS,
  textColor = "text-white", // Legacy prop for backward compatibility
  bannerTextColor,
  sectionTextColor = "text-[#08425D]"
}: ProductsProps) {
  
  // Use specific colors if provided, otherwise fall back to legacy textColor
  const bannerColor = bannerTextColor;
  const sectionColor = sectionTextColor;

  const renderProductGrid = (items: Product[] = []) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
          href={product.href}
        />
      ))}
    </div>
  );

  return (
    <div className={`w-full ${textColor}`}>
      {/* Hero Banner Section */}
      {(bannerImage || title) && (
        <Banner 
          bannerImage={bannerImage}
          bannerAlt={bannerAlt}
          title={title}
          description={description}
          className={bannerColor} 
        />
      )}

      {/* Standard Module Series */}
      {products && products.length > 0 && (
        <div id="module" className="bg-gray-50 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {sectionHeading && (
              <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${sectionColor}`}>
                {sectionHeading}
              </h2>
            )}
            {renderProductGrid(products)}
          </div>
        </div>
      )}

      {/* Premium Series */}
      {productsP && productsP.length > 0 && (
        <div id="premium" className="bg-gray-50 py-16 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {sectionHeadingP && (
              <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${sectionColor}`}>
                {sectionHeadingP}
              </h2>
            )}
            {renderProductGrid(productsP)}
          </div>
        </div>
      )}

      {/* Touch Screen Section */}
      {productsS && productsS.length > 0 && (
        <div id="smart" className="bg-[#FAFAFA] py-16 px-4 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">

            <div className="space-y-16">
              {productsS.map((product, index) => (
                <div key={index}>
                  <h2 className={`text-3xl md:text-4xl font-outfit text-center mb-10 ${sectionColor}`}>
                    {product.title}
                  </h2>
                  
                  <div
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-10"
                  >
                    {/* Left: Product Image */}
                    <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full max-h-90 pr-15 object-contain rounded-xl"
                      />
                    </div>

                    {/* Right: Product Info */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 max-w-[500px]">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {product.name}
                      </h3>

                      {product.subtitle && (
                        <p className="text-gray-400 text-base text-center">
                          {product.subtitle}
                        </p>
                      )}

                      <p className="text-gray-400 text-base text-center">
                        {product.sizes ?? '43″ 55″'}
                      </p>

                      <ul className="space-y-2 mt-2">
                        {product.features?.map((feature: string, index: number) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700 text-base">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex justify-center w-full"> 
                        <button className="bg-[#08425D] hover:bg-[#1a4068] text-[#FFFFFF] px-8 py-3 rounded-md transition-colors duration-200">
                          Get A Quote
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
     
      {/* Rental Series */}
      {productsR && productsR.length > 0 && (
        <div id="rental" className="bg-gray-50 py-16 px-4 font-outfit border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            {sectionHeadingR && (
              <h2 className={`text-3xl md:text-4xl text-center mb-10 ${sectionColor}`}>
                {sectionHeadingR}
              </h2>
            )}
            {renderProductGrid(productsR)}
          </div>
        </div>
      )}
    </div>
  );
}