'use client'
import { useState, useEffect, use } from 'react'
import ProductDetail from '@/components/Products/ProductDetail'
import Header from '@/components/Landingpage/Header'
import Footer from '@/components/Landingpage/Footer'
import { useRouter } from 'next/navigation'

interface Product {
  _id: string
  category: string
  subcategory: string
  title: string
  subtitle: string
  image: string
  name?: string
  sizes?: string
  features?: string[]
  description?: string
  href?: string
  specs?: Array<{ label: string; value: string }>
  inches?: string
  featured: boolean
  publishedAt: string
}

interface ProductDetails {
  productId: string
  bannerTitle: string
  bannerDescription: string
  bannerImage: string
  productImage: string
  productTitle: string
  productDescription: string
  productSpecification: string
  createdAt: string
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [productDetails, setProductDetails] = useState<ProductDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Unwrap the params Promise
  const { id } = use(params)

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        // Fetch product by ID
        const productResponse = await fetch(`/api/products?id=${id}`)
        if (!productResponse.ok) {
          throw new Error('Product not found')
        }
        const productData = await productResponse.json()
        setProduct(productData.product)

        // Fetch product details
        const detailsResponse = await fetch(`/api/product-details?productId=${id}`)
        const detailsData = await detailsResponse.json()
        setProductDetails(detailsData.productDetails)

      } catch (error) {
        console.error('Error fetching product:', error)
        setError('Product not found')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProductData()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#08425D] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The product you are looking for does not exist.'}</p>
          <button
            onClick={() => router.back()}
            className="bg-[#08425D] text-white px-6 py-2 rounded-lg font-outfit font-medium hover:bg-[#063247] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    )
  }

  // Convert specs array to the format expected by ProductDetail component
  const specs = product.specs || []

  return (
    <div className="min-h-screen">
      <Header />
      <ProductDetail
        image={product.image}
        title={product.title}
        description={product.description || ''}
        specs={specs}
        inches={product.inches}
        // Pass product details if available
        bannerTitle={productDetails?.bannerTitle}
        bannerDescription={productDetails?.bannerDescription}
        bannerImage={productDetails?.bannerImage}
        productDescription={productDetails?.productDescription}
        productSpecification={productDetails?.productSpecification}
      />
      <Footer />
    </div>
  )
}
