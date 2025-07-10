"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules"; // Import FreeMode
import "swiper/css";

const services = [
  {
    image: "./web.jpeg",
    title: "Website Development",
    description:
      "We build fast, responsive websites using modern frameworks like React, Next.js, and Tailwind CSS. Our websites are optimized for performance, accessibility, and modern user needs.",
  },
  {
    image: "./ui.webp",
    title: "UI/UX Design",
    description:
      "We craft clean, user-friendly interfaces with thoughtful design, easy navigation, and mobile-friendly layouts to create better user experiences.",
  },
  {
    image: "./seo.webp",
    title: "SEO & Performance",
    description:
      "Improve your Google ranking with optimized content, SEO best practices, fast-loading pages, and analytics setup.",
  },
  {
    image: "./hosting.webp",
    title: "Hosting & Deployment",
    description:
      "We help deploy your website on secure, high-speed servers with custom domains, CDN, SSL, and 24/7 uptime monitoring.",
  },
];

const BusinessServices = () => {
  return (
    <section className="w-full bg-transparent py-24 px-4 md:px-16 relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Our Services
        </h3>
        <h3 className="text-xl md:text-2xl text-gray-600 mt-3">
          What We Do Best
        </h3>
        <p className="text-gray-700 mt-2 text-base md:text-lg">
          We specialize in creating exceptional digital experiences that drive
          results.
        </p>
      </div>

      {/* Auto Moving Cards */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true} // ✅ Just a boolean — don't pass an object
        grabCursor={true}
        className="!overflow-visible"
      >
        {[...services, ...services].map((service, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "280px" }}
            className="flex-shrink-0"
          >
            <div className="relative w-full h-[380px] rounded-xl shadow-2xl overflow-hidden flex flex-col items-center justify-center">
              {/* Animated Blob Behind */}
              <div className="absolute top-1/2 left-1/2 w-[150px] h-[150px] bg-red-500 rounded-full blur-lg opacity-60 animate-blob-translate-x-1/2 -translate-y-1/2 z-0" />

              {/* Foreground Card */}
              <div className="relative bg-white/90 backdrop-blur-xl w-[95%] h-[370px] rounded-xl p-4 border border-white z-10 flex flex-col items-center text-center m-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-bold text-indigo-600 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-700">{service.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BusinessServices;
