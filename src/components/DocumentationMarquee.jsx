// src/components/DocumentationMarquee.jsx
import { motion } from "framer-motion";

const DocumentationMarquee = ({ images, duration = 20, reverse = false }) => {
  return (
    <div className="flex overflow-hidden select-none w-full relative">
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        // PERUBAHAN DISINI: gap-4 -> gap-8 (Memberi jarak lebih lebar antar gambar)
        className="flex flex-shrink-0 gap-8 px-4"
      >
        {/* RENDER PERTAMA */}
        {images.map((img, i) => (
          <div
            key={i}
            className="relative w-[250px] h-[160px] md:w-[350px] md:h-[220px] flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer border border-white/10"
          >
            <img
              src={img}
              alt={`documentation-${i}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-all" />
          </div>
        ))}
      </motion.div>

      {/* RENDER KEDUA (DUPLIKAT) */}
      <motion.div
        initial={{ x: reverse ? "-100%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-100%" }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
        }}
        // PERUBAHAN DISINI: gap-4 -> gap-8
        className="flex flex-shrink-0 gap-8 px-4"
      >
        {images.map((img, i) => (
          <div
            key={`dup-${i}`}
            className="relative w-[250px] h-[160px] md:w-[350px] md:h-[220px] flex-shrink-0 overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer border border-white/10"
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
