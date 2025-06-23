"use client";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaCheckCircle,
  FaVideo,
  FaHeartbeat,
  FaCalendarAlt,
  FaUserMd,
  FaPhone,
} from "react-icons/fa";
import { FadeInUpVariant } from "../types";

interface FooterProps {
  fadeInUp: FadeInUpVariant;
  showToast: (message: string, type?: "success" | "error" | "info") => void;
}

export default function Footer({ fadeInUp, showToast }: FooterProps) {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="max-w-7xl mx-auto bg-gray-50 border-t border-gray-200 mt-20 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 justify-center md:justify-start">
              <div className="bg-[#4FD1C7] p-2 rounded-xl">
                <FaCheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Doctor With You
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Revolutionizing healthcare through technology, compassion, and
              excellence in medical care.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <motion.a
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-white p-3 rounded-xl hover:bg-[#4FD1C7] hover:text-white transition-colors text-[#4FD1C7] border border-gray-200"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaFacebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://x.com/"
                target="_blank"
                className="bg-white p-3 rounded-xl hover:bg-[#4FD1C7] hover:text-white transition-colors text-[#4FD1C7] border border-gray-200"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaTwitter className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/"
                target="_blank"
                className="bg-white p-3 rounded-xl hover:bg-[#4FD1C7] hover:text-white transition-colors text-[#4FD1C7] border border-gray-200"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaInstagram className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/"
                target="_blank"
                className="bg-white p-3 rounded-xl hover:bg-[#4FD1C7] hover:text-white transition-colors text-[#4FD1C7] border border-gray-200"
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <FaLinkedin className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Services
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  onClick={() => {
                    showToast("Video Consultations coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors flex items-center justify-center md:justify-start"
                >
                  <FaVideo className="mr-2 h-4 w-4" />
                  Video Consultations
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    showToast("Emergency Care coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors flex items-center justify-center md:justify-start"
                >
                  <FaHeartbeat className="mr-2 h-4 w-4" />
                  Emergency Care
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    showToast("Health Checkups coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors flex items-center justify-center md:justify-start"
                >
                  <FaCalendarAlt className="mr-2 h-4 w-4" />
                  Health Checkups
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    showToast("Specialist Care coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors flex items-center justify-center md:justify-start"
                >
                  <FaUserMd className="mr-2 h-4 w-4" />
                  Specialist Care
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Company
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a
                  onClick={() => {
                    showToast("About Us coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    showToast("Careers coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    showToast("Privacy Policy coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors block"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    showToast("Terms of Service coming soon");
                  }}
                  className="cursor-pointer hover:text-[#4FD1C7] transition-colors block"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Contact
            </h3>
            <div className="space-y-3 text-gray-600">
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-3 h-4 w-4 text-[#4FD1C7]" />
                <span>+1 (555) 123-4567</span>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <svg
                  className="mr-3 h-4 w-4 text-[#4FD1C7]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>support@dfy.com</span>
              </p>
              <p className="flex items-start justify-center md:justify-start">
                <svg
                  className="mr-3 h-4 w-4 text-[#4FD1C7] mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  No. 123, 1st Floor,
                  <br />
                  Main Road, NY
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Doctor With You. All rights reserved. |
            Transforming healthcare through innovation.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
