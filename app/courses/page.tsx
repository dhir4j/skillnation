'use client';

import { motion } from 'framer-motion';
import CourseCard from '@/components/CourseCard';
import { dummyCourses } from '@/lib/dummyCourses';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function CoursesPage() {
  return (
    <div className="py-6 md:py-12 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 px-4">
            Explore Our Courses
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Choose from our wide selection of premium IT courses designed to help you master new skills and advance your career
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {dummyCourses.map((course) => (
            <motion.div key={course.id} variants={fadeInUp}>
              <CourseCard course={course} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
