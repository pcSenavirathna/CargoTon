import cargo from "../assets/cargo.png";

const HeroSlider = () => (
  <section className="relative bg-white overflow-hidden">
    
      {/* Card Overlay */}
      <div className="absolute top-1/2 left-10 md:left-24 transform -translate-y-1/2 bg-white shadow-lg rounded-md px-8 py-10 md:px-12 md:py-14 max-w-lg z-10">
        {/* Yellow Accent Bar */}
        <div className="flex items-center mb-4">
          <span className="block w-1 h-8 bg-yellow-400 mr-3"></span>
          <span className="uppercase text-xs tracking-widest text-yellow-500 font-semibold">Logistic</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          Best Shipping <span className="text-yellow-500">Partner</span>
        </h1>
        <p className="mt-4 text-gray-600 mb-8">
          Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida neque.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded transition text-lg shadow">
          DISCOVER MORE
        </button>
      </div>
      {/* Background Image */}
   <div className="w-full h-[500px] md:h-[600px] relative">
      <img
        src={cargo}
        alt="Shipping"
        className="absolute top-5 right-5 h-full object-cover"
        style={{ minHeight: 400, maxHeight: 600, width: '60%',}}
      />

    </div>

    {/* Slider Controls */}
    <div className="absolute bottom-0 p-2 bg-yellow-500 flex items-center justify-center gap-6 py-3 z-20">
      <span className="text-white text-sm font-bold">2 / 2</span>
      <button className="text-white rounded-full hover:bg-yellow-400 transition">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="text-white p-2 rounded-full hover:bg-yellow-400 transition">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

  </section>
);

export default HeroSlider;