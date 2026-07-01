import FeatureItem from "./FeatureItem";

import leaderboard from "../../assets/images/leaderboard.png";
import { features } from "./Feature";

const Register = () => {
  return (
    <section className="bg-[#181818] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <p className="heading text-[#FF3B3B] uppercase font-bold tracking-[3px] text-lg">
              WHY REGISTER ?
            </p>

            <h2 className="heading text-white uppercase text-4xl font-bold mt-2 leading-tight">
              THE LEAGUE ADVANTAGE
            </h2>

            <div className="mt-14 space-y-12">
              {features.map((item) => (
                <FeatureItem
                  key={item.title}
                  {...item}
                />
              ))}
            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src={leaderboard}
              alt="Leaderboard"
              className="w-full max-w-md h-full"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Register;