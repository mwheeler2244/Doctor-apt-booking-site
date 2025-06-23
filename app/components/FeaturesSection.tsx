"use client";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaVideo,
  FaStethoscope,
  FaHeartbeat,
  FaAward,
  FaShieldAlt,
  FaClock,
  FaMedkit,
  FaLaptopMedical,
} from "react-icons/fa";
import { FadeInUpVariant, StaggerContainerVariant } from "../types";

interface FeaturesSectionProps {
  fadeInUp: FadeInUpVariant;
  staggerContainer: StaggerContainerVariant;
}

export default function FeaturesSection({
  fadeInUp,
  staggerContainer,
}: FeaturesSectionProps) {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
              alt="Healthcare Technology"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#4FD1C7]">Doctor With You</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience healthcare reimagined with cutting-edge technology,
              compassionate care, and unmatched convenience.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4FD1C7] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaVideo className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Virtual Consultations
                  </h3>
                  <p className="text-gray-600">
                    Connect with doctors from the comfort of your home with our
                    secure video platform.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4FD1C7] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    24/7 Availability
                  </h3>
                  <p className="text-gray-600">
                    Access healthcare services anytime, anywhere with our
                    round-the-clock support.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4FD1C7] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Secure & Private
                  </h3>
                  <p className="text-gray-600">
                    Your health data is protected with enterprise-grade security
                    and privacy measures.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

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
            Our <span className="text-[#4FD1C7]">Features</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive healthcare solutions designed to make your medical
            journey seamless and effective.
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
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4FD1C7] to-[#45B8AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaPhone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Instant Connection
            </h3>
            <p className="text-gray-600 text-sm">
              Connect with healthcare professionals instantly through our
              streamlined communication system.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4FD1C7] to-[#45B8AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaStethoscope className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Expert Diagnosis
            </h3>
            <p className="text-gray-600 text-sm">
              Receive accurate diagnoses from board-certified specialists with
              years of experience.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4FD1C7] to-[#45B8AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaHeartbeat className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Health Monitoring
            </h3>
            <p className="text-gray-600 text-sm">
              Track your health metrics and receive personalized insights for
              better wellness management.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4FD1C7] to-[#45B8AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaAward className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Certified Professionals
            </h3>
            <p className="text-gray-600 text-sm">
              Work with certified and experienced healthcare professionals you
              can trust.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4FD1C7] to-[#45B8AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaMedkit className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Emergency Support
            </h3>
            <p className="text-gray-600 text-sm">
              Get immediate medical support and emergency assistance when you
              need it most.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#4FD1C7] to-[#45B8AF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <FaLaptopMedical className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Online Consult
            </h3>
            <p className="text-gray-600 text-sm">
              Online consultation wherever and whenever.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
