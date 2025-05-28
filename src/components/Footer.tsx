import React from "react";
import truckImg from "@/assets/home.jpg";
import warehouseImg from "@/assets/cargo.png";
import meetingImg from "@/assets/worker.png";
import cityImg from "@/assets/pallet.jpg";
import shipImg from "@/assets/ship.jpg";
import peopleImg from "@/assets/home.jpg";

const Footer = () => (
  <footer className="bg-[#6c7687] text-white pt-12 pb-4">
    {/* Newsletter */}
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">Weekly Newsletter</h2>
          <p className="text-gray-200">There are many vaiations of passages of lorem ipsum available.</p>
        </div>
        <form className="flex w-full md:w-auto gap-2">
          <input
            type="email"
            placeholder="Enter Your Mail"
            className="rounded px-4 py-3 w-full md:w-80 text-gray-800 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-6 py-3 rounded transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
      {/* Footer Columns */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-gray-400 pt-10">
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-orange-300 inline-block pb-1">About Us</h3>
          <p className="text-gray-200 mb-4 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-col gap-2 text-gray-200 text-sm">
            <span>📞 (+94) 11 434 7575</span>
            <span>📍 42 Lily Ave, Colombo 00600</span>
          </div>
        </div>
        {/* Latest News */}
        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-orange-300 inline-block pb-1">Latest News</h3>
          <ul className="mt-2 space-y-3 text-gray-200 text-sm">
            <li>
              <span className="text-orange-300 mr-2">›</span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem .
              <div className="text-xs text-gray-300 mt-1">5 Minutes Ago</div>
            </li>
            <li>
              <span className="text-orange-300 mr-2">›</span>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem .
              <div className="text-xs text-gray-300 mt-1">5 Minutes Ago</div>
            </li>
          </ul>
        </div>
        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-orange-300 inline-block pb-1">Customer Service</h3>
          <ul className="mt-2 space-y-3 text-gray-200 text-sm">
            <li>Support Forums</li>
            <li>Communication</li>
            <li>FAQS</li>
            <li>Privacy Policy</li>
            <li>Rules & Condition</li>
            <li>Contact Us</li>
          </ul>
        </div>
        {/* Customer Service Images */}
        <div>
          <h3 className="text-xl font-bold mb-2 border-b-2 border-orange-300 inline-block pb-1">Customer Service</h3>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img src={truckImg} alt="truck" className="w-full h-16 object-cover rounded" />
            <img src={warehouseImg} alt="warehouse" className="w-full h-16 object-cover rounded" />
            <img src={meetingImg} alt="meeting" className="w-full h-16 object-cover rounded" />
            <img src={cityImg} alt="city" className="w-full h-16 object-cover rounded" />
            <img src={shipImg} alt="ship" className="w-full h-16 object-cover rounded" />
            <img src={peopleImg} alt="people" className="w-full h-16 object-cover rounded" />
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 mt-10 pt-6 text-gray-200 text-sm">
        <span>Copyright © 2021 All Rights Reserved. Site By Xiteb<sup>®</sup></span>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">fb</a>
          <a href="#" className="hover:text-white">V</a>
          <a href="#" className="hover:text-white">T</a>
          <a href="#" className="hover:text-white">Be</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
