'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface Course {
  id: number;
  title: string;
  short_description: string;
  price: number;
  duration: string;
  level: string;
  image_url: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const { addToCart, cartItems } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const isInCart = cartItems.some((item) => item.id === course.id);

  const handleAddToCart = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    addToCart(course);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
        {course.image_url && (
          <img
            src={course.image_url}
            alt={course.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 line-clamp-2">
            {course.title}
          </h3>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.short_description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {course.duration}
          </span>
          <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
            {course.level}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ₹{course.price.toLocaleString()}
          </span>

          <div className="flex gap-2">
            <Link
              href={`/courses/${course.id}`}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
            >
              View
            </Link>
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                isInCart
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {isInCart ? 'In Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
