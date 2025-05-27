
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-yellow-500 text-white p-2 rounded-lg font-bold text-xl">
              C
            </div>
            <span className="text-2xl font-bold text-gray-800">Cargo</span>
            <span className="text-sm text-gray-500">PRO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              HOME
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              SERVICES
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              ABOUT
            </a>
            <a href="#tracking" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              TRACKING
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              CONTACT
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
              GET A QUOTE
            </Button>
            <Button className="bg-gray-800 hover:bg-gray-900">
              SIGN IN
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                HOME
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                SERVICES
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                ABOUT
              </a>
              <a href="#tracking" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                TRACKING
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                CONTACT
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                  GET A QUOTE
                </Button>
                <Button className="bg-gray-800 hover:bg-gray-900">
                  SIGN IN
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
