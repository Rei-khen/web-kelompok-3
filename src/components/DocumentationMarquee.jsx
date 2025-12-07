// src/components/DocumentationMarquee.jsx
import { motion } from "framer-motion";

const DocumentationMarquee = ({ images, duration = 20, reverse = false }) => {
  return (
    <div className="flex overflow-hidden select-none w-full relative gradient-mask-r-0">
      {/*
        Gradient Mask (Opsional):
        Menambahkan efek pudar di kiri kanan agar tidak terpotong kaku.
        Membutuhkan plugin tailwind-scrollbar-hide atau custom CSS.
        Jika tidak ingin dipakai, hapus className "gradient-mask-r-0" di atas.
      */}

      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-shrink-0 gap-4 px-2"
      >
        {/* RENDER PERTAMA */}
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          >
            <img
              src={img}
              alt={`documentation-${i}`}
              className="object-cover w-full h-full"
            />
            {/* Overlay tipis */}
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all" />
          </div>
        ))}
      </motion.div>

      {/* RENDER KEDUA (DUPLIKAT UNTUK LOOPING) */}
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-shrink-0 gap-4 px-2"
      >
        {images.map((img, i) => (
          <div
            key={`dup-${i}`}
            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          >
            <img
              src={img}
              alt={`documentation-dup-${i}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default DocumentationMarquee;
