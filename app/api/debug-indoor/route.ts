import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
  try {
    // Test different query approaches
    const results = {
      allProducts: await client.fetch(`*[_type == "product"]`),
      indoorProducts: await client.fetch(`*[_type == "product" && category == "SMD Screens indoor"]`),
      indoorProductsParam: await client.fetch(`*[_type == "product" && category == $category]`, { category: "SMD Screens indoor" }),
      categoryList: await client.fetch(`*[_type == "product"].category`)
    }
    
    return NextResponse.json({ 
      success: true, 
      results,
      message: "Debug query results"
    })
  } catch (error) {
    console.error('Debug query failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      message: "Debug query failed"
    }, { status: 500 })
  }
}
