"use client";
import { motion } from "framer-motion";
import { Variants } from "../types";

interface HeroSectionProps {
  buttonVariants: Variants;
}

export default function HeroSection({ buttonVariants }: HeroSectionProps) {
  return (
    <section className="bg-[#29A3A0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find a doctor
              <br />
              for you now!
            </h1>
            <p className="text-xl opacity-90 mb-8 leading-relaxed">
              We take the guesswork out of locating a doctor, hospital, or other
              medical facility in your area for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={() => {
                  const specialistsSection =
                    document.getElementById("specialists");
                  if (specialistsSection) {
                    specialistsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer bg-white text-[#4FD1C7] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Get Started
              </motion.button>
              <motion.button
                onClick={() => {
                  const testimonialsSection =
                    document.getElementById("testimonials");
                  if (testimonialsSection) {
                    testimonialsSection.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
                className="cursor-pointer border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#4FD1C7] transition-colors"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Learn More About Us
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=600&fit=crop&crop=faces"
                alt="Doctor"
                className="w-80 h-96 object-cover rounded-3xl"
              />
            </div>

            <div className="hidden lg:block absolute -right-4 top-2 space-y-6">
              <motion.div
                className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">
                  Years of
                  <br />
                  Experience
                </div>
              </motion.div>

              <motion.div
                className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="text-3xl font-bold">20K</div>
                <div className="text-sm opacity-90">
                  Doctor
                  <br />
                  Specialist
                </div>
              </motion.div>

              <motion.div
                className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 }}
              >
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-90">
                  Patient
                  <br />
                  Satisfaction
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:hidden mt-12 grid grid-cols-3 gap-4"
        >
          <motion.div
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-2xl font-bold">15+</div>
            <div className="text-xs opacity-90">
              Years of
              <br />
              Experience
            </div>
          </motion.div>

          <motion.div
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="text-2xl font-bold">20K</div>
            <div className="text-xs opacity-90">
              Doctor
              <br />
              Specialist
            </div>
          </motion.div>

          <motion.div
            className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-2xl text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="text-2xl font-bold">100%</div>
            <div className="text-xs opacity-90">
              Patient
              <br />
              Satisfaction
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
