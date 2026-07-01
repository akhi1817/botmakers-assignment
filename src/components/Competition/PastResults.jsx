const Item = () => {
  return (
    <>
      <div className="py-4">

        <h2 className="text-3xl font-semibold text-white">Bengaluru Regionals</h2>

        <p className="text-gray-400 mt-2">Lorem Ipsum</p>

      </div>

      <hr className="border-neutral-700" />
    </>
  );
};

const PastResults = () => {
  return (
    <div>

      <h3 className="heading text-white text-3xl uppercase mb-6">Past Results</h3>

      <div className="bg-[#202020] border border-neutral-700 rounded-lg p-6 h-130">

        <Item />

        <Item />

        <Item />

      </div>

    </div>
  );
};

export default PastResults;