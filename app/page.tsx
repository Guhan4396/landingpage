'use client'

import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Zap,
  Globe,
  Award,
  Download,
  LogOut,
  User,
} from "lucide-react"
import Link from "next/link"
import GoogleOAuthButton from '@/components/GoogleOAuthButton'

export default function PortfolioLanding() {
  const { data: session, status } = useSession()

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">GS</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Guhan Senthil</h1>
                <p className="text-sm text-gray-600">Product Manager</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">
                Experience
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              {status === 'loading' ? (
                <div className="text-gray-500">Loading...</div>
              ) : session ? (
                <>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{session.user?.name}</span>
                  </div>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleSignOut}
                    className="bg-transparent"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" className="hidden md:inline-flex bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                  <Button variant="outline" asChild className="bg-transparent">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href="/register">Get Started</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🚀 Available for Senior PM Roles
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Product Manager
                  <span className="text-blue-600"> Driving Growth</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experienced Product Manager with a track record of building and scaling B2B SaaS products from concept
                  to <strong className="text-gray-900">$700K ARR</strong>. Specialized in strategic product pivots,
                  data-driven decision making, and enterprise client success.
                </p>
              </div>

              {session ? (
                <div className="space-y-4">
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-lg flex items-center space-x-2">
                    <span className="font-medium">✓ Welcome back, {session.user?.name}!</span>
                  </div>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8" asChild>
                    <Link href="/dashboard">
                      Go to Dashboard
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <GoogleOAuthButton 
                    text="Quick Start with Google"
                    className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors flex items-center justify-center"
                  />
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8" asChild>
                      <Link href="#contact">
                        Get In Touch
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
                      <Link href="#experience">View Experience</Link>
                    </Button>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-gray-600">$700K ARR Growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm text-gray-600">50+ Enterprise Clients</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">Key Achievements</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <Target className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700">Led successful pivot increasing conversion by 340%</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <BarChart3 className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">Scaled ARR from $0 to $700K in 18 months</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Zap className="w-5 h-5 text-purple-600" />
                          <span className="text-gray-700">Reduced churn rate by 45% through product optimization</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-orange-600" />
                          <span className="text-gray-700">Expanded to 12+ international markets</span>
                        </div>
                      </div>
                    </div>

                    {!session && (
                      <div className="pt-4 border-t">
                        <p className="text-sm text-gray-600 mb-3">
                          🔐 Sign in to access my detailed portfolio and case studies
                        </p>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" asChild className="bg-transparent">
                            <Link href="/login">Sign In</Link>
                          </Button>
                          <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                            <Link href="/register">Get Access</Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Authentication Status Section */}
      {!session && (
        <section className="py-16 bg-white/50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">Secure Portfolio Access</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                This portfolio features enterprise-grade authentication with Google OAuth and secure email/password registration.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🔐</div>
                    <h3 className="text-xl font-semibold mb-2">Google OAuth</h3>
                    <p className="text-gray-600">
                      One-click authentication with your Google account for seamless access.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🛡️</div>
                    <h3 className="text-xl font-semibold mb-2">Secure Registration</h3>
                    <p className="text-gray-600">
                      Bcrypt-secured passwords with JWT session management for enterprise security.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">⚡</div>
                    <h3 className="text-xl font-semibold mb-2">Protected Content</h3>
                    <p className="text-gray-600">
                      Access detailed case studies, project documentation, and exclusive content.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to discuss your next product challenge? I'd love to hear about your vision and explore how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
              <Mail className="w-5 h-5 mr-2" />
              guhan.senthil@example.com
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-gray-900">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}