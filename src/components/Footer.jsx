import Link from "next/link"
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-12 max-sm:max-w-sm max-sm:mx-auto">
          {/* Logo & CTA */}
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link href="/" className="flex justify-center lg:justify-start">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Devshiping
              </span>
            </Link>
            <p className="py-6 text-sm text-gray-500 text-center lg:text-left lg:max-w-xs">
              Building the future, one line of code at a time. Have any query?
            </p>
            <Link
              href="/contact"
              className="block w-fit mx-auto lg:mx-0 px-5 py-2.5 text-xs text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
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
            {
              title: "Company",
              links: [
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",
              links: [
                { name: "Web Development", href: "/services" },
                { name: "Mobile Apps", href: "/services" },
                { name: "E-commerce", href: "/services" },
                { name: "UI/UX Design", href: "/services" },
              ],
            },
            {
              title: "Resources",
              links: [
                { name: "Portfolio", href: "#portfolio" },
                { name: "Blog", href: "#" },
                { name: "Documentation", href: "#" },
                { name: "Support", href: "/contact" },
              ],
            },
            {
              title: "Legal",
              links: [
                { name: "Privacy Policy", href: "#" },
                { name: "Terms of Service", href: "#" },
                { name: "Cookie Policy", href: "#" },
                { name: "Refund Policy", href: "#" },
              ],
            },
          ].map((section, idx) => (
            <div key={idx} className="lg:mx-auto text-left">
              <h4 className="text-lg font-medium text-gray-900 mb-6">{section.title}</h4>
              <ul className="text-sm space-y-4">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-purple-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
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
              ©{" "}
              <Link href="/" className="hover:underline text-purple-600 font-medium">
                Devshiping
              </Link>{" "}
              {new Date().getFullYear()}. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
