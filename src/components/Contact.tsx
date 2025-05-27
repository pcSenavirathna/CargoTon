
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-yellow-400 text-sm font-semibold tracking-wider uppercase mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Ship With Us?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact our experts today for a customized logistics solution that meets your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Get a Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="From Location" 
                  className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input 
                  type="text" 
                  placeholder="To Location" 
                  className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              
              <textarea 
                placeholder="Additional Details" 
                rows={4}
                className="w-full p-4 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              ></textarea>
              
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-4 text-lg">
                Get Free Quote
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <span className="text-black text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-gray-300">
                      123 Shipping Lane, Port District<br />
                      Maritime City, MC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <span className="text-black text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-300">
                      +1 (555) 123-4567<br />
                      +1 (555) 765-4321
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <span className="text-black text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-300">
                      info@cargopro.com<br />
                      support@cargopro.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-500 p-3 rounded-lg">
                    <span className="text-black text-xl">🕒</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h4 className="text-xl font-bold mb-4">24/7 Emergency Support</h4>
              <p className="text-gray-300 mb-4">
                Need urgent assistance? Our emergency hotline is available round the clock.
              </p>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                Call Emergency Line
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
