"use client";

import { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award,
  ArrowRight,
  
} from "lucide-react";
import Link from "next/link";
import DesignProcess from "@/components/DesignProcess";
import ServicesSlider from "@/components/ServicesSlider";
import FaqSection from "@/components/faqSection";
import DevelopmentProcess from "@/components/DevelopmentProcess";

export default function HomePage() {
  
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { top: 10, left: 15 },
    { top: 25, left: 80 },
    { top: 45, left: 20 },
    { top: 60, left: 90 },
    { top: 75, left: 35 },
    { top: 30, left: 60 },
    { top: 85, left: 10 },
    { top: 15, left: 70 },
    { top: 55, left: 45 },
    { top: 40, left: 85 },
    { top: 70, left: 25 },
    { top: 20, left: 50 },
  ];

  useEffect(() => {
    // Set isClient to true after component mounts
    setIsClient(true);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "E-commerce",
      description: "Scalable online stores with secure payment integrations",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Speed up your website and improve user experience",
    },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1664455340023-214c33a9d0bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FydHxlbnwwfHwwfHx8MA%3D%3D",
      description: "Modern e-commerce solution with advanced features",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1601972602237-8c79241e468b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww",
      description: "Secure and user-friendly banking application",
    },
    {
      title: "SaaS Dashboard",
      category: "Web Application",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhcGh8ZW58MHx8MHx8fDA%3D",
      description: "Analytics dashboard for business intelligence",
    },
  ];

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 25%, #e2e8f0 50%, #f1f5f9 75%, #ffffff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Advanced Parallax Background Elements - Only render after client mount */}
      {isClient && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          {/* Floating Geometric Shapes */}
          <div
            className="absolute w-64 h-64 opacity-10 transition-transform duration-100"
            style={{
              top: "10%",
              left: "5%",
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px) rotate(${scrollY * 0.1}deg)`,
              background: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "float 6s ease-in-out infinite",
            }}
          />

          <div
            className="absolute w-48 h-48 opacity-15 transition-transform duration-100"
            style={{
              top: "60%",
              right: "10%",
              transform: `translate(${-mousePosition.x * 0.03}px, ${
                -mousePosition.y * 0.03
              }px) rotate(${-scrollY * 0.15}deg)`,
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />

          <div
            className="absolute w-32 h-32 opacity-20 transition-transform duration-100"
            style={{
              top: "30%",
              right: "20%",
              transform: `translate(${mousePosition.x * 0.01}px, ${
                scrollY * 0.3
              }px) scale(${1 + scrollY * 0.0005})`,
              background: "linear-gradient(225deg, #10b981, #3b82f6)",
              borderRadius: "50%",
              animation: "pulse 4s ease-in-out infinite",
            }}
          />

          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5 transition-transform duration-100"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            }}
          />

          {/* Floating Particles with fixed positions */}
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30 transition-transform duration-100"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: `translateY(${scrollY * (0.1 + i * 0.02)}px)`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}

          {/* Large Background Shapes */}
          <div
            className="absolute w-96 h-96 opacity-5 transition-transform duration-200"
            style={{
              top: "20%",
              left: "-10%",
              transform: `translateY(${scrollY * 0.2}px) rotate(${
                scrollY * 0.05
              }deg)`,
              background:
                "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #8b5cf6)",
              borderRadius: "50%",
              filter: "blur(40px)",
            }}
          />

          <div
            className="absolute w-80 h-80 opacity-8 transition-transform duration-200"
            style={{
              bottom: "10%",
              right: "-5%",
              transform: `translateY(${-scrollY * 0.15}px) rotate(${
                -scrollY * 0.08
              }deg)`,
              background: "radial-gradient(circle, #ec4899, #8b5cf6, #06b6d4)",
              borderRadius: "40% 60% 60% 40% / 60% 40% 40% 60%",
              filter: "blur(30px)",
            }}
          />
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Glass Card */}
          <div
            className="rounded-3xl p-8 sm:p-12 border shadow-2xl relative"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              borderColor: "rgba(0, 0, 0, 0.1)",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            }}
          >
            {/* Animated Border - Only show after client mount */}
            {isClient && (
              <div
                className="absolute inset-0 rounded-3xl opacity-50"
                style={{
                  background: `conic-gradient(from ${
                    scrollY * 0.5
                  }deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #8b5cf6)`,
                  padding: "2px",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "xor",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                }}
              />
            )}

            <div
              className="mb-6 inline-block px-4 py-2 rounded-full text-white text-sm font-medium relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              {/* Shimmer effect - Only show after client mount */}
              {isClient && (
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)",
                    transform: `translateX(${scrollY * 0.1}px)`,
                  }}
                />
              )}
              🚀 Premium Web Development
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-800">We Build </span>
              <span
                className="relative inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #8b5cf6, #06b6d4, #10b981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% 200%",
                  animation: isClient
                    ? "gradientShift 3s ease infinite"
                    : "none",
                }}
              >
                Digital Dreams
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into powerful digital experiences with our
              cutting-edge web development solutions
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact"
                className="px-8 py-4 text-lg text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 relative overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio"
                className="px-8 py-4 text-lg text-gray-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 border-2 hover:shadow-xl relative overflow-hidden group"
                style={{
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                View Our Work
              </Link>
            </div>
          </div>

          {/* Animated Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{
              animation: "bounce 2s infinite",
            }}
          >
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div
                className="w-1 h-3 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mt-2"
                style={{
                  animation: "scroll 2s infinite",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <ServicesSlider/>
      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in creating exceptional digital experiences that
              drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 text-center rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient
                    ? `translateY(${scrollY * 0.02 * (index + 1)}px)`
                    : "translateY(0)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.95)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(139, 92, 246, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 25px rgba(0, 0, 0, 0.1)";
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-4 text-purple-600 group-hover:text-blue-600 transition-colors duration-300 flex justify-center relative z-10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              Our Work
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our recent work and success stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-105 group relative"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient
                    ? `translateY(${scrollY * 0.01 * (index + 1)}px)`
                    : "translateY(0)",
                }}
              >
                <div
                  className="aspect-video flex items-center justify-center relative overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))",
                  }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div
                    className="mb-3 inline-block px-3 py-1 rounded-full text-sm border"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                      color: "#8b5cf6",
                      borderColor: "rgba(139, 92, 246, 0.2)",
                    }}
                  >
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button className="text-purple-600 hover:text-blue-600 transition-colors flex items-center gap-2 font-medium">
                    View Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                }}
              >
                About Us
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                Crafting Digital Excellence Since 2020
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a passionate team of developers, designers, and digital
                strategists committed to delivering exceptional web solutions
                that drive business growth.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>

              <button
                className="px-6 py-3 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                }}
              >
                Learn More About Us
              </button>
            </div>

            <div
              className="rounded-3xl p-8 border relative overflow-hidden"
              style={{
                backdropFilter: "blur(20px)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderColor: "rgba(0, 0, 0, 0.1)",
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="text-center p-4">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Expert Team
                  </h3>
                  <p className="text-gray-600 text-sm">Skilled professionals</p>
                </div>
                <div className="text-center p-4">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Quality First
                  </h3>
                  <p className="text-gray-600 text-sm">Premium solutions</p>
                </div>
                <div className="text-center p-4">
                  <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-600 text-sm">On-time projects</p>
                </div>
                <div className="text-center p-4">
                  <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Global Reach
                  </h3>
                  <p className="text-gray-600 text-sm">Worldwide clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DevelopmentProcess/>

      <section id="contact" className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
              boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
            }}
          >
            Get In Touch
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your digital vision to life
          </p>

          <div
            className="rounded-3xl p-8 border max-w-2xl mx-auto relative overflow-hidden"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(0, 0, 0, 0.1)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link href="/contact"
                className="px-8 py-3 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                }}
              >
                Start a Project
              </Link>
              <Link href="/contact"
                className="px-8 py-3 text-gray-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 border-2 hover:shadow-xl"
                style={{
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                }}
              >
                Schedule a Call
              </Link>
            </div>

            <div
              className="mt-8 pt-8 border-t relative z-10"
              style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
            >
              <p className="text-gray-500 mb-4">Or reach us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-gray-700">
                <span>devshiping@gmail.com</span>
                <span className="hidden sm:inline">•</span>
                <span>+91 9643570809</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <FaqSection/>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
