"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaComments, FaCalendarAlt, FaTimes, FaClock } from "react-icons/fa";
import { Message, Appointment } from "../types";

interface MobileModalsProps {
  showMessagesList: boolean;
  showAppointmentsList: boolean;
  messages: Message[];
  appointments: Appointment[];
  setShowMessagesList: (show: boolean) => void;
  setShowAppointmentsList: (show: boolean) => void;
}

export default function MobileModals({
  showMessagesList,
  showAppointmentsList,
  messages,
  appointments,
  setShowMessagesList,
  setShowAppointmentsList,
}: MobileModalsProps) {
  return (
    <>
      <AnimatePresence>
        {showMessagesList && (
          <motion.div
            className="md:hidden fixed top-2 left-2 right-2 bg-black/50 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMessagesList(false)}
          >
            <motion.div
              className="w-full bg-white max-h-[80vh] overflow-hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-100 bg-[#4FD1C7] text-white flex justify-between items-center">
                <h3 className="font-semibold flex items-center text-lg">
                  <FaComments className="mr-3 h-5 w-5" />
                  Messages
                </h3>
                <motion.button
                  onClick={() => setShowMessagesList(false)}
                  className="cursor-pointer text-white hover:text-gray-200 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="cursor-pointer w-6 h-6" />
                </motion.button>
              </div>
              <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
                {messages.filter((m) => m.isFromDoctor).length > 0 ? (
                  messages
                    .filter((m) => m.isFromDoctor)
                    .map((message) => (
                      <div
                        key={message.id}
                        className="p-4 border-b border-gray-50"
                      >
                        <div className="flex items-center mb-3">
                          <img
                            src={message.doctor.image}
                            alt={message.doctor.name}
                            className="w-12 h-12 rounded-full object-cover mr-3"
                          />
                          <div className="flex-1">
                            <span className="font-medium text-gray-800 block">
                              {message.doctor.name}
                            </span>
                            <p className="text-sm text-gray-500">
                              {message.doctor.title}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2 leading-relaxed">
                          {message.text}
                        </p>
                        <span className="text-xs text-gray-400">
                          {message.date}
                        </span>
                      </div>
                    ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <FaComments className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium mb-2">No messages yet</p>
                    <p className="text-sm">
                      Messages from doctors will appear here
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAppointmentsList && (
          <motion.div
            className="md:hidden fixed top-2 left-2 right-2 bg-black/50 backdrop-blur-sm z-50 flex items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAppointmentsList(false)}
          >
            <motion.div
              className="w-full bg-white max-h-[80vh] overflow-hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-100 bg-[#4FD1C7] text-white flex justify-between items-center">
                <h3 className="font-semibold flex items-center text-lg">
                  <FaCalendarAlt className="mr-3 h-5 w-5" />
                  My Appointments
                </h3>
                <motion.button
                  onClick={() => setShowAppointmentsList(false)}
                  className="cursor-pointer text-white hover:text-gray-200 transition-colors p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="cursor-pointer w-6 h-6" />
                </motion.button>
              </div>
              <div className="overflow-y-auto max-h-[calc(80vh-80px)]">
                {appointments.length > 0 ? (
                  appointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="p-4 border-b border-gray-50"
                    >
                      <div className="flex items-center mb-4">
                        <img
                          src={appointment.doctor.image}
                          alt={appointment.doctor.name}
                          className="w-14 h-14 rounded-full object-cover mr-4"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 text-lg">
                            {appointment.doctor.name}
                          </h4>
                          <p className="text-sm text-gray-500 mb-1">
                            {appointment.doctor.title}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FaCalendarAlt className="h-4 w-4 mr-2 text-[#4FD1C7]" />
                            <span className="font-medium text-gray-700">
                              {appointment.date.day}
                            </span>
                          </div>
                          <span className="text-gray-600">
                            {new Date(
                              appointment.date.date
                            ).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <FaClock className="h-4 w-4 mr-2 text-green-500" />
                            <span className="font-medium text-gray-700">
                              Time
                            </span>
                          </div>
                          <span className="text-gray-600 font-medium">
                            {appointment.time.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-8 text-center text-gray-500">
                    <FaCalendarAlt className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                    <p className="text-lg font-medium mb-2">
                      No appointments scheduled
                    </p>
                    <p className="text-sm">
                      Your upcoming appointments will appear here
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
