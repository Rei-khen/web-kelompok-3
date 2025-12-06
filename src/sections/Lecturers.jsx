// src/sections/Lecturers.jsx
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const containerRef = useRef(null);

  // Refs untuk Logic
  const activeIdRef = useRef(1);
  const lastScrollTime = useRef(0);

  // REF BARU: Mengontrol status "Sedang Scroll" vs "Sedang Diam"
  const isScrollingRef = useRef(false);
  const resetScrollTimeoutRef = useRef(null);

  const isInView = useInView(containerRef, { amount: 0.1 });

  const updateActiveId = (newId) => {
    setActiveId(newId);
    activeIdRef.current = newId;
  };

  // --- 1. LOGIC AUTO RESET (JIKA KELUAR LAYAR) ---
  useEffect(() => {
    if (!isInView) {
      updateActiveId(1);
    }
  }, [isInView]);

  // --- 2. LOGIC SCROLL HIJACKING DENGAN ANTI-CONFLICT ---
  useEffect(() => {
    const handleWheel = (e) => {
      const now = Date.now();

      // --- LOGIC ANTI-CONFLICT DIMULAI ---
      // 1. Tandai bahwa user sedang scrolling
      isScrollingRef.current = true;

      // 2. Hapus timer lama (jika ada)
      if (resetScrollTimeoutRef.current)
        clearTimeout(resetScrollTimeoutRef.current);

      // 3. Pasang timer baru: Jika tidak ada scroll selama 500ms, matikan status scrolling
      // Angka 500ms ini memberi waktu "istirahat" agar hover tidak nyamber saat kartu bergerak
      resetScrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
      // --- LOGIC ANTI-CONFLICT SELESAI ---

      // Throttle (Agar tidak terlalu cepat ganti slide)
      if (now - lastScrollTime.current < 50) return;

      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;
      const currentId = activeIdRef.current;

      // Cek apakah section sudah nempel di atas layar?
      const isAtTop = Math.abs(rect.top) < 50;

      if (!isAtTop) return; // Biarkan scroll browser normal jika belum pas

      // SKENARIO 1: Scroll ke BAWAH
      if (isScrollingDown) {
        if (currentId < lecturersData.length) {
          e.preventDefault();
          updateActiveId(currentId + 1);
          lastScrollTime.current = now;
        }
      }
      // SKENARIO 2: Scroll ke ATAS (Hanya naik halaman, tidak mundur slide)
      // (Kosongkan logic di sini agar default browser scroll ke atas jalan)
    };

    if (containerRef.current) {
      containerRef.current.addEventListener("wheel", handleWheel, {
        passive: false,
      });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("wheel", handleWheel);
      }
      if (resetScrollTimeoutRef.current)
        clearTimeout(resetScrollTimeoutRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="h-screen w-full bg-gradient-to-b from-black to-[#0a192f] flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="w-full max-w-[70%] h-[55vh] flex gap-1 items-stretch">
        {lecturersData.map((dosen) => (
          <motion.div
            key={dosen.id}
            // PERUBAHAN PENTING DI SINI:
            // Cek dulu: Apakah sedang scrolling?
            onHoverStart={() => {
              // HANYA aktifkan hover jika TIDAK sedang scrolling
              if (!isScrollingRef.current) {
                updateActiveId(dosen.id);
              }
            }}
            // Klik harus selalu bisa (meski lagi scroll)
            onClick={() => updateActiveId(dosen.id)}
            animate={{
              flex: activeId === dosen.id ? 30 : 1,
            }}
            transition={{
              duration: 0.1,
              ease: "easeInOut",
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
    </section>
  );
};

export default Lecturers;
