"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, Send, CheckCircle, AlertCircle, User, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { top: 15, left: 10 },
    { top: 30, left: 85 },
    { top: 50, left: 15 },
    { top: 70, left: 90 },
    { top: 25, left: 60 },
    { top: 80, left: 25 },
    { top: 40, left: 75 },
    { top: 60, left: 40 },
  ]

  useEffect(() => {
    setIsClient(true)

    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: "", message: "" })

    // Create form data object for FormSpark
    const formPayload = {
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    }

    const formSpark = "https://submit-form.com/eAy8LHnDB"

    try {
      const response = await fetch(formSpark, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      })

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        })
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: ["devshiping@gmail.com", "support.devshiping@gmail.com"],
      description: "Send us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: ["+91 9643570809", "+91 6299697165"],
      description: "Call us at any time",
    },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Optimization",
    "Consulting",
    "Other",
  ]

  return (
    <div
      className="min-h-screen relative overflow-x-hidden pt-20"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e2e8f0 50%, #f1f5f9 75%, #ffffff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Advanced Parallax Background Elements */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div
            className="absolute w-48 h-48 opacity-8 transition-transform duration-100"
            style={{
              top: "15%",
              left: "8%",
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px) rotate(${scrollY * 0.08}deg)`,
              background: "linear-gradient(60deg, #8b5cf6, #06b6d4)",
              borderRadius: "40% 60% 60% 40% / 60% 40% 40% 60%",
              animation: "float 7s ease-in-out infinite",
            }}
          />

          <div
            className="absolute w-32 h-32 opacity-12 transition-transform duration-100"
            style={{
              top: "70%",
              right: "12%",
              transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px) rotate(${-scrollY * 0.12}deg)`,
              background: "linear-gradient(120deg, #f59e0b, #ef4444)",
              borderRadius: "50%",
              animation: "float 5s ease-in-out infinite reverse",
            }}
          />

          <div
            className="absolute w-24 h-24 opacity-15 transition-transform duration-100"
            style={{
              top: "40%",
              right: "25%",
              transform: `translate(${mousePosition.x * 0.008}px, ${scrollY * 0.25}px) scale(${1 + scrollY * 0.0003})`,
              background: "linear-gradient(180deg, #10b981, #3b82f6)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "pulse 6s ease-in-out infinite",
            }}
          />

          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-3 transition-transform duration-100"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
              transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.04}px)`,
            }}
          />

          {/* Floating Particles */}
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-40 transition-transform duration-100"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: `translateY(${scrollY * (0.08 + i * 0.015)}px)`,
                animation: `float ${4 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}

          {/* Large Background Shapes */}
          <div
            className="absolute w-80 h-80 opacity-4 transition-transform duration-200"
            style={{
              top: "25%",
              left: "-8%",
              transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * 0.03}deg)`,
              background: "conic-gradient(from 45deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #8b5cf6)",
              borderRadius: "50%",
              filter: "blur(35px)",
            }}
          />

          <div
            className="absolute w-64 h-64 opacity-6 transition-transform duration-200"
            style={{
              bottom: "15%",
              right: "-5%",
              transform: `translateY(${-scrollY * 0.12}px) rotate(${-scrollY * 0.06}deg)`,
              background: "radial-gradient(circle, #ec4899, #8b5cf6, #06b6d4)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              filter: "blur(25px)",
            }}
          />
        </div>
      )}

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="mb-6 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
            }}
          >
            Get In Touch
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-gray-800">Let's Build Something </span>
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% 200%",
                animation: isClient ? "gradientShift 3s ease infinite" : "none",
              }}
            >
              Amazing Together
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? We'd love to hear about your project and discuss how we can help
            bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-8 text-center rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY(${scrollY * 0.015 * (index + 1)}px)` : "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(139, 92, 246, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="mb-6 text-purple-600 group-hover:text-blue-600 transition-colors duration-300 flex justify-center relative z-10">
                  {info.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10">{info.title}</h3>

                <div className="space-y-2 mb-4 relative z-10">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 font-medium text-lg">
                      {detail}
                    </p>
                  ))}
                </div>

                <p className="text-gray-500 relative z-10">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 sm:p-12 border relative overflow-hidden"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(0, 0, 0, 0.1)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-blue-500/3" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              {/* Form Status Messages */}
              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
                    formStatus.type === "success"
                      ? "bg-green-50 border border-green-200 text-green-800"
                      : "bg-red-50 border border-red-200 text-red-800"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{formStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(10px)",
                        }}
                        placeholder="Your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(10px)",
                        }}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(10px)",
                      }}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.9)",
                          backdropFilter: "blur(10px)",
                        }}
                        placeholder="+91 12345 67890"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="relative">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 text-gray-700 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        backdropFilter: "blur(10px)",
                      }}
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 text-lg text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 mx-auto relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: isSubmitting
                        ? "linear-gradient(135deg, #9ca3af, #6b7280)"
                        : "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                    }}
                  >
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    )}

                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  )
}
