// src/sections/Academics.jsx
import { motion } from "framer-motion";

const Academics = () => {
  return (
    // Background: Melanjutkan gradasi dari section sebelumnya (Biru Gelap ke Hitam)
    <section className="min-h-screen w-full bg-gradient-to-b from-[#0a192f] to-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Ornamen Background Tipis (Opsional, biar gak sepi banget) */}
      <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
      </div>

      {/* Konten Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 px-4"
      >
        <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
          ACADEMICS
        </h2>

        <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full" />

        <p className="text-gray-400 text-lg md:text-2xl font-light tracking-wide">
          Curriculum & Research Areas
        </p>
        <p className="text-gray-600 text-sm mt-4 uppercase tracking-widest border border-gray-800 inline-block px-4 py-2 rounded-full">
          Coming Soon
        </p>
      </motion.div>
    </section>
  );
};

export default Academics;
