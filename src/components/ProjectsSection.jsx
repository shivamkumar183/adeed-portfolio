import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function ProjectsSection({ projectItems }) {
  return (
    <motion.section
      id="projects"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="mb-20"
    >
      <SectionHeader label="Projects" />
      <div className="grid gap-6 xl:grid-cols-3">
        {projectItems.map((project, index) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10 }}
            className="group rounded-[32px] border border-white/10 bg-[#0B2447] p-8 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-glow">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="mt-4 text-slate-400">{project.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.08 }}
                  className="rounded-full border border-slate-700 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-cyan-200"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.2)] transition duration-300 hover:border-cyan-400/60 hover:bg-cyan-500/30 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                GitHub
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
