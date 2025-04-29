import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Fitur from "../Fitur";

const Home = () => {
  const navigate = useNavigate();

  const handleScrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[95vh] px-6 md:px-12 lg:px-24 bg-gradient-to-t from-blue-600 to-blue-400 text-white text-center">
        {/* Background Blur Effects */}
        <div className="absolute w-[250px] h-[250px] bg-blue-300 opacity-30 blur-3xl rounded-full top-8 left-8"></div>
        <div className="absolute w-[250px] h-[250px] bg-purple-300 opacity-30 blur-3xl rounded-full bottom-8 right-8"></div>

        <div className="z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Temukan Game Terbaik di <span className="text-white underline underline-offset-4">404Game</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8">
            Mulai petualanganmu dengan koleksi game seru, tanpa iklan, gratis, dan aman!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // onClick={() => navigate("/games")}
              className="px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-md shadow-sm hover:bg-gray-100 transition duration-500"
            >
              Temui Game
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.5 }}
              onClick={handleScrollToFooter}
              className="px-6 py-3 border border-white text-white font-semibold text-lg rounded-md hover:bg-white hover:text-blue-600 transition duration-500"
            >
              Kontak Kami
            </motion.button>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <Fitur />
    </div>
  );
};

export default Home;
