"use client"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaHeadset, FaSearch } from "react-icons/fa"
import Link from "next/link"

const steps = [
  {
    title: "Discovery & Strategy",
    description: "We understand your business goals, target audience, and project requirements to create a tailored development strategy.",
    icon: FaLightbulb,
    color: "text-purple-600",
  },
  {
    title: "Design & Prototyping",
    description: "We create stunning UI/UX designs and interactive prototypes that align with your brand and convert visitors into customers.",
    icon: FaPencilRuler,
    color: "text-blue-600",
  },
  {
    title: "Development & Testing",
    description: "We build your solution using modern technologies like React, Next.js, and Node.js with rigorous testing throughout the process.",
    icon: FaCode,
    color: "text-green-600",
  },
  {
    title: "SEO & Optimization",
    description: "We optimize your website for search engines, improve page speed, and ensure maximum performance across all devices.",
    icon: FaSearch,
    color: "text-orange-600",
  },
  {
    title: "Launch & Deployment",
    description: "We deploy your project on secure hosting platforms and ensure everything works perfectly before going live.",
    icon: FaRocket,
    color: "text-red-600",
  },
  {
    title: "Support & Maintenance",
    description: "We provide ongoing support, regular updates, security patches, and maintenance to keep your project running smoothly.",
    icon: FaHeadset,
    color: "text-indigo-600",
  },
]

const DevelopmentProcess = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      className="w-full py-24 px-4 md:px-16 font-sans relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e2e8f0 50%, #f1f5f9 75%, #ffffff 100%)",
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 opacity-5 rounded-full" style={{ top: "10%", left: "5%", background: "linear-gradient(45deg, #8b5cf6, #06b6d4)", filter: "blur(40px)" }} />
        <div className="absolute w-48 h-48 opacity-8 rounded-full" style={{ bottom: "20%", right: "10%", background: "linear-gradient(135deg, #f59e0b, #ef4444)", filter: "blur(30px)" }} />
      </div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <div className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium" style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)", boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)" }}>
          Our Process
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
          How We{" "}
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Transform Ideas
          </span>{" "}
          Into Reality
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our proven 6-step development process ensures your project is delivered on time, within budget, and exceeds expectations
        </p>
      </div>

      {/* Decorative Path */}
      <svg className="absolute top-1/2 left-0 z-0 opacity-20" width="100%" height="100" viewBox="0 0 1000 80" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
        </defs>
        <path d="M0,40 C250,80 750,0 1000,40" stroke="url(#pathGradient)" strokeWidth="3" fill="none" />
      </svg>

      {/* Cards Swiper */}
      {mounted && (
        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          speed={8000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          className="!overflow-visible relative z-10"
          breakpoints={{
            320: { spaceBetween: 20 },
            768: { spaceBetween: 30 },
            1024: { spaceBetween: 40 },
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <SwiperSlide key={index} style={{ width: "320px" }} className="flex-shrink-0">
                <div className="relative flex flex-col items-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold z-30" style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)", boxShadow: "0 4px 10px rgba(139, 92, 246, 0.3)" }}>
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className="bg-white rounded-2xl border shadow-xl p-6 h-[320px] flex flex-col justify-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden group" style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(255, 255, 255, 0.9)", borderColor: "rgba(0, 0, 0, 0.1)" }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Icon */}
                    <div className="mb-6 relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`${step.color} text-4xl mx-auto mb-2`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 relative z-10 group-hover:text-purple-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>

                    {/* Decorative */}
                    <div className="absolute top-2 right-2 w-16 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50" />
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      )}

      {/* Bottom CTA */}
      <div className="text-center mt-16 relative z-10">
        <p className="text-gray-600 mb-6">Ready to start your project with our proven process?</p>
        <Link
          href="/contact"
          className="px-8 py-4 text-lg text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          Get Started Today
        </Link>
      </div>
    </section>
  )
}

export default DevelopmentProcess
