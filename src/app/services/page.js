"use client"

import { useState, useEffect } from "react"
import { IndianRupee } from 'lucide-react';
import {
  Smartphone,
  Globe,
  CheckCircle,
  X,
  ArrowRight,
  ShoppingCart,
  Search,
  Palette,
  Shield,
  Star,
} from "lucide-react"

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState("advanced")

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { top: 10, left: 12 },
    { top: 25, left: 85 },
    { top: 40, left: 15 },
    { top: 60, left: 88 },
    { top: 20, left: 60 },
    { top: 75, left: 25 },
    { top: 35, left: 75 },
    { top: 55, left: 40 },
    { top: 18, left: 45 },
    { top: 70, left: 65 },
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
      icon: <Globe className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android using React Native and Flutter",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment integration, inventory management, and admin panels",
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Admin Dashboard"],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces and experiences that convert visitors into customers",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO & Digital Marketing",
      description: "Improve your online visibility and drive more traffic with our SEO and digital marketing services",
      features: ["Keyword Research", "On-Page SEO", "Content Strategy", "Analytics Setup"],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your digital assets running smoothly",
      features: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Performance Optimization"],
    },
  ]

  const pricingPlans = [
    {
      id: "basic",
      name: "Basic",
      price: "2,999",
      duration: "Starting from",
      description: "Perfect for small businesses and startups looking to establish their online presence",
      popular: false,
      features: [
        "5-page responsive website",
        "Mobile-friendly design",
        "Basic SEO optimization",
        "Contact form integration",
        "Social media links",
        "1 month free support",
        "Basic analytics setup",
        "SSL certificate included",
      ],
      notIncluded: ["E-commerce functionality", "Advanced animations", "Custom CMS", "API integrations"],
    },
    {
      id: "advanced",
      name: "Advanced",
      price: "5,999",
      duration: "Starting from",
      description: "Ideal for growing businesses that need more features and functionality",
      popular: true,
      features: [
        "10-page responsive website",
        "Custom UI/UX design",
        "Advanced SEO optimization",
        "Content Management System",
        "Blog functionality",
        "Contact forms & integrations",
        "Social media integration",
        "3 months free support",
        "Advanced analytics",
        "Performance optimization",
        "Basic e-commerce (up to 50 products)",
        "Email marketing integration",
      ],
      notIncluded: ["Advanced e-commerce features", "Custom API development"],
    },
    {
      id: "pro",
      name: "Professional",
      price: "9,999",
      duration: "Starting from",
      description: "Complete solution for enterprises and businesses requiring advanced functionality",
      popular: false,
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced UI/UX design",
        "Full e-commerce solution",
        "Custom CMS development",
        "API development & integration",
        "Advanced animations",
        "Multi-language support",
        "6 months free support",
        "Advanced analytics & reporting",
        "Performance optimization",
        "Security implementation",
        "Third-party integrations",
        "Custom admin dashboard",
        "Database design & optimization",
        "Cloud deployment & hosting setup",
      ],
      notIncluded: [],
    },
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes, mockups, and interactive prototypes to visualize your project",
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Build your solution using modern technologies with rigorous testing throughout",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your project and provide ongoing support to ensure everything runs smoothly",
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
            className="absolute w-64 h-64 opacity-8 transition-transform duration-100"
            style={{
              top: "15%",
              left: "8%",
              transform: `translate({mousePosition.x * 0.01}px, {mousePosition.y * 0.01}px) rotate({scrollY * 0.05}deg)`,
              background: "linear-gradient(60deg, #8b5cf6, #06b6d4)",
              borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              animation: "float 9s ease-in-out infinite",
            }}
          />

          <div
            className="absolute w-48 h-48 opacity-10 transition-transform duration-100"
            style={{
              top: "60%",
              right: "10%",
              transform: `translate({-mousePosition.x * 0.015}px, {-mousePosition.y * 0.015}px) rotate({-scrollY * 0.08}deg)`,
              background: "linear-gradient(120deg, #f59e0b, #ef4444)",
              borderRadius: "50%",
              animation: "float 7s ease-in-out infinite reverse",
            }}
          />

          <div
            className="absolute w-32 h-32 opacity-12 transition-transform duration-100"
            style={{
              top: "30%",
              right: "25%",
              transform: `translate({mousePosition.x * 0.005}px, {scrollY * 0.18}px) scale({1 + scrollY * 0.0001})`,
              background: "linear-gradient(180deg, #10b981, #3b82f6)",
              borderRadius: "40% 60% 60% 40% / 60% 40% 40% 60%",
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
              backgroundSize: "100px 100px",
              transform: `translate({scrollY * 0.05}px, {scrollY * 0.025}px)`,
            }}
          />

          {/* Floating Particles */}
          {particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-30 transition-transform duration-100"
              style={{
                top: `{position.top}%`,
                left: `{position.left}%`,
                transform: `translateY({scrollY * (0.05 + i * 0.008)}px)`,
                animation: `float {6 + i * 0.2}s ease-in-out infinite`,
                animationDelay: `{i * 0.5}s`,
              }}
            />
          ))}

          {/* Large Background Shapes */}
          <div
            className="absolute w-[500px] h-[500px] opacity-2 transition-transform duration-200"
            style={{
              top: "10%",
              left: "-15%",
              transform: `translateY({scrollY * 0.08}px) rotate({scrollY * 0.015}deg)`,
              background: "conic-gradient(from 60deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #8b5cf6)",
              borderRadius: "50%",
              filter: "blur(50px)",
            }}
          />

          <div
            className="absolute w-96 h-96 opacity-4 transition-transform duration-200"
            style={{
              bottom: "5%",
              right: "-10%",
              transform: `translateY({-scrollY * 0.06}px) rotate({-scrollY * 0.02}deg)`,
              background: "radial-gradient(circle, #ec4899, #8b5cf6, #06b6d4)",
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              filter: "blur(40px)",
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
            Our Services
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            <span className="text-gray-800">Digital Solutions </span>
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
              That Drive Results
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            From stunning websites to powerful mobile apps, we create digital experiences that help your business grow
            and succeed in the modern world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  transform: isClient ? `translateY({scrollY * 0.005 * (index + 1)}px)` : "translateY(0)",
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
                <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{service.description}</p>

                <div className="space-y-2 relative z-10">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-6 text-purple-600 hover:text-blue-600 transition-colors flex items-center gap-2 font-medium relative z-10">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="mb-4 inline-block px-4 py-2 rounded-full text-white text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
              }}
            >
              Development Packages
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Choose Your Perfect Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for web development projects. All packages include modern design, responsive layout,
              and professional development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border transition-all duration-500 hover:scale-105 group overflow-hidden {
                  plan.popular ? "ring-2 ring-purple-500" : ""
                }`}
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: plan.popular ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
                  borderColor: plan.popular ? "rgba(139, 92, 246, 0.3)" : "rgba(0, 0, 0, 0.1)",
                  boxShadow: plan.popular ? "0 25px 50px rgba(139, 92, 246, 0.2)" : "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY({scrollY * 0.003 * (index + 1)}px)` : "translateY(0)",
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-white text-sm font-medium"
                    style={{
                      background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      boxShadow: "0 4px 15px rgba(139, 92, 246, 0.4)",
                    }}
                  >
                    <Star className="w-4 h-4 inline mr-1" />
                    Most Popular
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="p-8 relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-800 flex items-center"><IndianRupee />{plan.price}</span>
                      <span className="text-gray-500 ml-2">{plan.duration}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      What's Included:
                    </h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded.length > 0 && (
                      <>
                        <h4 className="font-semibold text-gray-800 flex items-center gap-2 mt-6">
                          <X className="w-5 h-5 text-red-400" />
                          Not Included:
                        </h4>
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-500 text-sm">{feature}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group {
                      plan.popular ? "text-white" : "text-gray-700 border-2"
                    }`}
                    style={
                      plan.popular
                        ? {
                            background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                            boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                          }
                        : {
                            borderColor: "rgba(139, 92, 246, 0.3)",
                            backgroundColor: "rgba(255, 255, 255, 0.8)",
                          }
                    }
                  >
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    )}
                    {!plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    )}
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Need something custom? We also offer tailored solutions for unique requirements.
            </p>
            <button
              className="px-6 py-3 text-purple-600 hover:text-blue-600 transition-colors font-medium border-2 rounded-xl hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: "rgba(139, 92, 246, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Request Custom Quote
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven development process ensures your project is delivered on time, within budget, and exceeds your
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border transition-all duration-500 hover:scale-105 group relative overflow-hidden"
                style={{
                  backdropFilter: "blur(20px)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                  transform: isClient ? `translateY({scrollY * 0.002 * (index + 1)}px)` : "translateY(0)",
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

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 relative z-10"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    boxShadow: "0 8px 20px rgba(139, 92, 246, 0.3)",
                  }}
                >
                  {step.step}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-3 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{step.description}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Ready to Start Your Project?</h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and find the perfect solution for your business needs.
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
                  Get Free Consultation
                </button>

                <button
                  className="px-8 py-4 text-lg text-gray-700 rounded-xl font-medium transition-all duration-300 hover:scale-105 border-2 hover:shadow-xl relative overflow-hidden group"
                  style={{
                    borderColor: "rgba(139, 92, 246, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  View Portfolio
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
          50% { transform: translateY(-25px) rotate(180deg); }
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
