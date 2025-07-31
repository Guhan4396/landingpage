import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    message: "Authentication backend is working!",
    endpoints: {
      auth: "/api/auth/[...nextauth]",
      register: "/api/register",
      restricted: "/api/restricted"
    },
    timestamp: new Date().toISOString()
  })
} 