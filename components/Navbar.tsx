'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold hover:opacity-90 transition">
            SkillNation
          </Link>

          <div className="flex items-center space-x-6">
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
        </div>
      </div>
    </nav>
  );
}
