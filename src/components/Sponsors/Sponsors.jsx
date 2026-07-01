import nitDelhi from "../../assets/images/nit-delhi.png";
import indianBit from "../../assets/images/indian-bit.png";
import nitSilchar from "../../assets/images/nit-silchar.png";
import roboCompany1 from "../../assets/images/robo-company.png";
import iitBombay from "../../assets/images/iit-bombay.png";
import roboCompany2 from "../../assets/images/robo-company2.png";

const Sponsors = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-white uppercase text-3xl font-bold tracking-wider mb-14">
          Sponsors
        </h2>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">

          {/* Sponsor 1 */}
          <div className="flex items-center gap-5">
            <img
              src={nitDelhi}
              alt="NIT Delhi"
              className="w-25 h-25 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-gray-300 uppercase text-lg font-medium tracking-wide">
              NIT DELHI
            </h3>
          </div>

          {/* Sponsor 2 */}
          <div className="flex items-center gap-5">
            <img
              src={indianBit}
              alt="Indian BIT"
              className="w-35 h-35 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-gray-300 uppercase text-lg font-medium tracking-wide">
              INDIAN BIT
            </h3>
          </div>

          {/* Sponsor 3 */}
          <div className="flex items-center gap-5">
            <img
              src={nitSilchar}
              alt="NIT Silchar"
              className="w-25 h-25 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-gray-300 uppercase text-lg font-medium tracking-wide">
              NIT SILCHAR
            </h3>
          </div>

          {/* Sponsor 4 */}
          <div className="flex items-center gap-5">
            <img
              src={roboCompany1}
              alt="Robo Company"
              className="w-40 h-40 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-gray-300 uppercase text-lg font-medium tracking-wide">
              ROBO <br/>COMPANY
            </h3>
          </div>

          {/* Sponsor 5 */}
          <div className="flex items-center gap-5">
            <img
              src={iitBombay}
              alt="IIT Bombay"
              className="w-25 h-25 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-gray-300 uppercase text-lg font-medium tracking-wide">
              IIT BOMBAY
            </h3>
          </div>

          {/* Sponsor 6 */}
          <div className="flex items-center gap-5">
            <img
              src={roboCompany2}
              alt="General Robotics"
              className="w-40 h-40 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
            <h3 className="text-gray-300 uppercase text-lg font-medium tracking-wide">
              ROBO<br/> COMPANY
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Sponsors;