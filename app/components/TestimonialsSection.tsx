"use client";
import { motion } from "framer-motion";
import { FadeInUpVariant, StaggerContainerVariant } from "../types";

interface TestimonialsSectionProps {
  fadeInUp: FadeInUpVariant;
  staggerContainer: StaggerContainerVariant;
}

export default function TestimonialsSection({
  fadeInUp,
  staggerContainer,
}: TestimonialsSectionProps) {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our <span className="text-[#4FD1C7]">Patients</span> Say
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Real stories from real patients who've experienced exceptional care
            through our platform.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#4FD1C7]/5 to-[#4FD1C7]/10 rounded-3xl p-8 border border-[#4FD1C7]/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex text-yellow-400 mb-4">{"★".repeat(5)}</div>
            <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
              "The video consultation was incredibly convenient. Dr. Chen
              diagnosed my condition quickly and provided excellent treatment
              recommendations. No more waiting rooms!"
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sarah Johnson"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-sm text-gray-500">Marketing Manager</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex text-yellow-400 mb-4">{"★".repeat(5)}</div>
            <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
              "As a busy parent, Nova Health has been a lifesaver. I can get
              expert medical advice for my family without disrupting our
              schedule. Great experience and I would highly recommend it!"
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces&auto=format"
                alt="Michael Chen"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Michael Chen</div>
                <div className="text-sm text-gray-500">Software Engineer</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-br from-[#4FD1C7]/5 to-[#4FD1C7]/10 rounded-3xl p-8 border border-[#4FD1C7]/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex text-yellow-400 mb-4">{"★".repeat(5)}</div>
            <blockquote className="text-gray-700 mb-6 text-lg leading-relaxed">
              "The quality of care is exceptional. Dr. Rodriguez took time to
              explain everything thoroughly. The platform makes healthcare so
              much more accessible."
            </blockquote>
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces&auto=format"
                alt="Emma Davis"
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-semibold text-gray-900">Emma Davis</div>
                <div className="text-sm text-gray-500">Teacher</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mt-16 bg-[#29A3A0] rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-white/90">Happy Patients</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-white/90">Average Rating</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Available Support</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
