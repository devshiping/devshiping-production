"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the features and complexity. A basic website takes 1–2 weeks, while more advanced projects may take 4–6 weeks or more.",
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes! We ensure that all websites are fully responsive and work smoothly across phones, tablets, and desktops.",
  },
  {
    question: "Do you provide custom designs or use templates?",
    answer:
      "We offer both options. Our UI/UX team can craft custom designs, or we can use pre-built templates based on your preference.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We use modern tools like Next.js, React, Tailwind CSS, Node.js, and WordPress depending on your project’s needs.",
  },
  {
    question: "Is SEO included in the package?",
    answer:
      "Yes. We include on-page SEO like metadata, heading structure, alt tags, and speed optimization for better Google visibility.",
  },
  {
    question: "Do you offer support after website launch?",
    answer:
      "Absolutely. We provide monthly maintenance, content updates, bug fixes, and performance monitoring as part of our support plans.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-black">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Answers to common questions about our services and processes.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between"
            >
              <span className="text-lg font-semibold text-gray-600">
                {faq.question}
              </span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } text-gray-400`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-700 text-sm sm:text-base">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-10 text-gray-600 text-base">
        Still have questions?{" "}
        <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
          Contact our team
        </span>
      </div>
    </section>
  );
};

export default FaqSection;
