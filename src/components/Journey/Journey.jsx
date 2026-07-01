import {FaTools,FaBuilding,FaAward,FaUsers,} from "react-icons/fa";
import StepCard from "./StepCard";

const Journey = () => {
  return (
    <section className="bg-black py-24">

      <div className="max-w-6xl mx-auto px-6">

        <p className="text-red-500 text-2xl uppercase text-center tracking-widest">User Journey</p>

        <h2 className="heading text-4xl text-white uppercase text-center mt-3">Your Path To The League</h2>

        <p className="text-gray-500 text-center mt-3">Lorem Ipsum Lorem Ipsum Lorem Ipsume</p>

        <div className="relative mt-20">

          <div className="absolute top-12 left-[25%] right-[25%] h-1 bg-blue-700"></div>

          {/* Steps */}

          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto relative">
            <StepCard icon={<FaTools />} step="STEP 1" title="BUILD YOUR TEAM"/>

            <StepCard icon={<FaBuilding />} step="STEP 2" title="COMPETE ACROSS INDIA"/>

            <StepCard icon={<FaAward />} step="STEP 3" title="EARN NATIONAL RANKING & VALUE"/>

            <StepCard icon={<FaUsers />} step="STEP 4" title="JOIN THE LEAGUE"/>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Journey;