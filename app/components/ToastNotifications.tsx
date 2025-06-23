"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Toast } from "../types";

interface ToastNotificationsProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

export default function ToastNotifications({
  toasts,
  removeToast,
}: ToastNotificationsProps) {
  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 300, scale: 0.3 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`
              flex items-center justify-between p-4 rounded-xl shadow-lg border min-w-[300px] max-w-[400px]
              ${
                toast.type === "success"
                  ? "bg-green-50 border-green-200 text-green-800"
                  : toast.type === "error"
                  ? "bg-red-50 border-red-200 text-red-800"
                  : "bg-blue-50 border-blue-200 text-blue-800"
              }
            `}
          >
            <div className="flex items-center space-x-3">
              <div
                className={`
                flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
                ${
                  toast.type === "success"
                    ? "bg-green-100"
                    : toast.type === "error"
                    ? "bg-red-100"
                    : "bg-blue-100"
                }
              `}
              >
                {toast.type === "success" && (
                  <FaCheckCircle className="w-4 h-4 text-green-600" />
                )}
                {toast.type === "error" && (
                  <svg
                    className="w-4 h-4 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {toast.type === "info" && (
                  <svg
                    className="w-4 h-4 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="font-medium text-sm">{toast.message}</span>
            </div>
            <motion.button
              onClick={() => removeToast(toast.id)}
              className={`
                ml-4 flex-shrink-0 p-1 rounded-lg transition-colors
                ${
                  toast.type === "success"
                    ? "hover:bg-green-100 text-green-600"
                    : toast.type === "error"
                    ? "hover:bg-red-100 text-red-600"
                    : "hover:bg-blue-100 text-blue-600"
                }
              `}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-4 h-4"
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
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
