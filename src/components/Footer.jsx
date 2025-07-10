import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { GeistSans } from "next/font/google";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-12 max-sm:max-w-sm max-sm:mx-auto">
          {/* Logo & CTA */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link href="/" className="flex justify-center lg:justify-start">
              <img src="/logo.svg" alt="Logo" className="w-40 h-10 object-contain" />
            </Link>
            <p className="py-6 text-sm text-gray-500 text-center lg:text-left lg:max-w-xs">
              Trusted by 5M+ users in 100+ countries. Have any query?
            </p>
            <Link
              href="/contact"
              className="block w-fit mx-auto lg:mx-0 px-5 py-2.5 text-xs text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all"
            >
              Contact Us
            </Link>

            {/* Social Media Below CTA */}
            <div className="flex justify-center lg:justify-start mt-6 space-x-4">
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:brightness-110 transition-all duration-300"
              >
                <FaInstagram className="text-white text-lg" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-300"
              >
                <FaLinkedinIn className="text-white text-lg" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-300"
              >
                <FaFacebookF className="text-white text-lg" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700 transition-all duration-300"
              >
                <FaYoutube className="text-white text-lg" />
              </Link>
            </div>
          </div>

          {/* Navigation Columns */}
          {[
            { title: 'Pagedone', links: ['Home', 'About', 'Pricing', 'Features'] },
            { title: 'Products', links: ['Figma UI System', 'Icons Assets', 'Responsive Blocks', 'Components Library'] },
            { title: 'Resources', links: ['FAQs', 'Quick Start', 'Documentation', 'User Guide'] },
            { title: 'Blogs', links: ['News', 'Tips & Tricks', 'New Updates', 'Events'] },
          ].map((section, idx) => (
            <div key={idx} className="lg:mx-auto text-left">
              <h4 className="text-lg font-medium text-gray-900 mb-6">{section.title}</h4>
              <ul className="text-sm space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href="#" className="text-gray-600 hover:text-gray-900">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-200">
          <div className="flex flex-col items-center justify-center lg:justify-between lg:flex-row">
            <span className="text-sm text-gray-500 text-center lg:text-left">
              © <Link href="/" className="hover:underline">Devshiping</Link> {new Date().getFullYear()}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
