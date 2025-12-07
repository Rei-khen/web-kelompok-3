// src/sections/Lecturers.jsx
import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// --- IMPORT KOMPONEN PARTICLES ---
import Particles from "../components/Particles"; // Sesuaikan path jika beda folder

// --- GAMBAR PLACEHOLDER ---
import lecturerImg from "../assets/images/lab-bg-1.png";

//list gambar dosen
import profBayuImg from "../assets/images/gambarDosen/prof_bayu.jpg";
import profAndaniImg from "../assets/images/gambarDosen/prof_andani.jpg";
import profSyarifuddinSyarif from "../assets/images/gambarDosen/prof_syafaruddin_syarif.jpg";
import profAnsarSuyuti from "../assets/images/gambarDosen/prof_Ansar_suyuti.png";
import profSyarifuddin from "../assets/images/gambarDosen/prof_syafruddin.jpg";
import profNiswar from "../assets/images/gambarDosen/prof_niswar.png";
import profAmilAhmadIlham from "../assets/images/gambarDosen/prof_amil.jpeg";
import profAdnan from "../assets/images/gambarDosen/prof_adnan.jpg";
import ibuInggrid from "../assets/images/gambarDosen/ibu_inggrid.jpg";
import pakZahir from "../assets/images/gambarDosen/pas_zahir.png";
import pakKiki from "../assets/images/gambarDosen/pak_kiki.jpeg";
import pakAdy from "../assets/images/gambarDosen/pak_ady.png";
import ibuEnab from "../assets/images/gambarDosen/ibu_enab.jpeg";
import broKris from "../assets/images/gambarDosen/bro_kris.png";
import ibuElly from "../assets/images/gambarDosen/ibu_elly.png";
import pak_ais from "../assets/images/gambarDosen/pak_ais.jpg";
import ibuEmma from "../assets/images/gambarDosen/ibu_emma.png";
import ibuUyya from "../assets/images/gambarDosen/ibu_uyya.jpg";
import pakAlif from "../assets/images/gambarDosen/pak_alif.jpg";
import pakAbdi from "../assets/images/gambarDosen/pak_abdi.jpg";
import ibuTya from "../assets/images/gambarDosen/ibu_tya.jpeg";
import ibuAnti from "../assets/images/gambarDosen/ibu_anti.jpg";
import ibuHerlina from "../assets/images/gambarDosen/ibuHerlina.jpeg";
import ibuDewiani from "../assets/images/gambarDosen/ibu_dewiani.jpeg";
import pakIqra from "../assets/images/gambarDosen/pak_iqra.png";

const lecturersData = [
  {
    id: 1,
    name: "Prof. Dr. Ir. Indrabayu",
    title: "ST., MT., M.Bus.Sys., IPM, ASEAN. Eng.",
    role: "Professor",
    image: profBayuImg,
  },
  {
    id: 2,
    name: "Prof. Dr. Ir. Andani",
    title: "M.T., IPU., ASEAN.Eng.",
    role: "Professor",
    image: profAndaniImg,
  },
  {
    id: 3,
    name: "Prof. Dr. Ir. Syafruddin Syarif",
    title: "M.T.",
    role: "Professor",
    image: profSyarifuddinSyarif,
  },
  {
    id: 4,
    name: "Prof.Dr.Ir. Ansar Suyuti",
    title: "M.T.",
    role: "Professor",
    image: profAnsarSuyuti,
  },
  {
    id: 5,
    name: "Prof. Dr. Eng. Ir. Syafaruddin",
    title: "S.T, M.Eng., IPU",
    role: "Professor",
    image: profSyarifuddin,
  },
  {
    id: 6,
    name: "Prof. Dr. Eng. Muhammad Niswar",
    title: "S.T., M.IT.",
    role: "	Professor",
    image: profNiswar,
  },
  {
    id: 7,
    name: "Prof. Dr. Amil Ahmad Ilham",
    title: "S.T., M.IT.",
    role: "Professor",
    image: profAmilAhmadIlham,
  },
  {
    id: 8,
    name: "Prof. Dr. Adnan",
    title: "S.T., M.T.",
    role: "Professor",
    image: profAdnan,
  },
  {
    id: 9,
    name: "Dr. Ir. Ingrid Nurtanio",
    title: "M.T.",
    role: "Associate Professor",
    image: ibuInggrid,
  },
  {
    id: 10,
    name: "Dr. Ir. Zahir Zainuddin",
    title: "M.Sc.",
    role: "Associate Professor",
    image: pakZahir,
  },
  {
    id: 11,
    name: "Dr.Eng.Ir. Dewiani",
    title: "M.T.",
    role: "Associate Professor",
    image: ibuDewiani,
  },
  {
    id: 12,
    name: "Dr. Eng. Ir. Zulkifli Tahir,",
    title: "S.T., M.Sc.",
    role: "Assistant Professor",
    image: pakKiki,
  },
  {
    id: 13,
    name: "Dr. Eng. Ady Wahyudi Paundu",
    title: "S.T., M.T.",
    role: "Assistant Professor",
    image: pakAdy,
  },
  {
    id: 14,
    name: "Dr. Ir. Zaenab Muslimin",
    title: "M.T",
    role: "Associate Professor",
    image: ibuEnab,
  },
  {
    id: 15,
    name: "Ir. Christoforus Yohannes",
    title: "M.T",
    role: "Assistant Professor",
    image: broKris,
  },
  {
    id: 16,
    name: "Elly Warni",
    title: "S.T., M.T.",
    role: "Assistant Professor",
    image: ibuElly,
  },
  {
    id: 17,
    name: "A. Ais Prayogi Alimuddin",
    title: "S.T., M.Eng.",
    role: "Assistant Professor",
    image: pak_ais,
  },
  {
    id: 18,
    name: "Mukarramah Yusuf",
    title: "B.Sc.,M.Sc. Ph. D",
    role: "Assistant Professor",
    image: ibuEmma,
  },
  {
    id: 19,
    name: "Ir. Anugrayani Bustamin",
    title: "S.T., M.T.",
    role: "	Assistant Professor",
    image: ibuUyya,
  },
  {
    id: 20,
    name: "Ir. Muhammad Alief Fahdal Imran Oemar",
    title: "ST., M.Sc",
    role: "Assistant Professor",
    image: pakAlif,
  },
  {
    id: 21,
    name: "Dr. Muhammad Abdillah Rahmat",
    title: "S.T., M.T",
    role: "Assistant Professor",
    image: pakAbdi,
  },
  {
    id: 22,
    name: "Ir. Tyanita Puti Marindah W",
    title: "S.T., M.Inf.",
    role: "Assistant Professor",
    image: ibuTya,
  },
  {
    id: 23,
    name: "Arliyanti Nurdin",
    title: "S.T.,M.T",
    role: "Assistant Professor",
    image: ibuAnti,
  },
  {
    id: 24,
    name: "Herlina Anwar",
    title: "S.T., M.Kom",
    role: "Assistant Professor",
    image: ibuHerlina,
  },
  {
    id: 25,
    name: "Iqra Aswad",
    title: "S.T., M.T.",
    role: "Assistant Professor",
    image: pakIqra,
  },
];

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

  // --- ANIMASI MENGAMBANG ---
  const floatingVariants = {
    animate: {
      rotateX: [0, 2, 0],
      rotateY: [-1, 1, -1],
      y: [-8, 8, -8],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="relative h-[500vh] bg-black">
      {/* STICKY VIEWPORT + PERSPECTIVE 3D */}
      <div className="sticky top-0 h-screen w-full bg-gradient-to-b from-black to-[#0a192f] flex flex-col justify-center items-center overflow-hidden perspective-[2000px]">
        {/* --- 1. LAYER PARTIKEL (BACKGROUND) --- */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Particles
            particleColors={["#ffffff", "#ffffff", "#a5b4fc"]} // Putih & Biru Muda
            particleCount={150}
            particleSpread={10}
            speed={0.3}
            particleBaseSize={80} // Ukuran partikel
            moveParticlesOnHover={true} // False biar tidak mengganggu interaksi kartu
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* --- 2. LAYER KONTEN KARTU (FOREGROUND) --- */}
        {/* Tambahkan z-10 agar berada DI ATAS partikel */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="w-full flex justify-center items-center z-1"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* CONTAINER KARTU */}
          <div className="w-full max-w-[70%] h-[55vh] flex gap-1 items-stretch shadow-2xl">
            {lecturersData.map((dosen) => (
              <motion.div
                key={dosen.id}
                onClick={() => setActiveId(dosen.id)}
                // Animasi Flex (12:1)
                animate={{
                  flex: activeId === dosen.id ? 12 : 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className={`relative overflow-hidden cursor-pointer transition-all duration-300
                  ${
                    activeId === dosen.id
                      ? "grayscale-0 z-10 border-[1.5px] border-white/60"
                      : "grayscale hover:grayscale-0 border-r border-white/20 opacity-50 hover:opacity-100"
                  }
                `}
              >
                {/* Foto */}
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
                    <div className="w-[1px] h-10 bg-white/40"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Lecturers;
