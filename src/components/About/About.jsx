import FeatureCard from "./FeatureCard";
import AboutImg from "../../assets/images/about.png"

const About = () => {
  return (
    <section className="bg-[#1c1c1c] py-24">

      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <h2 className="heading text-white text-4xl font-bold uppercase mb-20 ml-8">
          What is BotLeague?
        </h2>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-16 items-center">

          {/* Left */}

          <div className="grid grid-cols-2 gap-y-20 gap-x-16">

            <FeatureCard
              number="1."
              title="Structured Events"
              description='"From one-off events to a year-round competitive season."'
            />

            <FeatureCard
              number="2."
              title="Digital Identity"
              description='"Your professional robotics legacy, tracked and verified."'
            />

            <FeatureCard
              number="3."
              title="National Ranking"
              description='"Benchmark your skills against the best engineers in India."'
            />

            <FeatureCard
              number="4."
              title="Career Pathway"
              description='"Turning arena victories into real-world industry opportunities."'
            />

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={AboutImg}
              alt="BotLeague"
              className="w-80 object-contain"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;