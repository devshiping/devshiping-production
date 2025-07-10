import React from "react";
import Image from "next/image";

const steps = [
  {
    title: "Discovery",
    description:
      "We dive deep into your business needs, audience, and goals. This phase lays the foundation for the entire product.",
    icon: "/image1.jpg",
  },
  {
    title: "UI Planning",
    description:
      "We design user flows and wireframes, ensuring every screen serves a purpose with clear interactions.",
    icon: "/uiux.avif",
  },
  {
    title: "Visual Design",
    description:
      "We bring your product to life with striking visuals, colors, typography, and branding aligned to your identity.",
    icon: "/vs.png",
  },
  {
    title: "Development",
    description:
      "Our developers code the solution, turning designs into high-performing, responsive websites or apps.",
    icon: "/development.jpg",
  },
  {
    title: "Quality Assurance",
    description:
      "Every feature is tested across devices and browsers to ensure perfection before go-live.",
    icon: "/qualityassurance.jpg",
  },
  {
    title: "Launch",
    description:
      "Once approved, we go live—backed by a solid deployment process and post-launch support.",
    icon: "/launch.jpeg",
  },
];

const DesignProcess = () => {
  return (
    <section className="w-full px-4 md:px-20 md:pt-20 md:pb-10 bg-white flex flex-col md:flex-row gap-12 font-sans">
      {/* Sticky Left Column */}
      <div className="md:w-1/2 md:sticky top-20 self-start md:pb-40  px-2">
        <h2 className="text-4xl md:text-6xl text-black pt-20 font-semibold mb-6 leading-tight">
          Our Proven <br />
          Design Journey
        </h2>
         <p className="text-[24px] leading-[1.3] text-gray-500 mt-6 mb-3 md:my-6 font-sans">
             We align with your vision.
          Thoughtful design, efficient execution.
          Every phase adds meaning.
          Digital done right, from start to scale.
          Let’s build something remarkable together.

          </p>

      </div>

      {/* Scrollable Right Column */}
      <div className="md:w-1/2 max-h-[80vh] overflow-y-auto pr-2 scrollbar-hide">
        <div className="flex flex-col gap-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 pb-6 border-b border-gray-200"
            >
              <div className="flex items-start gap-4 px-2">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={150}
                  height={120}
                  className="rounded-md object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-1 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
