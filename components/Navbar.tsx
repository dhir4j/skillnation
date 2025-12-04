'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/');
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold hover:opacity-90 transition"
            onClick={closeMobileMenu}
          >
            SkillNation
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/courses"
              className="hover:text-blue-200 transition font-medium"
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="hover:text-blue-200 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-200 transition font-medium"
            >
              Contact
            </Link>

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="hover:text-blue-200 transition font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  href="/cart"
                  className="relative hover:text-blue-200 transition font-medium"
                >
                  Cart
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <span className="text-blue-200">Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="hover:text-blue-200 transition font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button & Cart - Visible on mobile */}
          <div className="flex items-center space-x-4 lg:hidden">
            {user && (
              <Link
                href="/cart"
                className="relative hover:text-blue-200 transition"
                onClick={closeMobileMenu}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-white/10 rounded-lg transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Animated dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3 border-t border-white/20">
                <Link
                  href="/courses"
                  className="block py-2 px-4 hover:bg-white/10 rounded-lg transition font-medium"
                  onClick={closeMobileMenu}
                >
                  Courses
                </Link>
                <Link
                  href="/about"
                  className="block py-2 px-4 hover:bg-white/10 rounded-lg transition font-medium"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="block py-2 px-4 hover:bg-white/10 rounded-lg transition font-medium"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>

                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="block py-2 px-4 hover:bg-white/10 rounded-lg transition font-medium"
                      onClick={closeMobileMenu}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/cart"
                      className="block py-2 px-4 hover:bg-white/10 rounded-lg transition font-medium"
                      onClick={closeMobileMenu}
                    >
                      Cart {cartCount > 0 && `(${cartCount})`}
                    </Link>
                    <div className="py-2 px-4 text-blue-200 text-sm">
                      Hi, {user.name}
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left py-2 px-4 bg-white/20 hover:bg-white/30 rounded-lg transition font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="block py-2 px-4 hover:bg-white/10 rounded-lg transition font-medium"
                      onClick={closeMobileMenu}
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block py-2 px-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition font-semibold text-center"
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
