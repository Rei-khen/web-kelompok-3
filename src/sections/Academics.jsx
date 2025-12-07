// src/sections/Academics.jsx
import { useState } from "react";
import { motion } from "framer-motion";

// --- DATA PROGRAM STUDI ---
// Data ini disesuaikan dengan referensi gambar yang kamu berikan
const academicPrograms = [
  {
    id: 1,
    number: "01",
    since: "SINCE 2008",
    title: "Bachelor's Program",
    degree: "S.Kom", // Sarjana Komputer
    desc: "This program aims to produce graduates who can apply informatics in real-world contexts, uphold professional ethics, and are committed to lifelong learning.",
    accreditation: "Excellent (LAM INFOKOM), ASIIN",
    curriculum: "KPT 2023",
    researchAreas: [
      "Big Data & Cloud Computing",
      "Artificial Intelligence & Robotics",
      "Internet of Things (IoT)",
      "Software Engineering",
    ],
    profiles: ["IT Professional", "IT Entrepreneur", "Advanced IT Learner"],
    color: "from-yellow-400/20 to-yellow-600/5", // Aksen Kuning Emas
    borderColor: "border-yellow-500/30",
    badgeColor: "text-yellow-400 bg-yellow-400/10",
    btnColor: "bg-yellow-500 hover:bg-yellow-400 text-black",
  },
  {
    id: 2,
    number: "02",
    since: "SINCE 2019",
    title: "Master's Program",
    degree: "M.Kom", // Magister Komputer
    desc: "Prepares graduates with a strong ethical foundation, the ability to conduct critical and innovative informatics research, and expertise in pervasive computing.",
    accreditation: "Very Good (BAN-PT)",
    curriculum: "K-24",
    researchAreas: [
      "Intelligent Systems",
      "Network Cryptography",
      "Data Science",
      "Smart City Development",
    ],
    profiles: ["Lecturer", "Researcher", "IT Consultant", "IT Manager"],
    color: "from-blue-400/20 to-blue-600/5", // Aksen Biru
    borderColor: "border-blue-500/30",
    badgeColor: "text-blue-400 bg-blue-400/10",
    btnColor: "bg-blue-600 hover:bg-blue-500 text-white",
  },
  {
    id: 3,
    number: "03",
    since: "SINCE 2025",
    title: "Doctoral Program",
    degree: "Dr.", // Doktor
    desc: "Designed to develop graduates with strong research capabilities, professional integrity, and the ability to produce innovative solutions in IT.",
    accreditation: "New Program",
    curriculum: "OBE (Outcome-Based)",
    researchAreas: [
      "Advanced AI & Machine Learning",
      "Cyber Security & Forensics",
      "Distributed Systems",
      "Bio-Informatics",
    ],
    profiles: ["Lead Scientist", "Academic Professor", "Policy Maker"],
    color: "from-purple-400/20 to-purple-600/5", // Aksen Ungu/Abu
    borderColor: "border-purple-500/30",
    badgeColor: "text-purple-400 bg-purple-400/10",
    btnColor: "bg-purple-600 hover:bg-purple-500 text-white",
  },
];

const Academics = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    // BACKGROUND GRADIENT:
    // Mulai dari #0a192f (Biru Gelap - sama dengan bawah Lecturers)
    // Berakhir di Hitam (Persiapan untuk footer/section selanjutnya)
    <section className="min-h-screen w-full bg-gradient-to-b from-[#0a192f] via-[#050d1a] to-black py-32 px-4 md:px-10 flex flex-col items-center justify-center overflow-hidden">
      {/* HEADER SECTION */}
      <div className="text-center mb-20 max-w-4xl z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4"
        >
          Academics
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 100 }}
          transition={{ duration: 0.8 }}
          className="h-1 bg-blue-500 mx-auto mb-6 rounded-full"
        />
        <p className="text-gray-400 text-lg">
          We offer comprehensive education levels from Bachelor to Doctoral
          degrees, focusing on innovation and research excellence.
        </p>
      </div>

      {/* CARDS CONTAINER */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-6 h-auto lg:h-[650px]">
        {academicPrograms.map((program) => {
          const isHovered = hoveredId === program.id;

          return (
            <motion.div
              key={program.id}
              onHoverStart={() => setHoveredId(program.id)}
              onHoverEnd={() => setHoveredId(null)}
              layout
              // --- LOGIKA FLEX ---
              // Desktop: Hover flex 2.5 (lebar), Normal flex 1
              // Mobile: Selalu auto
              className={`relative rounded-[30px] overflow-hidden cursor-pointer border ${program.borderColor} bg-[#0b1221] group transition-all duration-500 flex flex-col shadow-2xl`}
              animate={{
                flex:
                  window.innerWidth >= 1024 ? (isHovered ? 2.5 : 1) : "auto",
              }}
            >
              {/* ANGKA LATAR BELAKANG (01, 02, 03) */}
              <div className="absolute -top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <span className="text-[10rem] md:text-[12rem] font-black leading-none text-white">
                  {program.number}
                </span>
              </div>

              {/* GLOW EFFECT SAAT HOVER */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* KONTEN KARTU */}
              <div className="relative z-10 p-8 md:p-10 flex flex-col h-full justify-between">
                {/* --- BAGIAN ATAS (JUDUL & INFO DASAR) --- */}
                <div>
                  {/* Badge Since */}
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 border border-white/5 ${program.badgeColor}`}
                  >
                    {program.since}
                  </span>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-xl text-gray-400 font-mono mb-6">
                    {program.degree}
                  </p>

                  <p className="text-gray-300 leading-relaxed text-sm md:text-base border-l-2 border-white/10 pl-4">
                    {program.desc}
                  </p>
                </div>

                {/* --- BAGIAN BAWAH (DETAIL YANG MUNCUL SAAT HOVER) --- */}
                <div className="flex-grow flex flex-col justify-end mt-8">
                  {/* TAMPILAN SAAT DIAM (COLLAPSED) */}
                  {!isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-4"
                    >
                      <div className="p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                          Accreditation
                        </p>
                        <p className="text-white font-semibold flex items-center gap-2 text-sm">
                          <span className="text-green-400">●</span>{" "}
                          {program.accreditation}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 flex items-center gap-1 group-hover:text-white transition-colors uppercase tracking-widest mt-4">
                        Hover for full details ↗
                      </p>
                    </motion.div>
                  )}

                  {/* TAMPILAN SAAT HOVER (EXPANDED) */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="space-y-6"
                    >
                      {/* Grid Info Detail */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Kotak Kiri: Kurikulum & Akreditasi */}
                        <div className="space-y-4">
                          <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                              Curriculum
                            </p>
                            <span className="text-white font-bold text-sm">
                              {program.curriculum}
                            </span>
                          </div>
                          <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                              Accreditation
                            </p>
                            <p className="text-white font-bold text-sm">
                              {program.accreditation}
                            </p>
                          </div>
                        </div>

                        {/* Kotak Kanan: Fokus Riset */}
                        <div className="p-4 rounded-xl bg-black/20 border border-white/10">
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-3">
                            Focus Research
                          </p>
                          <ul className="space-y-2">
                            {program.researchAreas.map((area, idx) => (
                              <li
                                key={idx}
                                className="text-xs text-gray-200 flex items-start gap-2"
                              >
                                <span className="text-white/50 mt-0.5">▹</span>{" "}
                                {area}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Profil Lulusan (Tags) */}
                      <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">
                          Graduate Profiles
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {program.profiles.map((profile, idx) => (
                            <span
                              key={idx}
                              className="text-xs border border-white/10 bg-white/5 px-2 py-1 rounded text-gray-300"
                            >
                              {profile}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tombol Aksi */}
                      <button
                        className={`w-full py-4 ${program.btnColor} font-bold uppercase tracking-widest text-sm rounded-xl transition-transform transform active:scale-95 shadow-lg`}
                      >
                        More Info ↗
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Academics;
