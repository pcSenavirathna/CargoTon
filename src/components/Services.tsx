import React from "react";
import shipImg from "../assets/ship.jpg";
import planeImg from "../assets/home.jpg"; // Replace with actual plane image

const Services = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-green-500 font-semibold mb-2">
          Real Solution ,Real Fast !
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">
          Best Global Logistics Solutions.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-8 md:grid-cols-2 justify-center">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
          <div className="relative">
            <img
              src={shipImg}
              alt="Air Freight"
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-lime-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 21v-4a2 2 0 00-2-2H10a2 2 0 00-2 2v4"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Air Freight Services</h3>
            <p className="text-gray-600 mb-4">
              At our Auto Service garage, we fully appreciate how difficult
              occur it is for people to find.
            </p>
            <a
              href="#"
              className="flex items-center text-black font-semibold hover:underline"
            >
              <span className="mr-2">Read More</span>
              <span className="inline-block w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-md mx-auto">
          <div className="relative">
            <img
              src={planeImg}
              alt="Drone Services"
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-lime-400 rounded-full w-12 h-12 flex items-center justify-center">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  d="M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 21v-4a2 2 0 00-2-2H10a2 2 0 00-2 2v4"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Drone Services</h3>
            <p className="text-gray-600 mb-4">
              These are unique and often they differ from one industry to the
              other. Our logistics expertise.
            </p>
            <a
              href="#"
              className="flex items-center text-black font-semibold hover:underline"
            >
              <span className="mr-2">Read More</span>
              <span className="inline-block w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-10">
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
        <span className="w-3 h-3 rounded-full bg-lime-400"></span>
        <span className="w-3 h-3 rounded-full bg-gray-300"></span>
      </div>

      {/* Footer Text */}
      <div className="text-center text-sm text-gray-700 mt-6">
        Logistic & Transport Solutions Saves Your Time.{" "}
        <span className="font-bold">
          Finds Your Solutions{" "}
          <span className="inline-block align-middle">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" />
              <path
                d="M12 8v4l3 3"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
      </div>
    </div>
  </section>
);

export default Services;
