'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-32 overflow-hidden">
        {/* Animated background elements */}
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
          <motion.div
            className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ bottom: '10%', right: '10%' }}
          />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Welcome to SkillNation
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Master cutting-edge IT skills with our premium online courses. Learn from industry experts,
              build real projects, and accelerate your career in technology.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/courses"
                  className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl"
                >
                  Browse Courses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/register"
                  className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition"
                >
                  Get Started Free
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Floating stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { number: '50+', label: 'Expert Courses' },
              { number: '10K+', label: 'Active Students' },
              { number: '95%', label: 'Success Rate' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold">{stat.number}</div>
                <div className="text-blue-100 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section with Scroll Animation */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Why Choose SkillNation?
            </h2>
            <p className="text-center text-gray-600 mb-16 text-lg max-w-2xl mx-auto">
              Join thousands of learners who are advancing their careers with our comprehensive IT courses
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: 'Expert Instructors',
                description: 'Learn from industry veterans with 10+ years of real-world experience in top tech companies',
                gradient: 'from-blue-500 to-cyan-400',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Hands-on Projects',
                description: 'Build 20+ real-world projects for your portfolio and gain practical coding experience',
                gradient: 'from-purple-500 to-pink-400',
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Lifetime Access',
                description: 'Learn at your own pace with 24/7 access to course materials, updates, and community support',
                gradient: 'from-green-500 to-emerald-400',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <motion.div
                  className={`bg-gradient-to-r ${feature.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Popular IT Courses
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Start learning with our most popular courses designed for modern developers
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                id: 1,
                title: 'Full Stack Web Development',
                description: 'Master React, Node.js, and modern web technologies',
                icon: '💻',
                color: 'from-blue-500 to-cyan-400',
                price: '₹4,999',
                duration: '12 weeks'
              },
              {
                id: 4,
                title: 'Cloud Computing with AWS',
                description: 'AWS, Docker, Kubernetes, and CI/CD pipelines',
                icon: '☁️',
                color: 'from-purple-500 to-pink-400',
                price: '₹5,999',
                duration: '12 weeks'
              },
              {
                id: 5,
                title: 'Data Science & AI',
                description: 'Python, Machine Learning, and Deep Learning',
                icon: '📊',
                color: 'from-orange-500 to-red-400',
                price: '₹6,499',
                duration: '16 weeks'
              },
            ].map((course, idx) => (
              <motion.div
                key={idx}
                variants={scaleIn}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${course.color} h-48 flex items-center justify-center text-8xl`}>
                  {course.icon}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold text-blue-600">{course.price}</span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${course.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition`}
                    >
                      View Course
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/courses"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition shadow-xl"
              >
                View All Courses
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">Student Success Stories</h2>
            <p className="text-blue-100 text-lg">Hear from our amazing community of learners</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                name: 'Sarah Johnson',
                role: 'Full Stack Developer at Google',
                quote: 'SkillNation helped me transition from retail to tech in just 6 months!',
              },
              {
                name: 'Michael Chen',
                role: 'DevOps Engineer at Amazon',
                quote: 'The hands-on projects gave me the confidence to ace my interviews.',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Data Scientist at Microsoft',
                quote: 'Best investment in my career. The instructors are world-class!',
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-blue-100">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-blue-50 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-16 text-white text-center shadow-2xl relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Ready to Start Your Tech Journey?
              </motion.h2>
              <motion.p
                className="text-xl mb-10 text-blue-50 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Join over 10,000 students already learning on SkillNation. Start with a free trial today!
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/courses"
                    className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-2xl"
                  >
                    Explore All Courses
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/register"
                    className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition"
                  >
                    Start Free Trial
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">SkillNation</h3>
              <p className="text-sm">Empowering the next generation of tech professionals with world-class education.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/contact" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <p className="text-sm">Email: support@skillnation.tech</p>
              <p className="text-sm mt-2">Admissions: admissions@skillnation.tech</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 SkillNation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
