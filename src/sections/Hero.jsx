// src/sections/Hero.jsx
import { motion } from "framer-motion";

// --- IMPORT ASET GAMBAR ---
import awanBg from "../assets/images/awan-bg.jpeg";
import gedungPng from "../assets/images/gedung-transparan.png";

const Hero = () => {
  const animTransition = {
    duration: 1.8,
    ease: [0.25, 0.1, 0.25, 1],
  };

  const textVariants = {
    hidden: { y: -150, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ...animTransition, delay: 0.8 },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans bg-[#0a192f]">
      {/* LAYER 1: LANGIT */}
      <motion.div
        initial={{ scale: 1.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <img src={awanBg} alt="Langit" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </motion.div>

      {/* LAYER 2: TEKS SOLID */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-40 md:pt-56 px-4">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none drop-shadow-lg text-center uppercase"
        >
          TEKNIK
          <br />
          INFORMATIKA
        </motion.h1>
      </div>

      {/* LAYER 3: GEDUNG PNG */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ ...animTransition, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full z-20 flex items-end"
      >
        <img
          src={gedungPng}
          alt="Gedung"
          className="w-full h-auto max-h-screen object-cover drop-shadow-2xl"
        />
      </motion.div>

      {/* LAYER 4: TEKS STROKE */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-start pt-40 md:pt-56 px-4 pointer-events-none">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-center uppercase"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
            color: "transparent",
          }}
        >
          TEKNIK
          <br />
          INFORMATIKA
        </motion.h1>
      </div>

      {/* ========================================================= */}
      {/* PENAMBAHAN BARU: GRADIENT MASK (FOG) DI BAWAH             */}
      {/* ========================================================= */}
      {/* 1. h-64: Tinggi gradasi cukup besar biar smooth
          2. from-[#0a192f]: Warna bawah sama dengan background Labs (Menyatu)
          3. to-transparent: Warna atas transparan (biar gedung atas kelihatan)
          4. z-40: Paling depan (menutupi kaki gedung)
      */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0a192f] via-[#0a192f]/90 to-transparent z-40 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
