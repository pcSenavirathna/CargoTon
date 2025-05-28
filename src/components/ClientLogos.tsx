import React from "react";

const logos = [
  "/assets/logo1.jpg",
  "/assets/logo1.jpg",
  "/assets/logo1.jpg",
  "/assets/logo1.jpg",
  "/assets/logo1.jpg",
];

const ClientLogos = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h3 className="text-center text-gray-500 text-lg font-semibold mb-8 tracking-wider uppercase">
        Trusted by Leading Companies
      </h3>

      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Client logo ${index + 1}`}
            className="h-12 md:h-16 object-contain grayscale opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  </section>
);

export default ClientLogos;
