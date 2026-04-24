import { client } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Test basic connection
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
    
    console.log('Sanity Config:', { projectId, dataset })
    
    // Test a simple query
    const result = await client.fetch(`count(*)`)
    
    return NextResponse.json({
      success: true,
      projectId,
      dataset,
      documentCount: result,
      message: 'Sanity connection successful'
    })
  } catch (error) {
    console.error('Sanity connection test failed:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({
      success: false,
      error: errorMessage,
      message: 'Sanity connection failed'
    }, { status: 500 })
  }
}
