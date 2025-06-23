"use client";
import { useState, useEffect, useRef } from "react";
import {
  Doctor,
  AvailableDate,
  TimeSlot,
  Appointment,
  Message,
  Toast,
  FadeInUpVariant,
  StaggerContainerVariant,
  Variants,
} from "../types";

export function useAppState() {
  const [messageCount, setMessageCount] = useState<number>(0);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [timeSelection, setTimeSelection] = useState<boolean>(false);
  const [selectedTime, setSelectedTime] = useState<TimeSlot | null>(null);
  const [selectedDate, setSelectedDate] = useState<AvailableDate | null>(null);
  const [showAppointmentModal, setShowAppointmentModal] =
    useState<boolean>(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showAppointmentsList, setShowAppointmentsList] =
    useState<boolean>(false);
  const [showMessagesList, setShowMessagesList] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isMessageModalOpen, setMessageModalOpen] = useState<boolean>(false);
  const [messageText, setMessageText] = useState<string>("");
  const [hoveredAvatar, setHoveredAvatar] = useState<number | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");

  const avatarCardRef = useRef<HTMLDivElement>(null);
  const messageListRef = useRef<HTMLDivElement>(null);
  const appointmentListRef = useRef<HTMLDivElement>(null);

  const [doctors, setDoctors] = useState<Doctor[]>([
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Chief of Cardiology",
      specialties: ["Interventional Cardiology", "Heart Surgery"],
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=faces",
      bio: "Board-certified cardiologist with 15+ years of experience in complex cardiac procedures.",
      rating: 4.9,
      consultations: 2500,
    },
    {
      id: 2,
      name: "Dr. Michael Rodriguez",
      title: "Pediatric Oncologist",
      specialties: ["Pediatric Cancer", "Blood Disorders"],
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces",
      bio: "Leading pediatric oncologist specializing in innovative cancer treatments for children.",
      rating: 4.8,
      consultations: 1800,
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Dermatology Specialist",
      specialties: ["Cosmetic Dermatology", "Skin Cancer"],
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW58ZW58MHx8MHx8fDA%3D",
      bio: "Expert dermatologist focused on advanced skin treatments and cancer prevention.",
      rating: 4.9,
      consultations: 3200,
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      title: "Orthopedic Surgeon",
      specialties: ["Sports Medicine", "Joint Replacement"],
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=faces",
      bio: "Renowned orthopedic surgeon specializing in minimally invasive procedures.",
      rating: 4.7,
      consultations: 2100,
    },
    {
      id: 5,
      name: "Dr. Lisa Park",
      title: "Endocrinologist",
      specialties: ["Diabetes Care", "Thyroid Disorders"],
      image:
        "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=faces",
      bio: "Leading endocrinologist with expertise in hormone disorders and metabolic diseases.",
      rating: 4.8,
      consultations: 1950,
    },
    {
      id: 6,
      name: "Dr. Robert Kim",
      title: "Infectious Disease Specialist",
      specialties: ["Immunology", "Tropical Medicine"],
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=faces",
      bio: "Expert in infectious diseases with extensive research in immunology and prevention.",
      rating: 4.9,
      consultations: 1600,
    },
  ]);

  const [availableDates, setAvailableDates] = useState<AvailableDate[]>([
    { id: 1, date: "2025-05-26", day: "Monday", available: true },
    { id: 2, date: "2025-05-27", day: "Tuesday", available: true },
    { id: 3, date: "2025-05-28", day: "Wednesday", available: false },
    { id: 4, date: "2025-05-29", day: "Thursday", available: true },
    { id: 5, date: "2025-05-30", day: "Friday", available: false },
  ]);

  const [times, setTimes] = useState<TimeSlot[]>([
    { id: 1, time: "09:00", available: true },
    { id: 2, time: "10:00", available: false },
    { id: 3, time: "11:00", available: true },
    { id: 4, time: "12:00", available: false },
    { id: 5, time: "13:00", available: true },
    { id: 6, time: "14:00", available: false },
  ]);

  // Animation variants
  const fadeInUp: FadeInUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer: StaggerContainerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  // Event handlers
  const handleMessageClick = (doctor: Doctor): void => {
    setSelectedDoctor(doctor);
    setMessageModalOpen(true);
  };

  const handleMakeAppointmentClick = (doctor: Doctor): void => {
    if (hasAppointmentWithDoctor(doctor.id)) {
      showToast("You already have an appointment with this doctor!", "info");
      return;
    }
    setSelectedDoctor(doctor);
    setShowAppointmentModal(true);
  };

  const handleDateSelect = (date: AvailableDate): void => {
    if (date.available) {
      setSelectedDate(date);
    }
  };

  const handleTimeSelect = (time: TimeSlot): void => {
    if (time.available) {
      setSelectedTime(time);
    }
  };

  const hasExistingAppointment = (
    doctorId: number,
    dateId: number,
    timeId: number
  ): boolean => {
    return appointments.some(
      (appointment) =>
        appointment.doctor.id === doctorId &&
        appointment.date.id === dateId &&
        appointment.time.id === timeId
    );
  };

  const hasAppointmentWithDoctor = (doctorId: number): boolean => {
    return appointments.some(
      (appointment) => appointment.doctor.id === doctorId
    );
  };

  const hasTimeSlotBooked = (dateId: number, timeId: number): boolean => {
    return appointments.some(
      (appointment) =>
        appointment.date.id === dateId && appointment.time.id === timeId
    );
  };

  const confirmAppointment = (): void => {
    if (selectedDoctor && selectedDate && selectedTime) {
      if (
        hasExistingAppointment(
          selectedDoctor.id,
          selectedDate.id,
          selectedTime.id
        )
      ) {
        showToast("This appointment slot is already booked!", "error");
        return;
      }

      if (hasAppointmentWithDoctor(selectedDoctor.id)) {
        showToast("You already have an appointment with this doctor!", "error");
        return;
      }

      if (hasTimeSlotBooked(selectedDate.id, selectedTime.id)) {
        showToast(
          "You already have an appointment at this time slot!",
          "error"
        );
        return;
      }

      const newAppointment: Appointment = {
        id: appointments.length + 1,
        doctor: selectedDoctor,
        date: selectedDate,
        time: selectedTime,
      };
      setAppointments([...appointments, newAppointment]);
      setShowAppointmentModal(false);
      setSelectedDate(null);
      setSelectedTime(null);
      showToast("Appointment booked successfully!", "success");
    }
  };

  const sendMessage = (): void => {
    if (selectedDoctor && messageText.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        doctor: selectedDoctor,
        text: messageText,
        date: new Date().toLocaleString(),
        isFromDoctor: false,
      };
      setMessages([...messages, newMessage]);
      setMessageText("");
      setMessageModalOpen(false);

      setTimeout(() => {
        const replyMessage: Message = {
          id: messages.length + 2,
          doctor: selectedDoctor,
          text: `Thank you for your message. I will respond within 24 hours. - ${selectedDoctor.name}`,
          date: new Date().toLocaleString(),
          isFromDoctor: true,
        };
        setMessages((prev) => [...prev, replyMessage]);
        setMessageCount((prev) => prev + 1);
      }, 1000);

      showToast(`Message sent successfully!`);
    }
  };

  const handleMessageTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setMessageText(e.target.value);
  };

  const showToast = (
    message: string,
    type: "success" | "error" | "info" = "success"
  ): void => {
    const newToast: Toast = {
      id: Date.now(),
      message,
      type,
    };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
    }, 3000);
  };

  const removeToast = (id: number): void => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Click outside effect
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      const target = event.target as Element;

      if (messageListRef.current && !messageListRef.current.contains(target)) {
        setShowMessagesList(false);
      }
      if (
        appointmentListRef.current &&
        !appointmentListRef.current.contains(target)
      ) {
        setShowAppointmentsList(false);
      }
      if (
        avatarCardRef.current &&
        !avatarCardRef.current.contains(target) &&
        !target.closest(".avatar-container")
      ) {
        setHoveredAvatar(null);
      }
      if (
        !target.closest(".mobile-menu") &&
        !target.closest(".hamburger-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    // State
    messageCount,
    selectedDoctor,
    timeSelection,
    selectedTime,
    selectedDate,
    showAppointmentModal,
    appointments,
    showAppointmentsList,
    showMessagesList,
    messages,
    isMessageModalOpen,
    messageText,
    hoveredAvatar,
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
    avatarCardRef,
    messageListRef,
    appointmentListRef,

    // State setters
    setMessageCount,
    setSelectedDoctor,
    setTimeSelection,
    setSelectedTime,
    setSelectedDate,
    setShowAppointmentModal,
    setAppointments,
    setShowAppointmentsList,
    setShowMessagesList,
    setMessages,
    setMessageModalOpen,
    setMessageText,
    setHoveredAvatar,
    setToasts,
    setIsMobileMenuOpen,
    setNewsletterEmail,
    setDoctors,
    setAvailableDates,
    setTimes,

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
  };
}
