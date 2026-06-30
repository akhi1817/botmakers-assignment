import { LuArrowRight } from "react-icons/lu";
const CategoryCard = ({
  icon,
  title1,
  title2,
  description,
  active = false,
}) => {
  return (
    <div
      className={`
      group
      relative
      h-68
      rounded-2xl
      border
      transition-all
      duration-300
      cursor-pointer
      overflow-hidden
      ${
        active
          ? "border-[#C79B00] bg-linear-to-br from-[#2B2A23] to-[#1E1E1E]"
          : "border-[#505050] bg-[#242424] hover:border-[#C79B00]"
      }
    `}
    >
      {/* Card Content */}

      <div className="px-7 py-6 h-full flex flex-col">

        {/* Icon */}

        <div className="text-[#FFC400] text-7xl">
          {icon}
        </div>

        {/* Heading */}

        <h2 className="heading font-bold text-white text-[28px] leading-6 uppercase mt-6">
          {title1}
          <br />
          {title2}
        </h2>

        {/* Description */}

        <p className="text-[#8B8B8B] text-sm leading-5 mt-3">
          {description}
        </p>

        {/* Bottom */}

        <div className="mt-auto">

          <button className="text-[#FF4B4B] uppercase tracking-wide text-sm flex items-center gap-2 group-hover:gap-4 transition-all duration-300">

            Learn More

            <span className="font-bold"><LuArrowRight size={20}/></span>

          </button>

        </div>

      </div>
    </div>
  );
};

export default CategoryCard;