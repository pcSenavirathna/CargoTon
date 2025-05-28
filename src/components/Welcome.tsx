import React from "react";
import workerImg from "../assets/worker.png"; // top image (writing)
import palletImg from "../assets/pallet.jpg"; // bottom image (pallet truck)

const Welcome = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
      {/* Left side with stacked images */}
      <div className="md:w-1/2 w-full relative flex justify-center items-center min-h-[400px]">
        {/* Background (bottom) image */}
        <img
          src={palletImg}
          alt="Pallet"
          className="w-56 h-64 object-cover shadow-lg absolute left-20 mt-10 top-20 z-20"
        />
        {/* Foreground (top) image */}
        <img
          src={workerImg}
          alt="Worker"
          className="w-64 h-80 object-cover mb-20 shadow-lg relative z-10 left-12"
        />
        {/* Stat box */}
        <div className="absolute bottom-5 left-56 z-30 ml-48">
          <div className="bg-orange-500 text-white px-10 py-6 shadow-lg text-center relative">
            <div className="text-2xl font-bold">15,350 +</div>
            <div className="text-sm">Clients Worldwide</div>
            {/* Pointer triangle */}
            <svg
              className="absolute -left-4 top-1/4 -translate-y-1/2"
              width="24"
              height="40"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="0,20 24,0 24,40" fill="#FF7F50" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right side with text */}
      <div className="md:w-1/2 w-full mt-12 md:mt-0 px-6">
        <h2 className="text-3xl font-bold mb-4 leading-tight">
          TransMax Logistics <br />
          <span className="text-orange-500">Around the World</span>
        </h2>
        <p className="text-gray-600 mb-4">
          Transmax is the world’s driving worldwide coordinations supplier — we
          uphold industry and exchange the worldwide trade of merchandise through
          land transport.
        </p>
        <p className="text-gray-600 mb-6">
          Our worth added administrations guarantee the progression of products
          proceeds consistently and supply chains stay lean and streamlined for
          progress.
        </p>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-2 rounded transition">
          MORE ABOUT US
        </button>
      </div>
    </div>
  </section>
);

export default Welcome;
