"use client";
import { Lato } from "next/font/google";

// Components
import Navigation from "./components/Navigation";
import MobileModals from "./components/MobileModals";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import SpecialistsSection from "./components/SpecialistsSection";
import MessageModal from "./components/MessageModal";
import AppointmentModal from "./components/AppointmentModal";
import TestimonialsSection from "./components/TestimonialsSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";
import ToastNotifications from "./components/ToastNotifications";

// Custom hook
import { useAppState } from "./hooks/useAppState";

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App() {
  const {
    // State
    messageCount,
    selectedDoctor,
    selectedTime,
    selectedDate,
    showAppointmentModal,
    appointments,
    showAppointmentsList,
    showMessagesList,
    messages,
    isMessageModalOpen,
    messageText,
    toasts,
    isMobileMenuOpen,
    newsletterEmail,
    doctors,
    availableDates,
    times,

    // Animation variants
    fadeInUp,
    staggerContainer,
    buttonVariants,

    // Refs
    messageListRef,
    appointmentListRef,

    // State setters
    setShowMessagesList,
    setShowAppointmentsList,
    setIsMobileMenuOpen,
    setNewsletterEmail,
    setMessageModalOpen,
    setHoveredAvatar,
    setShowAppointmentModal,

    // Handlers
    handleMessageClick,
    handleMakeAppointmentClick,
    handleDateSelect,
    handleTimeSelect,
    hasExistingAppointment,
    hasAppointmentWithDoctor,
    hasTimeSlotBooked,
    confirmAppointment,
    sendMessage,
    handleMessageTextChange,
    showToast,
    removeToast,
  } = useAppState();

  return (
    <div className={`${lato.className} bg-gray-50 min-h-screen`}>
      <Navigation
        messageCount={messageCount}
        appointments={appointments}
        messages={messages}
        showMessagesList={showMessagesList}
        showAppointmentsList={showAppointmentsList}
        isMobileMenuOpen={isMobileMenuOpen}
        setShowMessagesList={setShowMessagesList}
        setShowAppointmentsList={setShowAppointmentsList}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        messageListRef={messageListRef}
        appointmentListRef={appointmentListRef}
      />

      <MobileModals
        showMessagesList={showMessagesList}
        showAppointmentsList={showAppointmentsList}
        messages={messages}
        appointments={appointments}
        setShowMessagesList={setShowMessagesList}
        setShowAppointmentsList={setShowAppointmentsList}
      />

      <HeroSection buttonVariants={buttonVariants} />

      <FeaturesSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <SpecialistsSection
        doctors={doctors}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        buttonVariants={buttonVariants}
        setHoveredAvatar={setHoveredAvatar}
        handleMessageClick={handleMessageClick}
        handleMakeAppointmentClick={handleMakeAppointmentClick}
        hasAppointmentWithDoctor={hasAppointmentWithDoctor}
      />

      <MessageModal
        isMessageModalOpen={isMessageModalOpen}
        selectedDoctor={selectedDoctor}
        messageText={messageText}
        setMessageModalOpen={setMessageModalOpen}
        handleMessageTextChange={handleMessageTextChange}
        sendMessage={sendMessage}
      />

      <AppointmentModal
        showAppointmentModal={showAppointmentModal}
        selectedDoctor={selectedDoctor}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        availableDates={availableDates}
        times={times}
        buttonVariants={buttonVariants}
        setShowAppointmentModal={setShowAppointmentModal}
        handleDateSelect={handleDateSelect}
        handleTimeSelect={handleTimeSelect}
        confirmAppointment={confirmAppointment}
        hasExistingAppointment={hasExistingAppointment}
        hasTimeSlotBooked={hasTimeSlotBooked}
      />

      <TestimonialsSection
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
      />

      <NewsletterSection
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        showToast={showToast}
        fadeInUp={fadeInUp}
        staggerContainer={staggerContainer}
        buttonVariants={buttonVariants}
      />

      <Footer fadeInUp={fadeInUp} showToast={showToast} />

      <ToastNotifications toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
