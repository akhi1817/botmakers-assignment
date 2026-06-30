import LiveNow from "./LiveNow";
import Upcoming from "./Upcoming";
import PastResults from "./PastResults";

const Competition = () => {
  return (
    <section className="bg-[#1a1a1a] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="heading text-5xl text-white uppercase mb-14">
          Competitions & Events
        </h2>

        <div className="grid lg:grid-cols-3 gap-6">

          <LiveNow />

          <Upcoming />

          <PastResults />

        </div>

      </div>
    </section>
  );
};

export default Competition;