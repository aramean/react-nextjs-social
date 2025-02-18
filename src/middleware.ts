import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) { 
  return NextResponse.next(); // Continue with the request if no match
}
 
export const config = {
  
}