"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaCheckCircle,
  FaComments,
  FaCalendarAlt,
  FaBars,
  FaTimes,
  FaClock,
} from "react-icons/fa";
import { Message, Appointment } from "../types";

interface NavigationProps {
  messageCount: number;
  appointments: Appointment[];
  messages: Message[];
  showMessagesList: boolean;
  showAppointmentsList: boolean;
  isMobileMenuOpen: boolean;
  setShowMessagesList: (show: boolean) => void;
  setShowAppointmentsList: (show: boolean) => void;
  setIsMobileMenuOpen: (show: boolean) => void;
  messageListRef: React.RefObject<HTMLDivElement | null>;
  appointmentListRef: React.RefObject<HTMLDivElement | null>;
}

export default function Navigation({
  messageCount,
  appointments,
  messages,
  showMessagesList,
  showAppointmentsList,
  isMobileMenuOpen,
  setShowMessagesList,
  setShowAppointmentsList,
  setIsMobileMenuOpen,
  messageListRef,
  appointmentListRef,
}: NavigationProps) {
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="shadow-sm sticky z-50 bg-white top-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-[#4FD1C7] p-2 rounded-lg">
                <FaCheckCircle className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Doctor With You
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors"
              >
                Features
              </a>
              <a
                href="#specialists"
                className="text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors"
              >
                Specialists
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors"
              >
                Testimonials
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <motion.button
                  className="cursor-pointer relative p-3 text-gray-600 hover:text-[#4FD1C7] hover:bg-gray-50 rounded-xl transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowMessagesList(true);
                    setShowAppointmentsList(false);
                  }}
                >
                  <FaComments className="h-6 w-6" />
                  {messageCount > 0 && (
                    <span className="absolute -top-1 -right-1 text-xs bg-[#4FD1C7] text-white rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {messageCount}
                    </span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {showMessagesList && (
                    <motion.div
                      ref={messageListRef}
                      className="absolute top-full right-0 mt-2 w-80 bg-white shadow-2xl rounded-2xl border border-gray-100 z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 border-b border-gray-100 bg-[#4FD1C7] text-white rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-semibold flex items-center">
                          <FaComments className="" />
                          Messages
                        </h3>
                        <motion.button
                          onClick={() => setShowMessagesList(false)}
                          className="cursor-pointer text-white hover:text-gray-200 transition-colors p-1"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </motion.button>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {messages.filter((m) => m.isFromDoctor).length > 0 ? (
                          messages
                            .filter((m) => m.isFromDoctor)
                            .map((message) => (
                              <div key={message.id} className="p-4">
                                <div className="flex items-center mb-2">
                                  <img
                                    src={message.doctor.image}
                                    alt={message.doctor.name}
                                    className="w-10 h-10 rounded-full object-cover mr-3"
                                  />
                                  <div>
                                    <span className="font-medium text-sm text-gray-800">
                                      {message.doctor.name}
                                    </span>
                                    <p className="text-xs text-gray-500">
                                      {message.doctor.title}
                                    </p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">
                                  {message.text.substring(0, 60)}...
                                </p>
                                <span className="text-xs text-gray-400">
                                  {message.date}
                                </span>
                              </div>
                            ))
                        ) : (
                          <div className="p-6 text-center text-gray-500">
                            <FaComments className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                            <p>No messages yet</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowAppointmentsList(true);
                    setShowMessagesList(false);
                  }}
                  className="cursor-pointer relative p-3 text-gray-600 hover:text-[#4FD1C7] hover:bg-gray-50 rounded-xl transition-colors"
                >
                  <FaCalendarAlt className="h-6 w-6" />
                  {appointments.length > 0 && (
                    <span className="absolute -top-1 -right-1 text-xs bg-[#4FD1C7] text-white rounded-full h-5 w-5 flex items-center justify-center font-medium">
                      {appointments.length}
                    </span>
                  )}
                </motion.button>

                <AnimatePresence>
                  {showAppointmentsList && (
                    <motion.div
                      ref={appointmentListRef}
                      className="absolute top-full right-0 mt-2 w-96 bg-white shadow-2xl rounded-2xl z-50"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="p-4 border-b border-gray-100 bg-[#4FD1C7] text-white rounded-t-2xl flex justify-between items-center">
                        <h3 className="font-semibold flex items-center">
                          <FaCalendarAlt className="" />
                          My Appointments
                        </h3>
                        <motion.button
                          onClick={() => setShowAppointmentsList(false)}
                          className="cursor-pointer text-white hover:text-gray-200 transition-colors p-1"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </motion.button>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {appointments.length > 0 ? (
                          appointments.map((appointment) => (
                            <div key={appointment.id} className="p-4">
                              <div className="flex items-center mb-3">
                                <img
                                  src={appointment.doctor.image}
                                  alt={appointment.doctor.name}
                                  className="w-12 h-12 rounded-full object-cover mr-3"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-800">
                                    {appointment.doctor.name}
                                  </h4>
                                  <p className="text-xs text-gray-500">
                                    {appointment.doctor.title}
                                  </p>
                                </div>
                              </div>
                              <div className="flex justify-between text-sm text-gray-600 mt-2">
                                <div className="flex items-center">
                                  <FaCalendarAlt className="h-3 w-3 mr-1 text-[#4FD1C7]" />
                                  <span>
                                    {appointment.date.day},{" "}
                                    {new Date(
                                      appointment.date.date
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="flex items-center">
                                  <FaClock className="h-3 w-3 mr-1 text-green-500" />
                                  <span>{appointment.time.time}</span>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="p-6 text-center text-gray-500">
                            <FaCalendarAlt className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                            <p>No appointments scheduled</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                className="cursor-pointer top-0 hamburger-button md:hidden p-3 text-gray-600 hover:text-[#4FD1C7] hover:bg-gray-50 rounded-xl transition-colors"
                onClick={toggleMobileMenu}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                className="mobile-menu md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-4 py-6 space-y-4">
                  <motion.a
                    href="#"
                    className="block text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Home
                  </motion.a>
                  <motion.a
                    href="#features"
                    className="block text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const featuresSection =
                        document.getElementById("features");
                      if (featuresSection) {
                        featuresSection.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Features
                  </motion.a>
                  <motion.a
                    href="#specialists"
                    className="block text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const specialistsSection =
                        document.getElementById("specialists");
                      if (specialistsSection) {
                        specialistsSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Specialists
                  </motion.a>
                  <motion.a
                    href="#testimonials"
                    className="block text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const testimonialsSection =
                        document.getElementById("testimonials");
                      if (testimonialsSection) {
                        testimonialsSection.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    Testimonials
                  </motion.a>

                  <motion.div
                    className="border-t border-gray-200 my-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  />

                  <motion.button
                    className="cursor-pointer w-full flex items-center justify-between text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowMessagesList(true);
                      setShowAppointmentsList(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="flex items-center">
                      <FaComments className="h-5 w-5 mr-3 text-[#4FD1C7]" />
                      <span>Messages</span>
                    </div>
                    {messageCount > 0 && (
                      <span className="bg-[#4FD1C7] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {messageCount}
                      </span>
                    )}
                  </motion.button>

                  <motion.button
                    className="cursor-pointer w-full flex items-center justify-between text-gray-700 hover:text-[#4FD1C7] font-medium transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setShowAppointmentsList(true);
                      setShowMessagesList(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="flex items-center">
                      <FaCalendarAlt className="h-5 w-5 mr-3 text-[#4FD1C7]" />
                      <span>My Appointments</span>
                    </div>
                    {appointments.length > 0 && (
                      <span className="bg-[#4FD1C7] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                        {appointments.length}
                      </span>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
