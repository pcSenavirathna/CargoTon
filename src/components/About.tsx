
import { Button } from "@/components/ui/button";

const About = () => {
  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "10K+", label: "Shipments Delivered" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "On-Time Delivery" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
              ABOUT CARGO PRO
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Your Trusted Logistics Partner
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in the logistics industry, Cargo Pro has established 
              itself as a reliable partner for businesses worldwide. We pride ourselves on delivering 
              exceptional service and innovative solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to excellence, combined with state-of-the-art technology and a global 
              network of partners, ensures your cargo reaches its destination safely and on time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                Download Brochure
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:bg-blue-50 p-6 rounded-lg transition-colors">
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Safety First</h3>
            <p className="text-gray-600">
              Advanced security measures and insurance coverage for complete peace of mind.
            </p>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Fast Delivery</h3>
            <p className="text-gray-600">
              Optimized routes and efficient processes ensure your cargo arrives on schedule.
            </p>
          </div>
          
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">Global Network</h3>
            <p className="text-gray-600">
              Extensive worldwide network with local expertise in every major market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
