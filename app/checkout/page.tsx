'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// List of all available QR codes
const QR_CODES = [
  'skillnation4463@sbi.jpg',
  'skillnation4463.110@sbi.jpg',
  'skillnation4463.132@sbi.jpg',
  'skillnation4463.204@sbi.jpg',
  'skillnation4463.233@sbi.jpg',
  'skillnation4463.363@sbi.jpg',
  'skillnation4463.391@sbi.jpg',
  'skillnation4463.430@sbi.jpg',
  'skillnation4463.450@sbi.jpg',
  'skillnation4463.511@sbi.jpg',
  'skillnation4463.558@sbi.jpg',
  'skillnation4463.587@sbi.jpg',
  'skillnation4463.647@sbi.jpg',
  'skillnation4463.684@sbi.jpg',
  'skillnation4463.828@sbi.jpg',
  'skillnation4463.932@sbi.jpg',
];

export default function CheckoutPage() {
  const { cartItems, totalAmount, clearCart } = useCart();
  const { user } = useAuth();
  const router = useRouter();

  const [paymentStep, setPaymentStep] = useState<'overview' | 'qr' | 'processing'>('overview');
  const [utrNumber, setUtrNumber] = useState('');
  const [error, setError] = useState('');
  const [selectedQR, setSelectedQR] = useState('');

  // Select a random QR code when moving to QR step
  useEffect(() => {
    if (paymentStep === 'qr') {
      const randomIndex = Math.floor(Math.random() * QR_CODES.length);
      setSelectedQR(QR_CODES[randomIndex]);
    }
  }, [paymentStep]);

  if (!user) {
    router.push('/login');
    return null;
  }

  if (cartItems.length === 0) {
    router.push('/cart');
    return null;
  }

  const handleProceedToPayment = () => {
    setPaymentStep('qr');
  };

  const handleUTRSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate UTR number (12 digits)
    if (!/^\d{12}$/.test(utrNumber)) {
      setError('Please enter a valid 12-digit UTR number');
      return;
    }

    // Show processing screen
    setPaymentStep('processing');

    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      router.push('/dashboard');
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <div className="py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
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
                <h1 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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

            {/* QR Code & UTR Input Step */}
            {paymentStep === 'qr' && (
              <motion.div
                key="qr"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Complete Your Payment
                    </h1>
                    <p className="text-gray-600 text-lg">Scan QR code or enter UTR number</p>
                  </div>

                  {/* QR Code */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border-2 border-blue-300">
                    <div className="text-center mb-6">
                      <div className="inline-block bg-white p-6 rounded-2xl shadow-xl">
                        {selectedQR ? (
                          <div className="relative w-80 h-80">
                            <Image
                              src={`/qr-codes/${selectedQR}`}
                              alt="UPI Payment QR Code"
                              fill
                              className="object-contain rounded-xl"
                              priority
                            />
                          </div>
                        ) : (
                          <div className="w-80 h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                            <div className="text-center">
                              <svg className="w-24 h-24 mx-auto text-gray-400 mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                              </svg>
                              <p className="text-gray-500 font-semibold">Loading QR Code...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="inline-block bg-white px-6 py-3 rounded-full shadow-md mb-4">
                        <p className="text-2xl font-bold text-blue-600">₹{totalAmount.toLocaleString()}</p>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">Scan QR code using any UPI app</p>
                      <div className="flex items-center justify-center gap-3 text-gray-500 text-xs">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Google Pay
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          PhonePe
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Paytm
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* UTR Input Form */}
                  <div className="border-t-2 border-gray-200 pt-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                      Enter UTR Number After Payment
                    </h3>
                    <form onSubmit={handleUTRSubmit} className="space-y-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-3 text-lg">
                          12-Digit UTR Number
                        </label>
                        <input
                          type="text"
                          value={utrNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, '').slice(0, 12);
                            setUtrNumber(value);
                            setError('');
                          }}
                          placeholder="Enter 12-digit UTR"
                          maxLength={12}
                          className="w-full px-6 py-4 text-lg rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition outline-none font-mono tracking-wider"
                          required
                        />
                        <p className="text-sm text-gray-500 mt-2">
                          Find UTR number in your UPI app transaction history
                        </p>
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg"
                        >
                          {error}
                        </motion.div>
                      )}

                      <div className="flex gap-4">
                        <motion.button
                          type="button"
                          onClick={() => setPaymentStep('overview')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition"
                        >
                          Back
                        </motion.button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-xl"
                        >
                          Confirm Payment
                        </motion.button>
                      </div>
                    </form>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Processing Step */}
            {paymentStep === 'processing' && (
              <motion.div
                key="processing"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-12 border border-gray-100 text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="inline-block mb-8"
                  >
                    <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>

                  <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Processing Payment
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Please wait while we verify your transaction...
                  </p>

                  <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center text-gray-700">
                      <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-semibold">UTR Number: {utrNumber}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-gray-600">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      ✓ Payment received
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      ✓ Verifying transaction
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      ✓ Enrolling you in courses...
                    </motion.p>
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
