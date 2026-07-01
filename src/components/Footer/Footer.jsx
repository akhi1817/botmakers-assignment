import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#2B2B2B] mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 */}

          <div>

            <h3 className="text-white uppercase text-lg font-semibold tracking-wider mb-6">
              QUICK LINKS
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="/arena" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  The Arena
                </a>
              </li>

              <li>
                <a href="/episodes" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  Episodes
                </a>
              </li>

              <li>
                <a href="/national-rankings" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  National Rankings
                </a>
              </li>

              <li>
                <a href="/programs" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  Programs
                </a>
              </li>

              <li>
                <a href="/rulebooks" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  Rulebooks
                </a>
              </li>

            </ul>

          </div>

          {/* Column 2 */}

          <div>

          

            <ul className="space-y-4 mt-12">

              <li className="text-[#9D9D9D] hover:text-[#FF4D4D] cursor-pointer">
                 <a href="/join-the-team" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                Join the Team
                </a>
              </li>

              <li className="text-[#9D9D9D] hover:text-[#FF4D4D] cursor-pointer">
                 <a href="/sponsorships" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                Sponsorships
                </a>
              </li>

              <li className="text-[#9D9D9D] hover:text-[#FF4D4D] cursor-pointer">
                <a href="/Help center" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  Help Center</a>
              </li>

              <li className="text-[#9D9D9D] hover:text-[#FF4D4D] cursor-pointer">
                 <a href="/contact" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                Contact Us
                </a>
              </li>

              <li className="text-[#9D9D9D] hover:text-[#FF4D4D] cursor-pointer">
                 <a href="/legal" className="text-[#9D9D9D] hover:text-[#FF4D4D] transition">
                  Legal
                  </a>
              </li>

            </ul>

          </div>

          {/* Column 3 */}

          <div />

          {/* Column 4 */}

          <div>

            <h3 className="text-white uppercase text-lg font-semibold tracking-wider mb-6">
              SOCIAL MEDIA
            </h3>

            <div className="flex items-center gap-4">

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#444] flex items-center justify-center text-white hover:bg-[#FF4D4D] hover:border-[#FF4D4D] transition"
              >
                <FaYoutube size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#444] flex items-center justify-center text-white hover:bg-[#FF4D4D] hover:border-[#FF4D4D] transition"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#444] flex items-center justify-center text-white hover:bg-[#FF4D4D] hover:border-[#FF4D4D] transition"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full border border-[#444] flex items-center justify-center text-white hover:bg-[#FF4D4D] hover:border-[#FF4D4D] transition"
              >
                <FaXTwitter size={18} />
              </a>

            </div>

          </div>

        </div>

      

      </div>

    </footer>
  );
};

export default Footer;