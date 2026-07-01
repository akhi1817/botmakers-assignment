const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex gap-5 items-start">
      <div className="mt-1">
        <Icon size={40} strokeWidth={2} className="text-[#FF3B3B]"/>
      </div>

      <div>
        <h3 className="text-white font-semibold tracking-wider text-2xl">{title}</h3>

        <p className="text-[#8D8D8D] text-md leading-6 mt-2 max-w-md">"{description}"</p>
      </div>
    </div>
  );
};

export default FeatureItem;