import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sm:absolute fixed top-0 left-0 w-full backdrop-blur-md sm:bg-white/10 bg-blue-500/80 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1
          className="text-2xl md:text-3xl font-bold text-white cursor-pointer"
          onClick={() => navigate("/")}
        >
          Data Cloudinary
        </h1>

        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-200 transition">
              Beranda
            </Link>
          </li>
          <li>
            {/* <Link to="/games" className="hover:text-gray-200 transition">
              Game
            </Link> */}
          </li>
          <li>
            <Link to="/kebijakan-privasi" className="hover:text-gray-200 transition">
              Kebijakan Privasi
            </Link>
          </li>
          <li>
            <button
              onClick={handleScrollToFooter}
              className="hover:text-gray-200 transition"
            >
              Kontak
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <input
            className="hidden md:block p-2 rounded-md bg-white/20 placeholder-white text-white w-60 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Cari..."
            type="text"
          />

          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white/90 backdrop-blur-md shadow-md rounded-b-md"
        >
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-900 font-semibold">
            <li>
              <Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/games" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Game
              </Link>
            </li>
            <li>
              <Link to="/kebijakan-privasi" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>
                Kebijakan Privasi
              </Link>
            </li>
            <li>
              <button onClick={handleScrollToFooter} className="hover:text-blue-500">
                Kontak
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
