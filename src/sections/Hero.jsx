// src/sections/Hero.jsx
import { motion } from "framer-motion";

// Import Gambar (Pastikan nama file sesuai Langkah 1)
import imgInovasi from "../assets/images/text-inovasi.png";
import imgInfoWhite from "../assets/images/text-informatics-white.png";
import imgInfoStroke from "../assets/images/text-informatics-stroke.png";
import videoBg from "../assets/images/bg-video.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden font-sans bg-black">
      {/* 1. BACKGROUND VIDEO & OVERLAY */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
      </div>

      {/* 2. LAYOUT UTAMA */}
      <div className="relative z-20 w-full h-full flex flex-row justify-between">
        {/* --- KOLOM KIRI (KONTEN) --- */}
        <div className="w-1/2 h-full flex flex-col justify-center items-start pl-16 pr-8 pt-24">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src={imgInovasi}
            alt="Inovasi Tanpa Batas"
            className="max-w-xl mb-4 object-contain drop-shadow-xl"
          />

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg leading-relaxed max-w-lg text-left drop-shadow-md font-medium"
          >
            Di sini, ide-ide besar bertemu dengan teknologi canggih. Kami
            mempersiapkan Anda menjadi talenta digital yang tidak hanya siap
            kerja, tetapi juga mampu menciptakan solusi bagi permasalahan nyata
            melalui rekayasa perangkat lunak dan kecerdasan buatan.
          </motion.p>
        </div>

        {/* --- KOLOM KANAN (PANEL BIRU) --- */}
        <div className="w-[20%] h-full flex flex-col justify-center items-end pb-0">
          {/* Panel Biru Besar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="relative w-full h-[70%] bg-[#00008B] rounded-l-[60px] flex items-center justify-center shadow-2xl overflow-hidden border-l-[4px] border-blue-500/20"
          >
            {/* Container Gambar Vertikal */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Gambar INFORMATICS (Stroke) - Belakang & Lebih Bawah */}
              <motion.img
                initial={{ y: 150, opacity: 0 }} // Mulai dari bawah sekali
                animate={{ y: 40, opacity: 1 }} // PERBAIKAN: Berhenti di y:40 (agak bawah)
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                src={imgInfoStroke}
                alt="Informatics Stroke"
                className="absolute h-[90%] object-contain translate-x-10 opacity-50 scale-105"
              />

              {/* Gambar INFORMATICS (Putih Solid) - Depan & Lebih Atas */}
              <motion.img
                initial={{ y: -150, opacity: 0 }} // Mulai dari atas sekali
                animate={{ y: -40, opacity: 1 }} // PERBAIKAN: Berhenti di y:-40 (agak atas)
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                src={imgInfoWhite}
                alt="Informatics White"
                className="absolute h-[90%] object-contain -translate-x-10 z-10 drop-shadow-2xl scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
