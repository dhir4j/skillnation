'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
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
            About SkillNation
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering the next generation of tech professionals through world-class education
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At SkillNation, we believe that quality education in technology should be accessible to everyone.
              Founded in 2020, we've grown from a small team of passionate educators to a thriving platform
              serving over 10,000 students worldwide.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Our mission is to bridge the gap between traditional education and industry needs by providing
              cutting-edge, practical courses that prepare students for real-world challenges in the tech industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                icon: '🎯',
                title: 'Excellence',
                description: 'We strive for the highest quality in every course we create',
              },
              {
                icon: '🤝',
                title: 'Community',
                description: 'Building a supportive network of learners and mentors',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'Staying ahead with the latest technologies and teaching methods',
              },
              {
                icon: '🚀',
                title: 'Growth',
                description: 'Empowering continuous learning and career advancement',
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-xl text-center border border-gray-100"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry veterans with decades of combined experience from leading tech companies
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
                name: 'Dr. Alex Kumar',
                role: 'Chief Learning Officer',
                background: 'Ex-Google | PhD in Computer Science',
                specialty: 'Full Stack Development',
              },
              {
                name: 'Sarah Martinez',
                role: 'Lead DevOps Instructor',
                background: 'Ex-Amazon | AWS Certified Solutions Architect',
                specialty: 'Cloud & Infrastructure',
              },
              {
                name: 'James Chen',
                role: 'AI/ML Course Director',
                background: 'Ex-Microsoft | Published ML Researcher',
                specialty: 'Data Science & AI',
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100 shadow-lg"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.background}</p>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  {member.specialty}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { number: '50+', label: 'Premium Courses' },
              { number: '10K+', label: 'Active Students' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Countries Reached' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Join Our Learning Community
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start your journey to becoming a tech professional today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/courses"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition shadow-xl"
                >
                  Explore Courses
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-block bg-gray-100 text-gray-800 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
