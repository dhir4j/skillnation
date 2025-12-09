'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [paymentStep, setPaymentStep] = useState<'overview' | 'payment'>('overview');

  if (!user) {
    router.push('/login');
    return null;
  }

  if (cartItems.length === 0) {
    router.push('/cart');
    return null;
  }

  const handleProceedToPayment = () => {
    setPaymentStep('payment');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="py-6 md:py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {/* Overview Step */}
            {paymentStep === 'overview' && (
              <motion.div
                key="overview"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Checkout
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Order Details */}
                  <div>
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-6 border border-gray-100">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="mr-3">🛒</span>
                        Order Summary
                      </h2>
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex justify-between py-3 border-b border-gray-200">
                            <div>
                              <p className="text-gray-800 font-semibold">{item.title}</p>
                              <p className="text-sm text-gray-500">{item.short_description}</p>
                            </div>
                            <span className="font-bold text-gray-800">
                              ₹{item.price.toLocaleString()}
                            </span>
                          </div>
                        ))}
                        <div className="flex justify-between pt-6 text-2xl font-bold border-t-2 border-gray-300">
                          <span className="text-gray-800">Total Amount</span>
                          <span className="text-blue-600">₹{totalAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                        <span className="mr-3">👤</span>
                        Customer Details
                      </h2>
                      <div className="space-y-4 text-gray-700">
                        <div className="flex items-center">
                          <span className="font-semibold w-24">Name:</span>
                          <span>{user.name}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="font-semibold w-24">Email:</span>
                          <span>{user.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div>
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white sticky top-8">
                      <h2 className="text-3xl font-bold mb-6 flex items-center">
                        <span className="mr-3">💳</span>
                        Payment Method
                      </h2>

                      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/20">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                            <span className="text-3xl">📱</span>
                          </div>
                          <div>
                            <h3 className="font-bold text-xl">UPI Payment</h3>
                            <p className="text-blue-100 text-sm">Fast & Secure</p>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm text-blue-50">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Instant payment confirmation
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            100% secure transaction
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 mr-2 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No hidden charges
                          </div>
                        </div>
                      </div>

                      <motion.button
                        onClick={handleProceedToPayment}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-xl"
                      >
                        Proceed to Pay ₹{totalAmount.toLocaleString()}
                      </motion.button>

                      <p className="text-center text-sm text-blue-100 mt-4">
                        🔒 Secure payment powered by UPI
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Payment Step */}
            {paymentStep === 'payment' && (
              <motion.div
                key="payment"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
                  <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Complete Your Payment
                    </h1>
                    <p className="text-gray-600 text-lg">Total Amount: ₹{totalAmount.toLocaleString()}</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-blue-200">
                    <div className="text-center">
                      <div className="inline-block bg-white p-6 rounded-full shadow-lg mb-4">
                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Gateway</h2>
                      <p className="text-gray-600">Click the button below to complete your payment</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl"
                    >
                      Pay Now ₹{totalAmount.toLocaleString()}
                    </motion.button>

                    <motion.button
                      type="button"
                      onClick={() => setPaymentStep('overview')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition"
                    >
                      Back to Overview
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
