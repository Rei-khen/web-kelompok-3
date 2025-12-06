// src/sections/Lecturers.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// --- GAMBAR PLACEHOLDER ---
import lecturerImg from "../assets/images/lab-bg-1.png";

const lecturersData = Array.from({ length: 25 }).map((_, i) => ({
  id: i + 1,
  name: `Dosen ${i + 1}`,
  title: ["M.Kom", "S.T., M.T.", "Ph.D", "Dr. Eng"][i % 4],
  role: ["Head of Lab", "Lecturer", "Researcher", "Dean"][i % 4],
  image: lecturerImg,
}));

const Lecturers = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="h-screen w-full bg-gradient-to-b from-black to-[#0a192f] flex flex-col justify-center items-center overflow-hidden">
      {/* CONTAINER UTAMA */}
      {/* PERUBAHAN 1: max-w diperbesar jadi 90% supaya area geraknya luas */}
      <div className="w-full max-w-[70%] h-[60vh] flex gap-1 items-stretch">
        {lecturersData.map((dosen) => (
          <motion.div
            key={dosen.id}
            onHoverStart={() => setActiveId(dosen.id)}
            onClick={() => setActiveId(dosen.id)}
            // --- LOGIKA FLEX ---
            // PERUBAHAN 2: Rasio diubah jadi 30 banding 1
            // Active: 30 (Sangat Dominan/Besar)
            // Inactive: 1 (Sangat Tipis)
            animate={{
              flex: activeId === dosen.id ? 30 : 1,
            }}
            transition={{
              duration: 0.1, // Sedikit diperlambat biar dramatis
              ease: [0.25, 0.25, 0.25, 0.25],
            }}
            className={`relative overflow-hidden cursor-pointer shadow-lg transition-all duration-500
              ${
                activeId === dosen.id
                  ? "grayscale-0 border-[1.5px] border-white/50 z-10"
                  : "grayscale hover:grayscale-0 border-r border-white/10 opacity-50 hover:opacity-100"
              }
            `}
          >
            {/* Foto */}
            <img
              src={dosen.image}
              alt={dosen.name}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300
                ${activeId === dosen.id ? "opacity-100" : "opacity-60"}
            `}
            />

            {/* Konten (Hanya Muncul Saat Aktif) */}
            {activeId === dosen.id && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }} // Delay nunggu kartu melebar dulu
                className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end whitespace-nowrap"
              >
                <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight drop-shadow-md">
                  {dosen.name}
                </h3>
                <p className="text-blue-400 font-bold text-lg mt-2">
                  {dosen.title}
                </p>
                <div className="flex items-center gap-4 mt-6 text-white/60">
                  <span className="text-sm border border-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
                    {dosen.role}
                  </span>

                  {/* Social Icons */}
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer">
                      <span className="text-xs font-bold">in</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/20 hover:bg-pink-600 transition flex items-center justify-center cursor-pointer">
                      <span className="text-xs font-bold">ig</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Indikator Tertutup (Garis Tipis) */}
            {activeId !== dosen.id && (
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Garis vertikal penanda */}
                <div className="w-[1px] h-12 bg-white/30"></div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Lecturers;
