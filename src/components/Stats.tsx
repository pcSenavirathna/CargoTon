import React from "react";

const Stats = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-left ml-">
        
        {/* Stat 1 */}
        <div className="relative">
          {/* Big faded background number */}
          <span className="absolute inset-0 flex justify-start items-center text-[100px] md:text-[140px] font-bold text-[#f2f5fa] z-0 select-none pointer-events-none leading-none">
            890
          </span>
          {/* Foreground content */}
          <div className="relative z-10 flex items-center gap-3 ml-10">
            <div className="text-3xl md:text-4xl font-bold text-[#0a2259]">890</div>
            <div className="text-[#0a2259] font-semibold text-sm md:text-base">
              Delivered <br/>packages
            </div>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="relative">
          <span className="absolute inset-0 flex justify-start items-center text-[100px] md:text-[140px] font-bold text-[#f2f5fa] z-0 select-none pointer-events-none leading-none">
            137
          </span>
          <div className="relative z-10 flex items-center gap-3 ml-10">
            <div className="text-3xl md:text-4xl font-bold text-[#0a2259]">137</div>
            <div className="text-[#0a2259] font-semibold text-sm md:text-base">
              Countries<br/> covered
            </div>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="relative">
          <span className="absolute inset-0 flex justify-start items-center text-[100px] md:text-[140px] font-bold text-[#f2f5fa] z-0 select-none pointer-events-none leading-none">
            740
          </span>
          <div className="relative z-10 flex items-center gap-3 ml-10">
            <div className="text-3xl md:text-4xl font-bold text-[#0a2259]">740</div>
            <div className="text-[#0a2259] font-semibold text-sm md:text-base">
              Tons of<br/> Goods
            </div>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="relative">
          <span className="absolute inset-0 flex justify-start items-center text-[100px] md:text-[140px] font-bold text-[#f2f5fa] z-0 select-none pointer-events-none leading-none">
            600
          </span>
          <div className="relative z-10 flex items-center gap-3 ml-10">
            <div className="text-3xl md:text-4xl font-bold text-[#0a2259]">600</div>
            <div className="text-[#0a2259] font-semibold text-sm md:text-base">
              Satisfied<br/> Clients
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Stats;
