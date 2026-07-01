import {FaUserGear,} from "react-icons/fa6";

import {MdOutlinePsychology,} from "react-icons/md";

import { HiLightBulb } from "react-icons/hi";

import { FaM } from "react-icons/fa6";

import CategoryCard from "./CategoryCard";

const Category = () => {
  return (
    <section className="bg-[#1D1D1D] py-24">

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="heading font-bold text-white text-4xl uppercase relative inline-block">Categories</h2>
            
            <div className="grid grid-cols-4 gap-6 mt-14">

                  <CategoryCard
                     icon={
                            <div className="w-20 h-20 rounded-full  border-7  flex items-center justify-center">
                              <FaM  size={50}className="font-bold text-base" />
                            </div>}
                    title1="Mini"
                    title2="Makers"
                    description="Where Creativity Meets Logic."
                    active={true}/>

          <CategoryCard
            icon={<HiLightBulb/>}
            title1="Junior"
            title2="Innovators"
            description="Engineering & Strategy Fundamentals."/>

          <CategoryCard
            icon={<FaUserGear />}
            title1="Young"
            title2="Engineers"
            description="Advanced Wireless & Autonomous Control."/>

          <CategoryCard
            icon={<MdOutlinePsychology />}
            title1="Robo"
            title2="Minds"
            description="Elite Professional Sports & Robotics."/>

        </div>

      </div>

    </section>
  );
};

export default Category;