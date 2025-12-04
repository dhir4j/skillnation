'use client';

import { useParams, useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { dummyCourses } from '@/lib/dummyCourses';
import { motion } from 'framer-motion';

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart, cartItems } = useCart();
  const { user } = useAuth();

  const courseId = Number(params.id);
  const course = dummyCourses.find(c => c.id === courseId);
  const isInCart = cartItems.some((item) => item.id === courseId);

  const handleAddToCart = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    if (course) {
      addToCart(course);
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      router.push('/login');
      return;
    }
    if (course && !isInCart) {
      addToCart(course);
    }
    router.push('/checkout');
  };

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-lg">
          Course not found
        </div>
      </div>
    );
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Course Header */}
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8 border border-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                {course.image_url ? (
                  <img
                    src={course.image_url}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">
                      {course.category === 'Web Development' && '💻'}
                      {course.category === 'Mobile Development' && '📱'}
                      {course.category === 'Cybersecurity' && '🔒'}
                      {course.category === 'Cloud Computing' && '☁️'}
                      {course.category === 'Data Science' && '📊'}
                      {course.category === 'DevOps' && '⚙️'}
                      {course.category === 'Blockchain' && '⛓️'}
                      {course.category === 'Design' && '🎨'}
                      {course.category === 'Programming' && '🐍'}
                      {course.category === 'Marketing' && '📈'}
                    </div>
                    <p className="text-white text-2xl font-bold">{course.category}</p>
                  </div>
                )}
              </div>
              <div className="md:w-1/2 p-8">
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {course.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">{course.short_description}</p>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2"
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
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full font-medium text-sm">
                    {course.level}
                  </span>
                </div>

                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-gray-500 ml-1">({course.students.toLocaleString()} students)</span>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-blue-600">
                    ₹{course.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex gap-4">
                  <motion.button
                    onClick={handleBuyNow}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition shadow-xl"
                  >
                    Buy Now
                  </motion.button>
                  <motion.button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    whileHover={{ scale: isInCart ? 1 : 1.05 }}
                    whileTap={{ scale: isInCart ? 1 : 0.95 }}
                    className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
                      isInCart
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {isInCart ? 'In Cart' : 'Add to Cart'}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Course Description */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">📚</span>
              Course Description
            </h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {course.description}
            </p>
          </motion.div>

          {/* Course Features */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8 border border-blue-100"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">✨</span>
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Instructor Info */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 mt-8 border border-gray-100"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-3">👨‍🏫</span>
              Your Instructor
            </h2>
            <div className="flex items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-6">
                {course.instructor.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{course.instructor}</h3>
                <p className="text-gray-600">Industry Expert & Senior Instructor</p>
                <p className="text-gray-500 text-sm mt-2">10+ years of experience in {course.category}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
