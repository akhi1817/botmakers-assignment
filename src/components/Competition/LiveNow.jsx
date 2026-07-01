import TournamentBracket from "./TournamentBracket";

const LiveNow = () => {
  return (
    <div>

      <h3 className="heading text-red-500 text-3xl uppercase mb-6">Live Now</h3>

      <div className="bg-[#202020] border border-neutral-700 rounded-lg p-6 h-130">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-4xl font-semibold text-white">Bengaluru Regionals</h2>

            <p className="text-gray-400 mt-2">Lorem Ipsum</p>

          </div>

          <span className="bg-red-500 text-xs px-3 py-1 rounded text-white">Ongoing</span>

        </div>

        <hr className="border-neutral-700 my-5" />

      

       <div className="flex justify-center mt-8">
            <TournamentBracket />
       </div>

      </div>

    </div>
  );
};

export default LiveNow;