import React, { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
        setLastScrollY(window.scrollY);
        return;
      }
      if (window.scrollY > lastScrollY) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`w-full border-b bg-white sticky top-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl tracking-wide">
            Cargo{" "}
            <span className="text-yellow-500">TON</span>
          </span>
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <div className="flex gap-2">
            {/* Home with yellow bar (always visible) */}
            <div className="group flex items-center mr-4">
              <span className="w-1 h-6 bg-yellow-400 mr-2 rounded hidden group-hover:block"></span>
              <a
                href="#"
                className="font-bold text-sm tracking-widest uppercase text-black hover:text-yellow-500"
                style={{ letterSpacing: "0.18em" }}
              >
                Home
                <span className="ml-1 text-xs">&#9660;</span>
              </a>
            </div>
            {/* Pages Dropdown */}
            <div className="group flex items-center mr-4 relative">
              <span className="w-1 h-6 bg-yellow-400 mr-2 rounded hidden group-hover:block absolute left-0"></span>
              <button
                className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-1 hover:text-yellow-500 pl-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Pages
                <span className="ml-1 text-xs">&#9660;</span>
              </button>
            </div>
            {/* Tracking */}
            <div className="group flex items-center mr-4 relative">
              <span className="w-1 h-6 bg-yellow-400 mr-2 rounded hidden group-hover:block absolute left-0"></span>
              <a
                href="#"
                className="font-bold text-sm tracking-widest uppercase text-black hover:text-yellow-500 pl-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Tracking
                <span className="ml-1 text-xs">&#9660;</span>
              </a>
            </div>
            {/* Services Dropdown */}
            <div className="group flex items-center mr-4 relative">
              <span className="w-1 h-6 bg-yellow-400 mr-2 rounded hidden group-hover:block absolute left-0"></span>
              <button
                className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-1 hover:text-yellow-500 pl-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Services
                <span className="ml-1 text-xs">&#9660;</span>
              </button>
            </div>
            {/* Blog Dropdown */}
            <div className="group flex items-center relative">
              <span className="w-1 h-6 bg-yellow-400 mr-2 rounded hidden group-hover:block absolute left-0"></span>
              <button
                className="font-bold text-sm tracking-widest uppercase text-black flex items-center gap-1 hover:text-yellow-500 pl-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Blog
                <span className="ml-1 text-xs">&#9660;</span>
              </button>
            </div>
          </div>
          {/* Divider */}
          <div className="h-8 w-px bg-gray-200 mx-4"></div>
          {/* Buttons */}
          <a
            href="#"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-2 rounded transition text-sm uppercase tracking-widest mr-2"
            style={{ letterSpacing: "0.08em" }}
          >
            Get a Quote
          </a>
          <a
            href="#"
            className="bg-black hover:bg-gray-800 text-white font-bold px-6 py-2 rounded transition text-sm uppercase tracking-widest"
            style={{ letterSpacing: "0.08em" }}
          >
            Sign In
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
