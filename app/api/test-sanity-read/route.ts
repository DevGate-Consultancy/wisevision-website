import { NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET() {
  try {
    // Test basic connection
    const result = await client.fetch(`
      *[_type == "product"] | order(publishedAt desc) [0..5]
    `)
    
    return NextResponse.json({ 
      success: true, 
      count: result.length,
      products: result,
      message: "Sanity connection successful"
    })
  } catch (error) {
    console.error('Sanity connection test failed:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      message: "Sanity connection failed"
    }, { status: 500 })
  }
}
