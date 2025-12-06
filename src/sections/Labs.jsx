// src/sections/Labs.jsx
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

// --- IMPORT ASET GAMBAR ---
import bg1 from "../assets/images/lab-bg-1-test.png";
import bg2 from "../assets/images/lab-bg-2-test.png";
import bg3 from "../assets/images/lab-bg-3-test.png";
import bg4 from "../assets/images/lab-bg-4-test.png";
import bg5 from "../assets/images/lab-bg-5-test.png";

import titleVert1 from "../assets/images/text-cloud-vert.png";
import titleVert2 from "../assets/images/text-iot-vert.png";
import titleVert3 from "../assets/images/text-ai-vert.png";
import titleVert4 from "../assets/images/text-ubi-vert.png";
import titleVert5 from "../assets/images/text-anim-vert.png";

import titleHorz1 from "../assets/images/text-cloud-horz.png";
import titleHorz2 from "../assets/images/text-iot-horz.png";
import titleHorz3 from "../assets/images/text-ai-horz.png";
import titleHorz4 from "../assets/images/text-ubi-horz.png";
import titleHorz5 from "../assets/images/text-anim-horz.png";

const labs = [
  {
    id: 1,
    titleVertical: titleVert1,
    titleHorizontal: titleHorz1,
    bg: bg1,
    desc: "Mempelajari infrastruktur awan, virtualisasi, dan manajemen server skala besar untuk kebutuhan industri modern.",
  },
  {
    id: 2,
    titleVertical: titleVert2,
    titleHorizontal: titleHorz2,
    bg: bg2,
    desc: "Fokus pada integrasi perangkat keras dan lunak, sensor pintar, dan otomatisasi rumah hingga kota pintar.",
  },
  {
    id: 3,
    titleVertical: titleVert3,
    titleHorizontal: titleHorz3,
    bg: bg3,
    desc: "Mengembangkan algoritma cerdas, machine learning, dan pengolahan data untuk menciptakan sistem yang bisa belajar.",
  },
  {
    id: 4,
    titleVertical: titleVert4,
    titleHorizontal: titleHorz4,
    bg: bg4,
    desc: "Komputasi di mana saja dan kapan saja. Fokus pada mobile development dan sistem terdistribusi.",
  },
  {
    id: 5,
    titleVertical: titleVert5,
    titleHorizontal: titleHorz5,
    bg: bg5,
    desc: "Pusat kreativitas digital, animasi 3D, game development, dan teknologi multimedia interaktif.",
  },
];

const Labs = () => {
  const [activeLab, setActiveLab] = useState(null);
  const containerRef = useRef(null);

  // amount: 0.3 artinya animasi baru jalan setelah 30% area kartu terlihat (biar tidak kepotong)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <section className="h-screen w-full bg-black flex items-center justify-center px-4 md:px-10 pt-20 overflow-hidden">
      <div
        ref={containerRef}
        className="w-full h-[85%] flex flex-row gap-4 max-w-7xl"
      >
        {labs.map((lab, index) => (
          <motion.div
            key={lab.id}
            layout
            onClick={() => setActiveLab(activeLab === lab.id ? null : lab.id)}
            // LOGIC ANIMASI
            animate={{
              flex: activeLab === lab.id ? 3.5 : activeLab === null ? 1 : 0.5,
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 100, // Jarak muncul dari bawah lebih jauh (100px) biar dramatis
              scale: isInView ? 1 : 0.9, // Scale awal sedikit lebih besar (0.9) biar smooth
            }}
            // LOGIC TRANSISI (Disini kuncinya)
            transition={{
              // --- Animasi Masuk (Entrance) ---
              // Delay dikali 0.2 (sebelumnya 0.1) agar jeda antar kartu lebih terasa
              delay: index * 0.2,

              duration: 1.0, // Gerakan memakan waktu 1 detik (sangat smooth)
              type: "spring",
              stiffness: 50, // Pegasnya "lemas" (sebelumnya 100), jadi tidak menyentak
              damping: 20, // Pengereman halus

              // --- Override Khusus saat Klik (Biar tetap responsif) ---
              flex: {
                delay: 0, // Saat diklik langsung jalan (tanpa delay)
                duration: 0.8,
                ease: "circOut", // Easing curve yang enak buat resize
              },
            }}
            className={`relative h-full rounded-[30px] overflow-hidden cursor-pointer shadow-2xl border border-white/10 group ${
              activeLab === lab.id ? "" : "hover:brightness-110"
            }`}
          >
            {/* Background Image */}
            <img
              src={lab.bg}
              alt="Lab Background"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 transition-colors duration-700 ${
                activeLab === lab.id
                  ? "bg-black/40"
                  : "bg-black/30 group-hover:bg-black/10"
              }`}
            />

            {/* KONTEN TERTUTUP (VERTICAL) */}
            {activeLab !== lab.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-2"
              >
                <img
                  src={lab.titleVertical}
                  alt="Title Vertical"
                  className="h-[60%] w-auto object-contain pointer-events-none drop-shadow-md"
                />
              </motion.div>
            )}

            {/* KONTEN TERBUKA (HORIZONTAL) */}
            {activeLab === lab.id && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-start"
              >
                <img
                  src={lab.titleHorizontal}
                  alt="Title Horizontal"
                  className="h-12 md:h-16 w-auto object-contain mb-3 drop-shadow-lg"
                />

                <p className="text-gray-200 text-xs md:text-base leading-relaxed max-w-lg font-medium drop-shadow-md">
                  {lab.desc}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Labs;
