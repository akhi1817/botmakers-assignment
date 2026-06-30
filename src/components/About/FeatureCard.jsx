const FeatureCard = ({ number, title, description }) => {
  return (
    <div className="space-y-3">

      <h3 className="text-[#ff5a5f] text-3xl font-bold">
        {number}
      </h3>

      <h2 className="text-white text-2xl font-semibold uppercase leading-tight">
        {title}
      </h2>

      <p className="text-gray-500 text-xl leading-9 max-w-sm">
        {description}
      </p>

    </div>
  );
};

export default FeatureCard;