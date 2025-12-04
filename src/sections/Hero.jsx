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
      {/* 1. BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
        {/* Overlay gelap agar teks terbaca */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* 2. LAYOUT UTAMA (Flexbox) */}
      <div className="relative z-10 w-full h-full flex flex-row">
        {/* --- KOLOM KIRI (KONTEN) --- */}
        {/* Padding-top besar karena ada Navbar di atas */}
        <div className="w-1/2 h-full flex flex-col justify-center pl-16 pr-8 pt-20">
          {/* Gambar Tulisan: INOVASI TANPA BATAS */}
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            src={imgInovasi}
            alt="Inovasi Tanpa Batas"
            className="w-[80%] max-w-lg mb-6 object-contain"
          />

          {/* Paragraf Teks */}
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg leading-relaxed max-w-xl text-justify"
          >
            Di sini, ide-ide besar bertemu dengan teknologi canggih. Kami
            mempersiapkan Anda menjadi talenta digital yang tidak hanya siap
            kerja, tetapi juga mampu menciptakan solusi bagi permasalahan nyata
            melalui rekayasa perangkat lunak dan kecerdasan buatan.
          </motion.p>
        </div>

        {/* --- KOLOM KANAN (PANEL BIRU) --- */}
        <div className="w-1/2 h-full flex flex-col justify-end items-end">
          {/* Panel Biru Besar */}
          {/* 'h-[85%]' agar tidak mentok sampai atas navbar */}
          {/* 'rounded-tl-[100px]' adalah kunci lengkungan kiri atas */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="relative w-[90%] h-[85%] bg-[#000080] rounded-tl-[100px] flex items-center justify-center shadow-2xl overflow-hidden"
          >
            {/* Container Gambar Vertikal */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Gambar INFORMATICS (Stroke/Garis) - Di Belakang/Geser sedikit */}
              <motion.img
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                src={imgInfoStroke}
                alt="Informatics Stroke"
                className="absolute h-[80%] object-contain translate-x-4 opacity-50"
              />

              {/* Gambar INFORMATICS (Putih Solid) - Di Depan */}
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                src={imgInfoWhite}
                alt="Informatics White"
                className="absolute h-[80%] object-contain -translate-x-4 z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
