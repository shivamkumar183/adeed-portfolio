import { motion } from 'framer-motion';

const educationItems = [
  {
    institution: 'ALLIANCE UNIVERSITY',
    location: 'Bengaluru, Karnataka',
    degree: 'Bachelor of Technology in Computer Science Engineering (AI & ML)',
    details: 'CGPA: 8.03 out of 10',
    year: '2022 – 2026',
  },
  {
    institution: 'NARAYANA JUNIOR COLLEGE',
    location: 'Andhra Pradesh, Anantapur',
    degree: 'Class XII',
    details: '73.9% (761 out of 1000)',
    year: '2021 – 2022',
  },
  {
    institution: 'PRASAD CONCEPT SCHOOL',
    location: 'Andhra Pradesh, Anantapur',
    degree: 'Class X',
    details: '88.6% (532 out of 600)',
    year: '2019 – 2020',
  },
];

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative mb-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#061B5A] via-[#071644] to-[#0B2447] px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.14),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute left-24 top-32 h-44 w-44 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-16 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-5xl font-extrabold uppercase tracking-[0.3em] text-cyan-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.55)] sm:text-6xl">
              EDUCATION
            </p>
            {/* <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              A premium academic timeline designed for a futuristic developer portfolio.
            </p> */}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-8 h-full w-0.5 rounded-full bg-cyan-400/30" />
          <div className="absolute left-4 top-8 h-12 w-12 rounded-full bg-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.25)]" />
          <div className="absolute left-4 top-56 h-12 w-12 rounded-full bg-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.25)]" />
          <div className="absolute left-4 top-[19rem] h-12 w-12 rounded-full bg-cyan-400/20 shadow-[0_0_40px_rgba(56,189,248,0.25)]" />

          <div className="space-y-10 pl-14 sm:pl-16">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.institution}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-[25px] border border-white/10 bg-slate-950/40 p-8 shadow-[0_30px_120px_rgba(4,24,72,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/25 hover:bg-white/10"
              >
                <div className="absolute left-[-2.5rem] top-10 h-6 w-6 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]" />
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.4em] text-cyan-300/90">
                      {item.institution} · {item.location}
                    </p>
                    <h3 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                      {item.degree}
                    </h3>
                    <p className="mt-4 text-sm text-slate-300">{item.details}</p>
                    <p className="mt-2 text-sm text-slate-500">{item.location}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4 lg:mt-0 lg:flex-col lg:items-end">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
                      {item.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
