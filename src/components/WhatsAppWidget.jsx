"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send } from "lucide-react"

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [selectedService, setSelectedService] = useState("")
  const [customMessage, setCustomMessage] = useState("")

  const whatsappNumber = "+919643570809"

  // Show widget after page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const services = [
    "Website Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Hosting & Domain",
    "Other Services",
  ]

  const quickMessages = [
    "I need a new website for my business",
    "I want to develop a mobile app",
    "I need help with e-commerce setup",
    "I'm interested in digital marketing services",
    "I need hosting and domain services",
  ]

  const generateWhatsAppURL = (message) => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${whatsappNumber.replace("+", "")}?text=${encodedMessage}`
  }

  const handleQuickMessage = (message) => {
    const fullMessage = `Hi Devshiping Team! 👋\n\n${message}\n\nI found you through your website and would like to discuss this project with you.`
    window.open(generateWhatsAppURL(fullMessage), "_blank")
    setIsOpen(false)
  }

  const handleCustomMessage = () => {
    if (!customMessage.trim()) return

    const serviceText = selectedService ? `\n\nService: ${selectedService}` : ""
    const fullMessage = `Hi Devshiping Team! 👋\n\n${customMessage}${serviceText}\n\nI found you through your website and would like to discuss this project with you.`

    window.open(generateWhatsAppURL(fullMessage), "_blank")
    setIsOpen(false)
    setCustomMessage("")
    setSelectedService("")
  }

  const handleStartChat = () => {
    const defaultMessage = `Hi Devshiping Team! 👋\n\nI'm interested in your services and would like to discuss my project requirements with you.\n\nI found you through your website. Can we talk?`
    window.open(generateWhatsAppURL(defaultMessage), "_blank")
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {isOpen && (
          <div
            className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-300"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.95)",
            }}
          >
            {/* Header */}
            <div
              className="p-4 text-white relative overflow-hidden"
              style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Devshiping Support</h3>
                    <p className="text-xs opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 max-h-96 overflow-y-auto">
              {/* Welcome Message */}
              <div className="mb-4 p-3 bg-gray-50 rounded-xl">
                <p className="text-sm text-gray-700 mb-2">
                  👋 <strong>Hi there!</strong>
                </p>
                <p className="text-sm text-gray-600">
                  Welcome to Devshiping! How can we help you today? Choose a quick option below or send us a custom
                  message.
                </p>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2 mb-4">
                <p className="text-xs font-medium text-gray-700 uppercase tracking-wide">Quick Messages</p>
                {quickMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickMessage(message)}
                    className="w-full text-left p-3 text-gray-700 text-sm bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors duration-200 border border-transparent hover:border-green-200"
                  >
                    {message}
                  </button>
                ))}
              </div>

              {/* Custom Message Section */}
              <div className="border-t pt-4">
                <p className="text-xs font-medium text-gray-700 uppercase tracking-wide mb-3">Custom Message</p>

                {/* Service Selection */}
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3 text-gray-700 border border-gray-200 rounded-xl mb-3 text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a service (optional)</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>

                {/* Message Input */}
                <textarea
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full p-3 text-gray-700 border border-gray-200 rounded-xl text-sm resize-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  rows={3}
                />

                {/* Send Button */}
                <button
                  onClick={handleCustomMessage}
                  disabled={!customMessage.trim()}
                  className="w-full mt-3 p-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>

              {/* Direct Chat Button */}
              <div className="border-t pt-4 mt-4">
                <button
                  onClick={handleStartChat}
                  className="w-full p-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105"
                >
                  💬 Start Direct Chat
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 cursor-pointer text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative overflow-hidden group"
          style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
            }}
        >
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20" />

          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

          {/* Icon */}
          <div className="relative z-10 transition-transform duration-200">
            {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          </div>

          {/* Notification Badge */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-4 h-4  rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          )}
        </button>

        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45" />
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-in-from-bottom-5 {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .slide-in-from-bottom-5 {
          animation: slide-in-from-bottom-5 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default WhatsAppWidget
