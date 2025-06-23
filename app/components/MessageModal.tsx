"use client";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";
import { Doctor } from "../types";

interface MessageModalProps {
  isMessageModalOpen: boolean;
  selectedDoctor: Doctor | null;
  messageText: string;
  setMessageModalOpen: (open: boolean) => void;
  handleMessageTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sendMessage: () => void;
}

export default function MessageModal({
  isMessageModalOpen,
  selectedDoctor,
  messageText,
  setMessageModalOpen,
  handleMessageTextChange,
  sendMessage,
}: MessageModalProps) {
  if (!isMessageModalOpen || !selectedDoctor) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-gray-100"
      >
        <div className="bg-[#4FD1C7] text-white p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              className="w-12 h-12 rounded-2xl object-cover border-2 border-white/20"
            />
            <div>
              <h2 className="text-xl font-semibold">{selectedDoctor.name}</h2>
              <p className="text-white/80 text-sm">{selectedDoctor.title}</p>
            </div>
          </div>
          <motion.button
            whileHover={{ rotate: 90 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMessageModalOpen(false)}
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
          </motion.button>
        </div>

        <div className="p-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Your Message
          </label>
          <textarea
            className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#4FD1C7] focus:border-transparent resize-none transition-all text-gray-800 placeholder-gray-400"
            rows={6}
            placeholder="Describe your symptoms or ask your question..."
            value={messageText}
            onChange={handleMessageTextChange}
          />
          <p className="text-xs text-gray-500 mt-2">
            Your message will be sent securely and privately to{" "}
            {selectedDoctor.name}.
          </p>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end space-x-3">
          <motion.button
            onClick={() => setMessageModalOpen(false)}
            className="cursor-pointer px-6 py-3 text-gray-700 font-medium rounded-xl hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Cancel
          </motion.button>
          <motion.button
            onClick={sendMessage}
            disabled={messageText.trim() === ""}
            className="cursor-pointer bg-[#4FD1C7] text-white px-8 py-3 rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#45B8AF]"
            whileHover={{
              scale: messageText.trim() !== "" ? 1.02 : 1,
            }}
            whileTap={{ scale: messageText.trim() !== "" ? 0.98 : 1 }}
          >
            <FaComments className="inline mr-2" />
            Send Message
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
