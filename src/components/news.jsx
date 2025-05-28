import React from "react";
import truckImg from "@/assets/home.jpg";
import trainImg from "@/assets/pallet.jpg";
import planeImg from "@/assets/pallet.jpg";
import shipImg from "@/assets/home.jpg";

const News = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">LATEST NEWS</h2>
        <div className="flex justify-center items-center gap-2">
          <span className="w-3 h-3 bg-cyan-500 rounded"></span>
          <span className="text-gray-400 text-sm font-medium tracking-wide">INTEGER CONGUE ELIT</span>
        </div>
      </div>

      {/* News Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="flex bg-white rounded shadow overflow-hidden h-60">
          <div className="relative w-1/2 h-full">
            <img
              src={truckImg}
              alt="CURABITUR LOREM UISM QUIS"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-2 py-2 w-12 rounded text-center text-white font-semibold text-xs leading-tight bg-cyan-500">
              <div className="text-lg font-bold">26</div>
              <div className="uppercase text-[10px]">MAY</div>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 bg-cyan-500">
            <h3 className="font-semibold text-lg mb-2">
              CURABITUR LOREM UISM QUIS
            </h3>
            <div className="flex items-center text-xs mb-2 gap-4">
              <span>Admin</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7zm-8 5c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5zm0-7a2 2 0 110 4 2 2 0 010-4z"/>
                </svg>
                15
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="flex bg-white rounded shadow overflow-hidden h-60">
          <div className="relative w-1/2 h-full">
            <img
              src={trainImg}
              alt="CURABITUR LOREM UISM QUIS"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-2 py-2 w-12 rounded text-center text-white font-semibold text-xs leading-tight bg-gray-700 bg-opacity-80">
              <div className="text-lg font-bold">22</div>
              <div className="uppercase text-[10px]">MAY</div>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              CURABITUR LOREM UISM QUIS
            </h3>
            <div className="flex items-center text-xs mb-2 gap-4">
              <span>Admin</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7zm-8 5c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5zm0-7a2 2 0 110 4 2 2 0 010-4z"/>
                </svg>
                15
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="flex bg-white rounded shadow overflow-hidden h-60">
          <div className="relative w-1/2 h-full">
            <img
              src={planeImg}
              alt="CURABITUR LOREM UISM QUIS"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-2 py-2 w-12 rounded text-center text-white font-semibold text-xs leading-tight bg-gray-700 bg-opacity-80">
              <div className="text-lg font-bold">20</div>
              <div className="uppercase text-[10px]">MAY</div>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              CURABITUR LOREM UISM QUIS
            </h3>
            <div className="flex items-center text-xs mb-2 gap-4">
              <span>Admin</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7zm-8 5c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5zm0-7a2 2 0 110 4 2 2 0 010-4z"/>
                </svg>
                15
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="flex bg-white rounded shadow overflow-hidden h-60">
          <div className="relative w-1/2 h-full">
            <img
              src={shipImg}
              alt="CURABITUR LOREM UISM QUIS"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-2 py-2 w-12 rounded text-center text-white font-semibold text-xs leading-tight bg-gray-700 bg-opacity-80">
              <div className="text-lg font-bold">15</div>
              <div className="uppercase text-[10px]">MAY</div>
            </div>
          </div>
          <div className="w-1/2 h-full p-6 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              CURABITUR LOREM UISM QUIS
            </h3>
            <div className="flex items-center text-xs mb-2 gap-4">
              <span>Admin</span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M18 10c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7zm-8 5c3.314 0 6-2.239 6-5s-2.686-5-6-5-6 2.239-6 5 2.686 5 6 5zm0-7a2 2 0 110 4 2 2 0 010-4z"/>
                </svg>
                15
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec ...
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default News;
