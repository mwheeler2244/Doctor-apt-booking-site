"use client";
import { motion } from "framer-motion";
import { FaComments, FaCalendarAlt } from "react-icons/fa";
import {
  Doctor,
  FadeInUpVariant,
  StaggerContainerVariant,
  Variants,
} from "../types";

interface SpecialistsSectionProps {
  doctors: Doctor[];
  fadeInUp: FadeInUpVariant;
  staggerContainer: StaggerContainerVariant;
  buttonVariants: Variants;
  setHoveredAvatar: (id: number | null) => void;
  handleMessageClick: (doctor: Doctor) => void;
  handleMakeAppointmentClick: (doctor: Doctor) => void;
  hasAppointmentWithDoctor: (doctorId: number) => boolean;
}

export default function SpecialistsSection({
  doctors,
  fadeInUp,
  staggerContainer,
  buttonVariants,
  setHoveredAvatar,
  handleMessageClick,
  handleMakeAppointmentClick,
  hasAppointmentWithDoctor,
}: SpecialistsSectionProps) {
  return (
    <section id="specialists" className="py-20 bg-gray-50">
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
            Meet Our Specialists
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect with board-certified physicians who are leaders in their
            fields.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {doctors.map((doctor: Doctor) => (
            <motion.div
              key={doctor.id}
              variants={fadeInUp}
              className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative p-6">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className="relative avatar-container"
                    onMouseEnter={() => setHoveredAvatar(doctor.id)}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 object-cover rounded-2xl"
                      src={doctor.image}
                      alt={doctor.name}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white"></div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-[#4FD1C7] font-medium text-sm mb-2">
                      {doctor.title}
                    </p>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {"★".repeat(Math.floor(doctor.rating))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {doctor.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {doctor.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {doctor.specialties.map((specialty: string) => (
                    <span
                      key={specialty}
                      className="px-3 py-1 bg-[#4FD1C7]/10 text-[#4FD1C7] text-xs font-medium rounded-full border border-[#4FD1C7]/20"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.button
                    onClick={() => handleMessageClick(doctor)}
                    className="cursor-pointer flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-xl hover:bg-gray-200 text-sm font-medium transition-all duration-200 flex items-center justify-center"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <FaComments className="mr-2 h-4 w-4" />
                    Message
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      if (!hasAppointmentWithDoctor(doctor.id)) {
                        handleMakeAppointmentClick(doctor);
                      }
                    }}
                    disabled={hasAppointmentWithDoctor(doctor.id)}
                    className={`flex-1 py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center ${
                      hasAppointmentWithDoctor(doctor.id)
                        ? "bg-green-100 text-green-700 border border-green-200 cursor-not-allowed"
                        : "bg-[#4FD1C7] text-white hover:bg-[#45B8AF] cursor-pointer"
                    }`}
                    variants={buttonVariants}
                    whileHover={
                      hasAppointmentWithDoctor(doctor.id) ? {} : "hover"
                    }
                    whileTap={hasAppointmentWithDoctor(doctor.id) ? {} : "tap"}
                  >
                    <FaCalendarAlt className="mr-2 h-4 w-4" />
                    {hasAppointmentWithDoctor(doctor.id)
                      ? "Scheduled"
                      : "Book Now"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
