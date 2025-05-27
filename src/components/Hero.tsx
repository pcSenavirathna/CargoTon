
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/759df696-9edf-4b7c-b7ef-1fa66ea4724b.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="mb-6">
              <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase">
                LOGISTIC
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Best Shipping
              <br />
              <span className="text-yellow-400">Partner</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-lg">
              Amet, tempus egestas facilisis vulputate viverra molestie lobortis 
              posuere maecenas, molestie lobortis posuere maecenas. Eget 
              sapien, gravida neque.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg transition-all hover:scale-105"
              >
                DISCOVER MORE
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg transition-all"
              >
                GET QUOTE
              </Button>
            </div>
          </div>
          
          {/* Right side content or additional elements */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-white text-2xl font-bold mb-4">Quick Quote</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="From Location" 
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input 
                  type="text" 
                  placeholder="To Location" 
                  className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <select className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                  <option value="">Cargo Type</option>
                  <option value="container">Container</option>
                  <option value="bulk">Bulk Cargo</option>
                  <option value="vehicle">Vehicle</option>
                </select>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                  GET INSTANT QUOTE
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
