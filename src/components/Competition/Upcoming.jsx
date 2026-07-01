const Card = ({ city }) => {
  return (
    <div className="bg-[#202020] border border-neutral-700 rounded-lg p-6">

      <h2 className="text-3xl font-semibold text-white">Event in {city}</h2>

      <div className="grid grid-cols-3 mt-6 text-gray-300">

        <div>
          <p>Date</p>
          <p>11/11/25</p>
        </div>

        <div>
          <p>Location</p>
          <p>BKC</p>
        </div>

        <div>
          <p>Category</p>
          <p>Lorem</p>
        </div>

      </div>

      <button className="w-full mt-8 bg-red-500 py-3 rounded text-white text-2xl hover:bg-red-600 transition">REGISTER</button>

    </div>
  );
};

const Upcoming = () => {
  return (
    <div>

      <h3 className="heading text-white text-3xl uppercase mb-6">Upcoming</h3>

      <div className="space-y-4">

        <Card city="Mumbai" />

        <Card city="Delhi" />

      </div>

    </div>
  );
};

export default Upcoming;