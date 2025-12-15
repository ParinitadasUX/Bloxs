import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('waitlist')
      .insert([{ email }])

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json(
          { error: 'Email already registered' },
          { status: 409 }
        )
      }
      throw error
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist' },
      { status: 201 }
    )
  } catch (error) {
    console.error('Waitlist signup error:', error)
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    )
  }
}
