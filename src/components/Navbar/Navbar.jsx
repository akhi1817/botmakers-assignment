import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
<header className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md">      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white heading">
          BOT<span className="text-red-500">LEAGUE</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300">
          <a href="#" className="hover:text-red-500 transition">Events</a>
          <a href="#" className="hover:text-red-500 transition">Programs</a>
          <a href="#" className="hover:text-red-500 transition">Community</a>
          <a href="#" className="hover:text-red-500 transition">Partner</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-5 py-2 border border-gray-600 text-white rounded-md hover:bg-white hover:text-black transition">
            Login
          </button>

          <button className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white">
            Register Now
          </button>
        </div>

        {/* Mobile */}
        <FaBars className="text-white text-2xl md:hidden" />
      </div>
    </header>
  );
};

export default Navbar;