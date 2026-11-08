import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
     { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
   

  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 pt-5">
        <div className="flex items-center justify-between h-20 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl px-8">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-[#3C3489]"
          >
            Dexus<span className="text-[#D4537E]">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium transition duration-300 ${
                    isActive
                      ? "text-[#7F77DD]"
                      : "text-gray-700 hover:text-[#7F77DD]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:block bg-[#EF9F27] hover:bg-[#8500a0] transition-all duration-300 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-[#3C3489]"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-xl overflow-hidden">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-6 py-4 transition ${
                    isActive
                      ? "bg-[#7F77DD]/10 text-[#7F77DD] font-semibold"
                      : "hover:bg-gray-100 text-gray-700"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="p-6">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center bg-[#EF9F27] hover:bg-[#D4537E] text-white py-3 rounded-full font-semibold transition"
              >
                Get Started
              </Link>
            </div>

          </div>
        )}
      </div>
    </header>
  );
}