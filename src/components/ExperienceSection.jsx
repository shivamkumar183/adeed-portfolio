import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function ExperienceSection({ experienceItems }) {
  return (
    <motion.section
      id="experience"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mb-20"
    >
      <SectionHeader label="Experience" />
      <div className="grid gap-6 lg:grid-cols-2">
        {experienceItems.map((item, index) => (
          <motion.div
            key={item.company + index}
            whileHover={{ y: -8 }}
            className="group rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">{item.title}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.company}</h3>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.15)] transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
              >
                {item.range}
              </motion.div>
            </div>
            <p className="text-slate-400">Led AI-driven model development and production-ready experimentation with polished reports, scalable pipelines, and collaboration support.</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
