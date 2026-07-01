import heroBg from "../../assets/images/hero-bg.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
         {/* Background Image */}
      <img src={heroBg} alt="Hero" className="absolute top-0 -right-48 h-full max-w-none object-cover"/>

     
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 pt-24"> 
        <div className="max-w-full">

          <div className="flex items-start justify-between ml-4 gap-56">

        {/* Live Badge */}
 
          <div className="absolute top-10 right-36 z-20 hidden lg:flex items-center gap-3 bg-black/80 border border-gray-500  px-2 py-2">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>

            <span className="text-white text-sm">
              <span className="text-red-500 font-semibold">LIVE</span> : Episode 14. Bengaluru Regionals
            </span>

            <span className="text-red-500 font-semibold cursor-pointer hover:underline">WATCH LIVE</span>
          </div>
        {/* Heading */}
            <div className="ml-4 mt-16">
              <h1 className="heading text-2xl md:text-6xl font-bold uppercase text-white leading-[1.05]">INDIA'S ULTIMATE<br />ROBOTICS ARENA</h1>
            </div>
  
        </div>

          <p className="text-gray-300 ml-8 mt-6 text-lg max-w-xl"> Build. Compete. Rank. The National<br/> Ecosystem for Robotics Arena.</p>

          <div className="flex ml-8 gap-4 mt-8 flex-wrap">
            <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-md font-semibold transition">
              CREATE ACCOUNT
            </button>

            <button className="border border-white px-8 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
              EXPLORE EVENTS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;