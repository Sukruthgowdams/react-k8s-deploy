"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, Calendar, Bell, User } from "lucide-react"
import { Button } from "./ui/Button"
import { useMobile } from "../hooks/useMobile"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSignIn = () => {
    setIsSignInOpen(!isSignInOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Calendar
              className={`h-8 w-8 mr-2 ${isScrolled ? "text-purple-600" : "text-white"} transition-all duration-300`}
            />
            <span
              className={`font-bold text-xl ${isScrolled ? "text-gray-900" : "text-white"} transition-all duration-300`}
            >
              EventHub
            </span>
          </Link>

          <nav className={`hidden md:flex items-center space-x-1 ${isScrolled ? "text-gray-700" : "text-white"}`}>
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-gray-100/50 transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/events" className="px-3 py-2 rounded-md hover:bg-gray-100/50 transition-colors relative group">
              Events
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-gray-100/50 transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-gray-100/50 transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className={isScrolled ? "" : "text-white hover:bg-white/20"}>
              <Bell className="h-5 w-5" />
            </Button>

            <Button
              className={`hidden md:flex ${
                isScrolled
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30"
              } transition-all duration-300 hover:scale-105`}
              onClick={toggleSignIn}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex justify-end">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X className="h-6 w-6 text-white" />
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 space-y-8">
            <Link
              to="/"
              className="text-white text-2xl font-medium hover:text-purple-400 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-white text-2xl font-medium hover:text-purple-400 transition-colors"
              onClick={toggleMenu}
            >
              Events
            </Link>
            <Link
              to="/about"
              className="text-white text-2xl font-medium hover:text-purple-400 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-white text-2xl font-medium hover:text-purple-400 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              className="mt-8 bg-purple-600 hover:bg-purple-700 text-white hover:scale-105 transition-all duration-300"
              onClick={() => {
                toggleMenu()
                toggleSignIn()
              }}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      {isSignInOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-lg w-full max-w-md p-6 animate-slide-up">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Sign In</h2>
              <Button variant="ghost" size="icon" onClick={toggleSignIn}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                  Forgot password?
                </a>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 transition-all duration-300 hover:scale-105">
                Sign In
              </Button>
              <div className="text-center mt-4">
                <span className="text-sm text-gray-600">Don't have an account? </span>
                <a href="#" className="text-sm text-purple-600 hover:text-purple-800">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
