export interface Doctor {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  image: string;
  bio: string;
  rating: number;
  consultations: number;
}

export interface AvailableDate {
  id: number;
  date: string;
  day: string;
  available: boolean;
}

export interface TimeSlot {
  id: number;
  time: string;
  available: boolean;
}

export interface Appointment {
  id: number;
  doctor: Doctor;
  date: AvailableDate;
  time: TimeSlot;
}

export interface Message {
  id: number;
  doctor: Doctor;
  text: string;
  date: string;
  isFromDoctor: boolean;
}

export interface Toast {
  id: number;
  message: string;
  type: "success" | "error" | "info";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Variants {
  [key: string]: any;
  hover?: {
    scale?: number;
    boxShadow?: string;
    transition?: {
      duration: number;
    };
    backgroundColor?: string;
  };
  tap?: {
    scale: number;
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FadeInUpVariant {
  [key: string]: any;
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface StaggerContainerVariant {
  [key: string]: any;
  hidden: {
    opacity: number;
  };
  visible: {
    opacity: number;
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
}
