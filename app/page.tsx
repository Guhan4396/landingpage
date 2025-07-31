'use client'

import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session, status } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">Portfolio</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {status === 'loading' ? (
                <div className="text-gray-500">Loading...</div>
              ) : session ? (
                <>
                  <span className="text-gray-700">Hello, {session.user?.name}</span>
                  <Link
                    href="/dashboard"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/register"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Get started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to My
            <span className="text-indigo-600"> Portfolio</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern portfolio website with complete authentication system powered by NextAuth.js, 
            featuring Google OAuth and secure email/password registration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {session ? (
              <>
                <Link
                  href="/dashboard"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  Go to Dashboard
                </Link>
                <div className="bg-green-100 text-green-800 px-8 py-3 rounded-lg text-lg font-medium">
                  ✓ Authenticated as {session.user?.name}
                </div>
              </>
            ) : (
              <>
                <Link
                  href="/register"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="bg-white hover:bg-gray-50 text-indigo-600 px-8 py-3 rounded-lg text-lg font-medium border-2 border-indigo-600 transition-colors"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🔐</div>
              <h3 className="text-xl font-semibold mb-2">Secure Authentication</h3>
              <p className="text-gray-600">
                Google OAuth and bcrypt-secured email/password authentication with JWT sessions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Protected Routes</h3>
              <p className="text-gray-600">
                Middleware-protected dashboard and API routes accessible only to authenticated users.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Modern Stack</h3>
              <p className="text-gray-600">
                Built with Next.js 14 App Router, TypeScript, NextAuth.js, and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* API Status */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">API Endpoints Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold">✓ Working</div>
                <div className="text-sm text-gray-600">Authentication</div>
                <div className="text-xs text-gray-500">/api/auth/*</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold">✓ Working</div>
                <div className="text-sm text-gray-600">Registration</div>
                <div className="text-xs text-gray-500">/api/register</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold">✓ Working</div>
                <div className="text-sm text-gray-600">Protected API</div>
                <div className="text-xs text-gray-500">/api/restricted</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-green-600 font-bold">✓ Working</div>
                <div className="text-sm text-gray-600">Middleware</div>
                <div className="text-xs text-gray-500">/dashboard</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 