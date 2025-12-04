'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ top: '10%', left: '10%' }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="courses">Course Information</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition outline-none resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-xl"
                  >
                    Send Message
                  </motion.button>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg"
                    >
                      Thank you! We've received your message and will get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  Contact Information
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Choose the best way to reach us. Our team is available Monday to Friday, 9 AM - 6 PM EST.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: 'General Support',
                    info: 'support@skillnation.tech',
                    description: 'For general inquiries and support',
                    gradient: 'from-blue-500 to-cyan-400',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    ),
                    title: 'Course Admissions',
                    info: 'admissions@skillnation.tech',
                    description: 'Questions about courses and enrollment',
                    gradient: 'from-purple-500 to-pink-400',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    title: 'Business & Partnerships',
                    info: 'business@skillnation.tech',
                    description: 'Corporate training and partnerships',
                    gradient: 'from-green-500 to-emerald-400',
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: 'Technical Support',
                    info: 'tech@skillnation.tech',
                    description: 'Platform issues and technical help',
                    gradient: 'from-orange-500 to-red-400',
                  },
                ].map((contact, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex items-start space-x-4"
                  >
                    <div className={`bg-gradient-to-r ${contact.gradient} p-4 rounded-xl text-white flex-shrink-0`}>
                      {contact.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800 mb-1">{contact.title}</h3>
                      <a
                        href={`mailto:${contact.info}`}
                        className="text-blue-600 font-semibold hover:underline block mb-2"
                      >
                        {contact.info}
                      </a>
                      <p className="text-gray-600 text-sm">{contact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Office Hours */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
                <div className="space-y-2">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Saturday:</span>
                    <span>10:00 AM - 4:00 PM EST</span>
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
                <p className="mt-4 text-blue-100 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {[
              {
                q: 'How do I enroll in a course?',
                a: 'Simply browse our course catalog, select a course you\'re interested in, and click "Enroll Now". You\'ll be guided through the payment process and gain instant access.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'Yes! We offer a 30-day money-back guarantee. If you\'re not satisfied with a course, contact us within 30 days for a full refund.',
              },
              {
                q: 'Can I access courses on mobile devices?',
                a: 'Absolutely! Our platform is fully responsive and works seamlessly on all devices including smartphones and tablets.',
              },
              {
                q: 'Do you offer certificates upon completion?',
                a: 'Yes, you\'ll receive a certificate of completion for each course you finish. These certificates can be shared on LinkedIn and your resume.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100"
              >
                <h3 className="font-bold text-xl text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
