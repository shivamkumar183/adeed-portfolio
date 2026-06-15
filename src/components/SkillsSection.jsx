import { motion } from 'framer-motion';
import { SiPython, SiGit, SiReact } from 'react-icons/si';
import { GiBrain } from 'react-icons/gi';

const cardIcons = {
  Programming: <SiPython className="h-7 w-7 text-cyan-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.75)]" />,
  'AI / ML': <GiBrain className="h-7 w-7 text-cyan-300 drop-shadow-[0_0_18px_rgba(56,189,248,0.75)]" />,
  Tools: <SiGit className="h-7 w-7 text-violet-300 drop-shadow-[0_0_18px_rgba(168,85,247,0.75)]" />,
  Frontend: <SiReact className="h-7 w-7 text-pink-300 drop-shadow-[0_0_18px_rgba(236,72,153,0.75)]" />,
};

export default function SkillsSection({ skillCategories }) {
  return (
    <motion.section
      id="skills"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="relative mb-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#061B5A] via-[#071644] to-[#0B2447] px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_18%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-8 top-8 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-8 top-28 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />

      <div className="relative z-10">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-5xl font-extrabold uppercase tracking-[0.28em] text-cyan-300 drop-shadow-[0_0_35px_rgba(56,189,248,0.55)] sm:text-6xl">
              SKILLS
            </p>
            {/* <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
              Technologies and tools I work with daily for modern product engineering and AI-powered solutions.
            </p> */}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-4">
          {skillCategories.map((skill) => (
            <motion.article
              key={skill.title}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[25px] border border-white/10 bg-white/5 p-6 shadow-[0_30px_120px_rgba(4,24,72,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/25 hover:bg-white/10"
            >
              <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-950/80 ring-1 ring-white/10 shadow-[0_0_30px_rgba(56,189,248,0.16)]">
                {cardIcons[skill.title]}
              </div>

              <div className="pr-2">
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
                <p className={`mt-3 text-sm ${skill.accentText} transition duration-300`}>{skill.subtitle}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {skill.badges.map((badge) => (
                  <span
                    key={badge}
                    whileHover={{ scale: 1.1 }}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[13px] font-medium text-slate-100 shadow-[0_0_10px_rgba(34,211,238,0.1)] transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/15 hover:text-cyan-100 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
