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

  // --- LOGIC SCROLLYTELLING ---
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawIndex = Math.floor(latest * lecturersData.length) + 1;
    const clampedIndex = Math.min(Math.max(rawIndex, 1), 25);
    setActiveId(clampedIndex);
  });

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full bg-gradient-to-b from-black to-[#0a192f] flex flex-col justify-center items-center overflow-hidden">
        {/* CONTAINER KARTU */}
        {/* max-w-[95%] agar hampir full layar */}
        <div className="w-full max-w-[75%] h-[55vh] flex gap-1 items-stretch">
          {lecturersData.map((dosen) => (
            <motion.div
              key={dosen.id}
              onClick={() => setActiveId(dosen.id)}
              // --- LOGIKA BENTUK PERSEGI ---
              // Dengan tinggi 55vh, flex 12 membuat lebar card aktif
              // kira-kira sama dengan tingginya (Persegi) di layar laptop standar.
              animate={{
                flex: activeId === dosen.id ? 12 : 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              // Hapus rounded, tambahkan border tipis
              className={`relative overflow-hidden cursor-pointer transition-all duration-300
                ${
                  activeId === dosen.id
                    ? "grayscale-0 z-10 border-[1.5px] border-white/60" // Card Aktif
                    : "grayscale hover:grayscale-0 border-r border-white/20 opacity-50 hover:opacity-100" // Card Inaktif
                }
              `}
            >
              {/* Foto Full Size (Tanpa Wrapper aneh-aneh) */}
              <img
                src={dosen.image}
                alt={dosen.name}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
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
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end whitespace-nowrap"
                >
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight drop-shadow-md truncate">
                    {dosen.name}
                  </h3>
                  <p className="text-blue-400 font-bold text-sm mt-1 truncate">
                    {dosen.title}
                  </p>
                  <div className="flex items-center gap-3 mt-4 text-white/60">
                    <span className="text-[10px] border border-white/20 px-2 py-1 uppercase tracking-wider truncate">
                      {dosen.role}
                    </span>

                    <div className="flex gap-2">
                      <div className="w-6 h-6 bg-white/20 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer pointer-events-auto">
                        <span className="text-[10px] font-bold">in</span>
                      </div>
                      <div className="w-6 h-6 bg-white/20 hover:bg-pink-600 transition flex items-center justify-center cursor-pointer pointer-events-auto">
                        <span className="text-[10px] font-bold">ig</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Indikator Tertutup */}
              {activeId !== dosen.id && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Garis vertikal lebih halus */}
                  <div className="w-[1px] h-10 bg-white/40"></div>
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
