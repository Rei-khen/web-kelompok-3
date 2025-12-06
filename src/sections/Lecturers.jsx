// src/sections/Lecturers.jsx
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
  const sectionRef = useRef(null);

  // --- LOGIC SCROLLYTELLING (ANTI-BUG) ---
  // 1. Ambil data scroll dari container section ini
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"], // Mulai hitung saat section nempel atas, selesai saat bagian bawah nempel bawah
  });

  // 2. Ubah progress scroll (0 - 1) menjadi ID Dosen (1 - 25)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Mapping: 0 -> 1, 1 -> 25
    const rawIndex = Math.floor(latest * lecturersData.length) + 1;
    // Pastikan angka tidak bocor (min 1, max 25)
    const clampedIndex = Math.min(Math.max(rawIndex, 1), 25);

    setActiveId(clampedIndex);
  });

  return (
    // CONTAINER UTAMA (SANGAT TINGGI)
    // h-[500vh] artinya tinggi section ini 5x layar monitor.
    // Ini memberikan ruang bagi user untuk "scroll lama" tanpa halaman bergerak.
    <section ref={sectionRef} className="relative h-[500vh] bg-black">
      {/* STICKY WRAPPER */}
      {/* Ini yang membuat konten 'menempel' di layar saat user scroll area 500vh tadi */}
      <div className="sticky top-0 h-screen w-full bg-gradient-to-b from-black to-[#0a192f] flex flex-col justify-center items-center overflow-hidden">
        {/* AREA KARTU (Sama seperti sebelumnya) */}
        <div className="w-full max-w-[70%] h-[55vh] flex gap-1 items-stretch">
          {lecturersData.map((dosen) => (
            <motion.div
              key={dosen.id}
              // Hover manual tetap bisa (opsional, bisa dihapus kalau mau full scroll)
              onHoverStart={() => setActiveId(dosen.id)}
              onClick={() => setActiveId(dosen.id)}
              // Animasi Flex
              animate={{
                flex: activeId === dosen.id ? 30 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className={`relative overflow-hidden cursor-pointer shadow-lg transition-all duration-300
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

              {/* Konten Detail */}
              {activeId === dosen.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
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

              {/* Indikator Tertutup */}
              {activeId !== dosen.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[1px] h-12 bg-white/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lecturers;
