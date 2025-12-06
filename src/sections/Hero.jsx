// src/sections/Hero.jsx
import { motion } from "framer-motion";

// --- IMPORT ASET GAMBAR ---
import awanBg from "../assets/images/awan-bg.jpeg"; // Pastikan ekstensi file benar (.jpg/.jpeg)
import gedungPng from "../assets/images/gedung-transparan.png";

const Hero = () => {
  // Definisi Transisi (Kita pakai satu variabel biar semua layer sinkron)
  const animTransition = {
    duration: 1.8,
    ease: [0.25, 0.1, 0.25, 1],
  };

  // Definisi Gerakan Teks (Biar Solid & Stroke geraknya sama persis)
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
      {/* ========================================================= */}
      {/* LAYER 1: LANGIT (Paling Belakang / z-0)                   */}
      {/* ========================================================= */}
      <motion.div
        initial={{ scale: 1.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute inset-0 z-0"
      >
        <img src={awanBg} alt="Langit" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </motion.div>

      {/* ========================================================= */}
      {/* LAYER 2: TEKS SOLID (Di Belakang Gedung / z-10)           */}
      {/* ========================================================= */}
      {/* Teks ini akan terlihat di langit, tapi TERTUTUP oleh gedung */}
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

      {/* ========================================================= */}
      {/* LAYER 3: GEDUNG PNG (Di Depan Teks Solid / z-20)          */}
      {/* ========================================================= */}
      {/* Gedung ini akan menutupi teks solid di Layer 2 */}
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

      {/* ========================================================= */}
      {/* LAYER 4: TEKS STROKE (Paling Depan / z-30)                */}
      {/* ========================================================= */}
      {/* Teks ini hanya garis pinggir, berada DI ATAS gedung */}
      {/* Posisi & Padding HARUS SAMA PERSIS dengan Layer 2 biar nempel pas */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-start pt-40 md:pt-56 px-4 pointer-events-none">
        <motion.h1
          variants={textVariants} // Gunakan varian animasi yg sama
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none text-center uppercase"
          style={{
            WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)", // Garis Putih
            color: "transparent", // Isinya transparan
          }}
        >
          TEKNIK
          <br />
          INFORMATIKA
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
