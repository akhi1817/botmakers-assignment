import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#2d2d2d] mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center">


        {/* Quick Links */}

<div className="w-full md:w-2/3">
  <h3 className="heading text-white uppercase text-xl mb-6">
    Quick Links
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8 text-gray-400">

    <a href="#" className="hover:text-red-500 transition">
      The Arena
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Episodes
    </a>

    <a href="#" className="hover:text-red-500 transition">
      National Rankings
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Programs
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Rulebooks
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Join the Team
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Sponsorships
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Help Center
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Contact Us
    </a>

    <a href="#" className="hover:text-red-500 transition">
      Legal
    </a>

  </div>
</div>

          {/* Social Media */}

          <div className="mt-10 md:mt-0">

            <h3 className="heading text-white uppercase text-lg mb-6 text-center">
              Social Media
            </h3>

            <div className="flex gap-5">

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#444] flex items-center justify-center text-gray-300 hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#444] flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#444] flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-full border border-[#444] flex items-center justify-center text-gray-300 hover:bg-white hover:text-black transition-all duration-300"
              >
                <FaXTwitter size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* Bottom Line */}

        <div className="border-t border-[#2d2d2d] mt-10 pt-6 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BotLeague. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;