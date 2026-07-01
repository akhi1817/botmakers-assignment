const JoinEcosystem = () => {
  return (
    <section className="bg-[#0F0F0F] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="heading text-white text-5xl font-bold uppercase mb-14 tracking-wide">
          JOIN THE ECOSYSTEM
        </h2>

        {/* Forms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-md p-4">
            <h3 className="heading text-white text-2xl uppercase font-semibold mb-5">
              BECOME IN JUDGE
            </h3>

            <input
              type="text"
              placeholder="Name"
              className="w-full h-10 mb-3 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full h-10 mb-3 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Enroll"
              className="w-full h-10 mb-4 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <button className="w-full h-11 text-2xl bg-[#FF4D4D] rounded text-white font-semibold uppercase tracking-wide hover:bg-[#ff3b3b] transition">
              SIGN UP
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-md p-4">
            <h3 className="heading text-white text-2xl uppercase font-semibold mb-5">
              VOLUNTEER
            </h3>

            <input
              type="text"
              placeholder="Name"
              className="w-full h-10 mb-3 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full h-10 mb-3 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Enroll"
              className="w-full h-10 mb-4 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <button className="w-full h-11 text-2xl bg-[#FF4D4D] rounded text-white font-semibold uppercase tracking-wide hover:bg-[#ff3b3b] transition">
              SIGN UP
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-md p-4">
            <h3 className="heading text-white text-2xl uppercase font-semibold mb-5">
              COMMUNITY MEMBER
            </h3>

            <input
              type="text"
              placeholder="Name"
              className="w-full h-10 mb-3 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Location"
              className="w-full h-10 mb-3 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <input
              type="text"
              placeholder="Enroll"
              className="w-full h-10 mb-4 bg-[#262626] border border-[#444] rounded px-3 text-white placeholder:text-gray-500 outline-none focus:border-red-500"
            />

            <button className="w-full h-11 text-2xl bg-[#FF4D4D] rounded text-white font-semibold uppercase tracking-wide hover:bg-[#ff3b3b] transition">
              SIGN UP
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default JoinEcosystem;