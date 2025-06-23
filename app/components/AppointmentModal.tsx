"use client";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { Doctor, AvailableDate, TimeSlot, Variants } from "../types";

interface AppointmentModalProps {
  showAppointmentModal: boolean;
  selectedDoctor: Doctor | null;
  selectedDate: AvailableDate | null;
  selectedTime: TimeSlot | null;
  availableDates: AvailableDate[];
  times: TimeSlot[];
  buttonVariants: Variants;
  setShowAppointmentModal: (show: boolean) => void;
  handleDateSelect: (date: AvailableDate) => void;
  handleTimeSelect: (time: TimeSlot) => void;
  confirmAppointment: () => void;
  hasExistingAppointment: (
    doctorId: number,
    dateId: number,
    timeId: number
  ) => boolean;
  hasTimeSlotBooked: (dateId: number, timeId: number) => boolean;
}

export default function AppointmentModal({
  showAppointmentModal,
  selectedDoctor,
  selectedDate,
  selectedTime,
  availableDates,
  times,
  buttonVariants,
  setShowAppointmentModal,
  handleDateSelect,
  handleTimeSelect,
  confirmAppointment,
  hasExistingAppointment,
  hasTimeSlotBooked,
}: AppointmentModalProps) {
  if (!showAppointmentModal || !selectedDoctor) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl h-full overflow-y-auto w-full max-w-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-[#4FD1C7] text-white p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-white/20"
            />
            <div>
              <h2 className="text-xl font-semibold">Book Appointment</h2>
              <p className="text-white/80 text-sm">
                {selectedDoctor.name} • {selectedDoctor.title}
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowAppointmentModal(false)}
            className="cursor-pointer text-white hover:text-gray-200 focus:outline-none p-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
              <FaCalendarAlt className="mr-2 text-[#4FD1C7]" />
              Select Date
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {availableDates.map((date: AvailableDate) => (
                <div
                  key={date.id}
                  onClick={() => handleDateSelect(date)}
                  className={`p-4 border-2 rounded-2xl text-center cursor-pointer transition-all ${
                    !date.available
                      ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                      : selectedDate?.id === date.id
                      ? "bg-[#4FD1C7] text-white border-[#4FD1C7] shadow-lg"
                      : "hover:border-[#4FD1C7] hover:bg-[#4FD1C7]/5 border-gray-200"
                  }`}
                >
                  <div className="font-medium">{date.day}</div>
                  <div className="text-sm mt-1">
                    {new Date(date.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
              <FaClock className="mr-2 text-[#4FD1C7]" />
              Select Time
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {times.map((time: TimeSlot) => {
                const isSlotBookedWithThisDoctor =
                  selectedDoctor &&
                  selectedDate &&
                  hasExistingAppointment(
                    selectedDoctor.id,
                    selectedDate.id,
                    time.id
                  );

                const isTimeSlotAlreadyBooked =
                  selectedDate && hasTimeSlotBooked(selectedDate.id, time.id);

                const isSlotAvailable =
                  time.available &&
                  !isSlotBookedWithThisDoctor &&
                  !isTimeSlotAlreadyBooked;

                return (
                  <div
                    key={time.id}
                    onClick={() => {
                      if (isSlotAvailable) {
                        handleTimeSelect(time);
                      }
                    }}
                    className={`p-3 border-2 rounded-xl text-center transition-all ${
                      !isSlotAvailable
                        ? "bg-gray-50 text-gray-400 border-gray-200 cursor-not-allowed"
                        : selectedTime?.id === time.id
                        ? "bg-[#4FD1C7] text-white border-[#4FD1C7] shadow-lg cursor-pointer"
                        : "hover:border-[#4FD1C7] hover:bg-[#4FD1C7]/5 border-gray-200 cursor-pointer"
                    }`}
                  >
                    <div className="font-medium">{time.time}</div>
                    {(isSlotBookedWithThisDoctor ||
                      isTimeSlotAlreadyBooked) && (
                      <div className="text-xs mt-1 text-red-500">
                        {isTimeSlotAlreadyBooked
                          ? "You have an appointment"
                          : "Booked"}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {selectedDate && selectedTime && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#4FD1C7]/10 border border-[#4FD1C7]/20 rounded-2xl p-4 mb-6"
            >
              <h4 className="font-semibold text-[#4FD1C7] mb-2">
                Appointment Summary
              </h4>
              <div className="text-sm text-gray-700">
                <p>
                  <strong>Doctor:</strong> {selectedDoctor.name}
                </p>
                <p>
                  <strong>Date:</strong> {selectedDate.day},{" "}
                  {new Date(selectedDate.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Time:</strong> {selectedTime.time}
                </p>
                <p>
                  <strong>Type:</strong> Video Consultation
                </p>
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
          <motion.button
            onClick={() => setShowAppointmentModal(false)}
            className="cursor-pointer px-6 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
          <motion.button
            onClick={confirmAppointment}
            className={`cursor-pointer px-8 py-3 rounded-xl font-medium transition-all ${
              selectedDate && selectedTime
                ? "bg-[#4FD1C7] text-white hover:bg-[#45B8AF] shadow-lg"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            variants={buttonVariants}
            whileHover={selectedDate && selectedTime ? "hover" : {}}
            whileTap={selectedDate && selectedTime ? "tap" : {}}
            disabled={!selectedDate || !selectedTime}
          >
            <FaCalendarAlt className="inline mr-2" />
            Confirm Appointment
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
