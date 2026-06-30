    import DisciplineCard from "./DisciplineCard";
    import circuit from "../../assets/images/circuit.png";
    import roboRace from "../../assets/images/Robo-Race.png";
    import lineFollower from "../../assets/images/Line-Follower.png";
    import rcRace from "../../assets/images/RC-Racing.png";
    import drone from "../../assets/images/FPV-Drone.png";
    import hockey from "../../assets/images/Robo-Hockey.png";
    import war from "../../assets/images/Robo-War.png";

    const Disciplines = () => {
    return (
        <section className="bg-black py-24">

        <div className="max-w-7xl mx-auto px-6">

            {/* Small Title */}

            <p className="heading text-red-500 text-2xl uppercase font-bold tracking-wider">
            Sports
            </p>

            {/* Main Title */}

            <h2 className="heading text-white text-4xl uppercase mt-2">
            Competition Disciplines
            </h2>

            {/* Grid */}

            <div className="grid grid-cols-4 gap-5 mt-10">

            <DisciplineCard
                image={roboRace}
                title="Robo Race"
            />

            <DisciplineCard
                image={lineFollower}
                title="Line Follower"
            />

            <DisciplineCard
                image={rcRace}
                title="RC Racing"
            />

            <DisciplineCard
                image={drone}
                title="FPV Drone Racing and Aeromodeling"
            />

            <DisciplineCard
                image={hockey}
                title="Robo Hockey"
            />

            <DisciplineCard
                image={war}
                title="Robo War"
            />


            <div className="col-span-2 flex items-center justify-center">

        <img
            src={circuit}
            alt="Circuit"
            className="w-full h-full object-contain opacity-50"
        />

    </div>

            </div>

        </div>
        </section>
    );
    };

    export default Disciplines;