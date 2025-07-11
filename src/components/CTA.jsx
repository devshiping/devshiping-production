import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
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
                <Link
                  href="/contact"
                  className="px-8 py-4 text-lg text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-3 justify-center relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                    boxShadow: "0 10px 25px rgba(139, 92, 246, 0.4)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/portfolio" className="px-8 py-4 text-lg text-gray-800 rounded-xl font-medium border border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-white">
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default CTA