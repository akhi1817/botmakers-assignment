import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
  return (
<header className="fixed top-0 left-0 w-full z-50 bg-gray-800 backdrop-blur-md"> 
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        
        {/* Logo */}
          <Link to="/">
          <img
            src={logo}
            alt="BotLeague Logo"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300">
<Link to="/events" className="heading hover:text-red-500 transition">Events</Link>  
 <Link to="/programs" className="heading hover:text-red-500 transition">Programs</Link>
 <Link to="/community" className="heading hover:text-red-500 transition">Community</Link>
 <Link to="/partner" className="heading hover:text-red-500 transition"> Partner</Link>
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