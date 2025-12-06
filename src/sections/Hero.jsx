// src/sections/Hero.jsx
import { motion } from "framer-motion";

// --- IMPORT ASET GAMBAR ---
import awanBg from "../assets/images/awan-bg.jpeg";
import gedungPng from "../assets/images/gedung-transparan.png";

const Hero = () => {
  // Definisi Easing yang Sangat Smooth (Premium Feel)
  const smoothTransition = {
    duration: 1.8, // Durasi lebih lama biar elegan
    ease: [0.25, 0.1, 0.25, 1], // Kurva Bezier custom (lambat di akhir)
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans bg-[#0a192f]">
      {/* -------------------------------------------------- */}
      {/* LAYER 1: BACKGROUND AWAN (Paling Belakang)         */}
      {/* -------------------------------------------------- */}
      <motion.div
        initial={{ scale: 1.8 }} // Zoom tidak terlalu ekstrem biar tidak pecah
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }} // Gerakan background sangat pelan
        className="absolute inset-0 z-0"
      >
        <img
          src={awanBg}
          alt="Langit Berawan"
          className="w-full h-full object-cover"
        />
        {/* Overlay biru tipis */}
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
      </motion.div>

      {/* -------------------------------------------------- */}
      {/* LAYER 2: GEDUNG PNG (Tengah)                       */}
      {/* -------------------------------------------------- */}
      <motion.div
        initial={{ y: "100%" }} // Mulai dari bawah layar
        animate={{ y: 0 }} // Naik ke posisi normal
        transition={{
          ...smoothTransition,
          delay: 0.5, // Muncul hampir bersamaan dengan awan, tapi sedikit telat
        }}
        className="absolute bottom-0 left-0 w-full z-10 flex items-end"
      >
        <img
          src={gedungPng}
          alt="Gedung Teknik Informatika"
          className="w-full h-auto max-h-screen object-cover drop-shadow-2xl"
        />
      </motion.div>

      {/* -------------------------------------------------- */}
      {/* LAYER 3: TEKS JUDUL (Paling Depan)                 */}
      {/* -------------------------------------------------- */}
      {/* PERUBAHAN POSISI:
          - justify-start: Agar konten mulai dari atas (bukan tengah)
          - pt-40 md:pt-48: Memberikan jarak dari atap langit (bisa diatur sesuai selera)
      */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-start pt-40 md:pt-56 px-4">
        <div className="relative text-center">
          {/* Teks Utama (Putih Solid) */}
          <motion.h1
            initial={{ y: -150, opacity: 0 }} // Turun dari atas
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ...smoothTransition,
              delay: 0.8, // Muncul belakangan setelah gedung sudah agak naik
            }}
            className="text-white text-6xl md:text-8xl font-black tracking-tighter leading-none drop-shadow-lg text-center uppercase relative z-10"
          >
            TEKNIK
            <br />
            INFORMATIKA
          </motion.h1>

          {/* Teks Stroke (Transparan/Garis Pinggir) */}
          {/* Ini yang memberikan efek 'Tembus Pandang' di atas gedung */}
          <motion.h1
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ...smoothTransition,
              delay: 0.8,
            }}
            className="absolute inset-0 z-[-1] text-6xl md:text-8xl font-black tracking-tighter leading-none text-center uppercase select-none"
            style={{
              WebkitTextStroke: "2px rgba(255, 255, 255, 0.3)", // Garis putih transparan
              color: "transparent",
            }}
          >
            TEKNIK
            <br />
            INFORMATIKA
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
