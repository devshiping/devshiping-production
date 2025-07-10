"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import { CgWebsite } from "react-icons/cg";
import { FaDatabase,FaPencilRuler, FaCode, FaChartLine, FaRocket } from "react-icons/fa";

const steps = [
  {
    title: "Website Strategy & Planning",
    description:
      "We analyze your business goals and define a clear structure, functionality, and purpose for your website to align with your brand's mission.",
    icon: <CgWebsite className="text-indigo-600 text-4xl mx-auto mb-2" />,
  },
  {
    title: "UI/UX Design That Converts",
    description:
      "We create stunning, responsive, and user-friendly designs that improve usability, increase engagement, and elevate your brand identity.",
    icon: <FaPencilRuler className="text-indigo-600 text-4xl mx-auto mb-2" />,
  },
  {
    title: "Frontend Development with React/Next.js",
    description:
      "We code pixel-perfect, blazing fast interfaces using the latest technologies like React, Next.js, and Tailwind CSS for a smooth user experience.",
    icon: <FaCode className="text-indigo-600 text-4xl mx-auto mb-2" />,
  },
  {
    title: "Backend Development & Admin Dashboards",
    description:
      "We build secure backends and scalable admin panels with Node.js, MongoDB, MySQL, or WordPress depending on your business needs.",
    icon: <FaDatabase className="text-indigo-600 text-4xl mx-auto mb-2" />,
  },
  {
    title: "SEO Optimization & Analytics Setup",
    description:
      "We help your site rank better on Google, optimize page speed, and integrate tracking tools like Google Analytics and Search Console.",
    icon: <FaChartLine className="text-indigo-600 text-4xl mx-auto mb-2" />,
  },
  {
    title: "Launch, Hosting & Support",
    description:
      "We deploy your website on secure hosting platforms and offer ongoing maintenance, updates, and client support post-launch.",
    icon: <FaRocket className="text-indigo-600 text-4xl mx-auto mb-2" />,
  },
];


const BusinessSetupSteps = () => {
  return (
    <section className="w-full bg-[#fffdf8] py-24 px-4 md:px-16 font-sans relative overflow-hidden">
     
      <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-800 mb-16">
        How We Build Websites for Your Business
      </h2>

     
      <svg
        className="absolute top-1/2 left-0 z-0"
        width="100%"
        height="100"
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C250,80 750,0 1000,40"
          stroke="#a3a3a3"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Cards Swiper */}
      <Swiper
         modules={[Autoplay]}
         slidesPerView="auto"
         spaceBetween={50}
         loop={true}
         speed={5000}
         autoplay={{
           delay: 0,
           disableOnInteraction: false,
         }}
         className="!overflow-visible relative z-10"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index} style={{ width: "300px" }} className="flex-shrink-0">
            <div className="relative flex flex-col items-center">
              {/* Card */}
              <div className="bg-white rounded-[2rem] border-[3px] border-gray-400 shadow-2xl p-4 h-[300px] flex flex-col justify-center text-center transition-transform duration-300 hover:scale-105 z-20">

                {/* Camera notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-gray-300 rounded-full" />

                {/* Icon at the top */}
                <div className="mb-4">
                  {step.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">{step.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BusinessSetupSteps;
