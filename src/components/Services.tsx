
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: "🚢",
      title: "Ocean Freight",
      description: "Reliable sea freight services for your international cargo with competitive rates and secure handling."
    },
    {
      icon: "✈️",
      title: "Air Freight",
      description: "Fast and efficient air cargo services for time-sensitive shipments worldwide."
    },
    {
      icon: "🚛",
      title: "Road Transport",
      description: "Comprehensive ground transportation solutions for domestic and cross-border deliveries."
    },
    {
      icon: "🏭",
      title: "Warehousing",
      description: "State-of-the-art storage facilities with inventory management and distribution services."
    },
    {
      icon: "📦",
      title: "Packaging",
      description: "Professional packaging solutions to ensure your goods arrive safely at their destination."
    },
    {
      icon: "🔍",
      title: "Cargo Tracking",
      description: "Real-time tracking system to monitor your shipments throughout their journey."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-yellow-500 text-sm font-semibold tracking-wider uppercase mb-4 block">
            OUR SERVICES
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Comprehensive Logistics Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From sea to air, road to rail, we provide end-to-end logistics services 
            tailored to meet your unique shipping requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
