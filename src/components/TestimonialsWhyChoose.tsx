import React, { useState } from "react";

const faqs = [
  "Dui ac hendrerit elementum quam ipsum auctor lorem",
  "Mauris vel magna a est lobortis volutpat",
  "Sed bibendum ornare lorem mauris feugiat suspendisse neque",
  "Nulla scelerisque dul hendrerit elementum quam",
];

const TestimonialsWhyChoose = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 m-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* TRUSTED CLIENTS */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">TRUSTED CLIENTS</h3>
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur
            </p>

            {/* Testimonial Card */}
            <div className="relative bg-gray-100 rounded-md p-8 mb-4 shadow-sm">
              {/* Quote Icon */}
              <div className="absolute -left-6 top-8">
                <div className="bg-red-700 w-10 h-10 flex items-center justify-center rounded-tr-lg rounded-br-lg">
                  <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                    <path d="M7 17h2v-4H5v6h4v-2H7v-2zm8 0h2v-4h-4v6h4v-2h-2v-2z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-base leading-relaxed">
                Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor se felis ac mauris.
                Pellentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam.
                Aliquam malesuada mauris eutg met Curabitur laoreet convallis nisl pellentesque bibendum.
              </p>

              {/* Pointer */}
              <div className="absolute left-24 bottom-0 w-0 h-0 border-t-[20px] border-t-gray-100 border-l-[20px] border-l-transparent"></div>
            </div>

            {/* Client Info */}
            <div className="mt-2">
              <div className="font-bold text-gray-900">JOHN DEO</div>
              <div className="text-sm text-gray-500">Managing Director</div>
            </div>

            {/* Arrows */}
            <div className="flex gap-2 mt-6">
              <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-200">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-200">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">WHY CHOOSE US</h3>
            <p className="uppercase text-sm tracking-widest text-gray-400 mb-6">
              Lorem ipsum dolor sit amet consectetur
            </p>

            {/* FAQ List */}
            <div className="divide-y border border-gray-200 rounded-md">
              {faqs.map((faq, idx) => (
                <div key={idx} className="flex items-center justify-between px-4 py-4">
                  <span className="text-gray-800">{faq}</span>
                  <button
                    onClick={() => setOpen(open === idx ? null : idx)}
                    className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center text-lg font-bold text-gray-700 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsWhyChoose;
