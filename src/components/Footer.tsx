
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-yellow-500 text-black p-2 rounded-lg font-bold text-xl">
                C
              </div>
              <span className="text-2xl font-bold">Cargo</span>
              <span className="text-sm text-gray-400">PRO</span>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted logistics partner for reliable, efficient, and secure shipping solutions worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-700 p-2 rounded hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                📘
              </div>
              <div className="bg-gray-700 p-2 rounded hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                🐦
              </div>
              <div className="bg-gray-700 p-2 rounded hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                💼
              </div>
              <div className="bg-gray-700 p-2 rounded hover:bg-yellow-500 hover:text-black transition-colors cursor-pointer">
                📷
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Air Freight</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Road Transport</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Warehousing</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Packaging</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Cargo Tracking</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Track Shipment</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Get Quote</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">News & Updates</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold p-3 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Cargo Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
