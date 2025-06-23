"use client";
import { motion } from "framer-motion";
import { FaHeartbeat, FaUserMd, FaCalendarAlt } from "react-icons/fa";
import { FadeInUpVariant, StaggerContainerVariant, Variants } from "../types";

interface NewsletterSectionProps {
  newsletterEmail: string;
  setNewsletterEmail: (email: string) => void;
  showToast: (message: string, type?: "success" | "error" | "info") => void;
  fadeInUp: FadeInUpVariant;
  staggerContainer: StaggerContainerVariant;
  buttonVariants: Variants;
}

export default function NewsletterSection({
  newsletterEmail,
  setNewsletterEmail,
  showToast,
  fadeInUp,
  staggerContainer,
  buttonVariants,
}: NewsletterSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className=""
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Never miss a health update
              </h2>

              <p className="text-xl text-gray-600 mb-8">
                Join thousands of patients getting weekly health insights,
                expert tips, and platform updates.
              </p>

              <div className="mb-6">
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-6 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-[#4FD1C7] focus:border-transparent text-gray-900 text-lg"
                  />
                  <motion.button
                    onClick={() => {
                      if (
                        newsletterEmail.trim() &&
                        newsletterEmail.includes("@")
                      ) {
                        showToast("Thank you for subscribing!");
                        setNewsletterEmail("");
                      } else {
                        showToast(
                          "Please enter a valid email address",
                          "error"
                        );
                      }
                    }}
                    className="cursor-pointer bg-[#4FD1C7] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#45B8AF] transition-colors whitespace-nowrap"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Subscribe
                  </motion.button>
                </div>

                <p className="text-sm text-gray-500">
                  Free forever. No spam. Unsubscribe with one click.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4FD1C7] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaHeartbeat className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Weekly Health Tips
                  </h3>
                  <p className="text-gray-600">
                    Expert advice and wellness insights to keep you healthy and
                    informed about the latest medical trends.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4FD1C7] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaUserMd className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Doctor Insights
                  </h3>
                  <p className="text-gray-600">
                    Get the latest medical research and findings translated into
                    simple, actionable health advice.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#4FD1C7] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <FaCalendarAlt className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Platform Updates
                  </h3>
                  <p className="text-gray-600">
                    Be the first to know about new features, improvements, and
                    exclusive access to beta releases.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
