import React from "react";

const StepCard = ({ icon, step, title }) => {
  return (
    <div className="flex flex-col items-center text-center relative z-10">
      {/* Circle */}
      <div className="w-25 h-25 rounded-full border-9 border-[#303438] flex items-center justify-center">
  <div className="w-20.5 h-20.5 rounded-full border-3 border-[#2563EB] bg-[#1f1f1f] flex items-center justify-center">
    <div className="text-4xl text-white">
      {icon}
    </div>
  </div>
</div>

 <div className="w-0.5 h-8 bg-[#c4cbdb] mt-1"></div>
      {/* Step */}
      <p className="text-red-500 text-sm mt-5 uppercase font-semibold">
        {step}
      </p>

      {/* Title */}
      <h3 className="text-white uppercase text-m mt-2 leading-5">
        {title}
      </h3>
    </div>
  );
};

export default StepCard;