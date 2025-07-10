"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Users,
  Award,
  Target,
  Heart,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { top: 12, left: 8 },
    { top: 28, left: 88 },
    { top: 45, left: 12 },
    { top: 65, left: 85 },
    { top: 22, left: 65 },
    { top: 78, left: 20 },
    { top: 38, left: 78 },
    { top: 58, left: 35 },
    { top: 15, left: 45 },
    { top: 72, left: 60 },
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

  const teamMembers = [
    {
      name: "Ankit Choubey",
      role: "Lead Developer",
      image: "/team/ankitchoubey.webp",
      bio: "Full-stack developer with 8+ years of experience in building scalable web applications. Passionate about clean code and innovative solutions.",
      skills: ["MERN", "PHP", "Python", "AWS"],
      social: {
        github: "https://github.com/ankitchoubeyy",
        linkedin: "https://linkedin.com/ankitchoubeyy",
        twitter: "https://x.com/AankitChoubey",
      },
    },
    {
      name: "Kanak Sharma",
      role: "UI/UX Designer",
      image: "/team/kanaksharma.webp",
      bio: "Creative designer with a keen eye for user experience. Specializes in creating beautiful, intuitive interfaces that users love.",
      skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      social: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
      },
    },
    {
      name: "Arvind Kumar",
      role: "Lead Developer",
      image: "/team/arvindkumar.webp",
      bio: "Mobile app specialist with expertise in both iOS and Android development. Loves creating smooth, performant mobile experiences.",
      skills: ["React Native", "Swift", "Kotlin", "Flutter"],
      social: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
      },
    },
  ]

  const stats = [
    {
      number: "150+",
      label: "Projects Completed",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: "50+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "4+",
      label: "Years Experience",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <TrendingUp className="w-8 h-8" />,
    },
  ]

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Innovation First",
      description:
        "We stay ahead of the curve by embracing cutting-edge technologies and creative solutions that drive real results.",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Client-Centered",
      description:
        "Your success is our success. We build lasting partnerships by truly understanding and exceeding your expectations.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Quality & Speed",
      description:
        "We deliver exceptional quality without compromising on deadlines. Fast turnaround times with premium results.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Impact",
      description:
        "From local startups to international enterprises, we create digital solutions that make a difference worldwide.",
    },
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fresh Perspective",
      description: "We bring innovative ideas and modern approaches to every project",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personal Attention",
      description: "As a growing team, every client gets our full focus and dedication",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Latest Technologies",
      description: "We use cutting-edge tools and frameworks for optimal results",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Competitive Pricing",
      description: "High-quality solutions at startup-friendly prices",
    },
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
            className="absolute w-56 h-56 opacity-6 transition-transform duration-100"
            style={{
              top: "12%",
              left: "5%",
              transform: `translate(${mousePosition.x * 0.012}px, ${mousePosition.y * 0.012}px) rotate(${scrollY * 0.06}deg)`,
              background: "linear-gradient(45deg, #8b5cf6, #06b6d4)",
              borderRadius: "35% 65% 65% 35% / 35% 35% 65% 65%",
              animation: "float 8s ease-in-out infinite",
            }}
          />

          <div
            className="absolute w-40 h-40 opacity-8 transition-transform duration-100"
            style={{
              top: "65%",
              right: "8%",
              transform: `translate(${-mousePosition.x * 0.018}px, ${-mousePosition.y * 0.018}px) rotate(${-scrollY * 0.09}deg)`,
              background: "linear-gradient(135deg, #f59e0b, #ef4444)",
              borderRadius: "50%",
              animation: "float 6s ease-in-out infinite reverse",
            }}
          />

          <div
            className="absolute w-28 h-28 opacity-12 transition-transform duration-100"
            style={{
              top: "35%",
              right: "20%",
              transform: `translate(${mousePosition.x * 0.006}px, ${scrollY * 0.2}px) scale(${1 + scrollY * 0.0002})`,
              background: "linear-gradient(225deg, #10b981, #3b82f6)",
              borderRadius: "40% 60% 60% 40% / 60% 40% 40% 60%",
              animation: "pulse 5s ease-in-out infinite",
            }}
          />

          {/* Animated Grid Pattern */}
          <div
            className="absolute inset-0 opacity-4 transition-transform duration-100"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              transform: `translate(${scrollY * 0.06}px, ${scrollY * 0.03}px)`,
            }}
          />

          {/* Floating Particles */}
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-35 transition-transform duration-100"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
                transform: `translateY(${scrollY * (0.06 + i * 0.01)}px)`,
                animation: `float ${5 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}

          {/* Large Background Shapes */}
          <div
            className="absolute w-96 h-96 opacity-3 transition-transform duration-200"
            style={{
              top: "20%",
              left: "-12%",
              transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.02}deg)`,
              background: "conic-gradient(from 30deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #8b5cf6)",
              borderRadius: "50%",
              filter: "blur(40px)",
            }}
          />

          <div
            className="absolute w-72 h-72 opacity-5 transition-transform duration-200"
            style={{
              bottom: "10%",
              right: "-8%",
              transform: `translateY(${-scrollY * 0.1}px) rotate(${-scrollY * 0.04}deg)`,
              background: "radial-gradient(circle, #ec4899, #8b5cf6, #06b6d4)",
              borderRadius: "50% 40% 30% 70% / 60% 30% 70% 40%",
              filter: "blur(30px)",
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
            About Devshiping
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-gray-800">We're </span>
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
              Digital Craftsmen
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate developers and designers dedicated to creating exceptional digital experiences that drive
            business growth and user satisfaction.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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

                <div className="mb-4 text-purple-600 group-hover:text-blue-600 transition-colors duration-300 flex justify-center relative z-10">
                  {stat.icon}
                </div>

                <div className="text-3xl font-bold text-gray-800 mb-2 relative z-10">{stat.number}</div>
                <div className="text-gray-600 relative z-10">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
                style={{
                  background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                  boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                }}
              >
                Our Story
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Ready to Make Our Mark</h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Devshiping was founded with a clear mission: to make exceptional digital experiences accessible to
                  businesses of all sizes. As a fresh team of passionate developers and designers, we're excited to
                  bring innovation and creativity to every project.
                </p>
                <p>
                  While we may be new to the scene, our team brings years of individual experience from working with
                  various companies and projects. We've combined our expertise to create a focused, agile agency that
                  prioritizes quality and client satisfaction above all else.
                </p>
                <p>
                  Our approach is simple: listen carefully, design thoughtfully, and deliver exceptionally. We believe
                  that being a newer company gives us the advantage of being more flexible, responsive, and eager to
                  prove ourselves with every project.
                </p>
              </div>
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

              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Why Choose Devshiping?</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="mb-4 text-purple-600 flex justify-center">{item.icon}</div>
                      <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
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
                  {value.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4 relative z-10">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              Our Team
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Meet the Creators</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind every successful project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-105 group relative"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY(${scrollY * 0.005 * (index + 1)}px)` : "translateY(0)",
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

                {/* Profile Image */}
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Member Info */}
                <div className="p-6 relative z-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs rounded-full border"
                        style={{
                          backgroundColor: "rgba(139, 92, 246, 0.1)",
                          color: "#8b5cf6",
                          borderColor: "rgba(139, 92, 246, 0.2)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-purple-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className="rounded-3xl p-8 sm:p-12 border relative overflow-hidden"
            style={{
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderColor: "rgba(0, 0, 0, 0.1)",
              boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Ready to Work Together?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and see how we can help bring your digital vision to life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="px-8 py-4 text-lg text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Start Your Project
                </button>

                <button
                  className="px-8 py-4 text-lg text-gray-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 border-2 hover:shadow-xl relative overflow-hidden group"
                  style={{
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  View Our Work
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
          50% { transform: translateY(-20px) rotate(180deg); }
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
