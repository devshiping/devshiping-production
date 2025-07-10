"use client"

import { useState, useEffect } from "react"
import {
  Code,
  Smartphone,
  ShoppingCart,
  Palette,
  TrendingUp,
  Search,
  Star,
  ExternalLink,
  Github,
  ArrowRight,
} from "lucide-react"

export default function PortfolioPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

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

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces that enhance user experience",
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategic marketing campaigns to grow your online presence",
      technologies: ["Google Ads", "Facebook Ads", "Analytics", "CRM"],
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and organic traffic",
      technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Moz"],
    },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced filtering, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydHxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions.",
      image: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for SaaS companies with real-time data visualization and reporting.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhcGh8ZW58MHx8MHx8fDA%3D",
      technologies: ["React", "D3.js", "Express", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Food Delivery App",
      category: "Mobile Development",
      description: "Complete food delivery solution with real-time tracking and payment integration.",
      image: "https://images.unsplash.com/photo-1601972602288-3be527b4f18a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional corporate website with CMS integration and SEO optimization.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["WordPress", "PHP", "MySQL", "SCSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      category: "Web Development",
      description: "Educational platform with course management, video streaming, and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxlYXJufGVufDB8fDB8fHww",
      technologies: ["Vue.js", "Laravel", "AWS", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const testimonials = [
    {
      name: "Sandeep Upadhyay",
      company: "TechStart Inc.",
      role: "CEO",
      content:
        "Outstanding work! They delivered our project on time and exceeded our expectations. The team's expertise in modern web technologies is impressive.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      role: "CTO",
      content:
        "Professional, reliable, and innovative. They transformed our outdated system into a modern, scalable solution. Highly recommended!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Emily Rodriguez",
      company: "E-Commerce Plus",
      role: "Founder",
      content:
        "The mobile app they developed for us has significantly increased our customer engagement. Great communication throughout the project.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww",
    },
  ]

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "12+", label: "Happy Clients" },
    { number: "2+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
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
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="mb-6 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              Digital Agency Portfolio
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-gray-800">We Create </span>
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
                Digital Excellence
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              We're a passionate team of developers, designers, and digital strategists dedicated to transforming your
              ideas into powerful digital solutions that drive growth and success.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY(${scrollY * 0.01 * (index + 1)}px)` : "translateY(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="text-3xl font-bold text-gray-800 mb-2 relative z-10">{stat.number}</div>
                <div className="text-gray-600 relative z-10">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY(${scrollY * 0.008 * (index + 1)}px)` : "translateY(0)",
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
                <div className="mb-6 text-purple-600 group-hover:text-blue-600 transition-colors duration-300 relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{service.description}</p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: "rgba(139, 92, 246, 0.1)",
                        color: "#8b5cf6",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a look at some of our recent work and see how we've helped businesses achieve their digital goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY(${scrollY * 0.006 * (index + 1)}px)` : "translateY(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="aspect-video bg-gray-200 rounded-t-2xl overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-purple-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium rounded-full"
                          style={{
                            backgroundColor: "rgba(139, 92, 246, 0.1)",
                            color: "#8b5cf6",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-purple-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-purple-600 hover:text-blue-600 transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">Source Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from some of our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY(${scrollY * 0.005 * (index + 1)}px)` : "translateY(0)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-12 text-center border relative overflow-hidden"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(0, 0, 0, 0.1)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/3 to-blue-500/3" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and create something amazing together. Get in touch with us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 text-lg text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 text-lg text-gray-800 rounded-xl font-medium border border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white">
                  View More Projects
                </button>
              </div>
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
