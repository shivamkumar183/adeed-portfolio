import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="relative mb-20 rounded-[40px] border border-white/10 bg-white/5 p-10 shadow-glow backdrop-blur-2xl"
    >
      <div className="absolute -left-8 top-4 h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl space-y-5">
          <SectionHeader label="About" />
          <p className="text-slate-300 leading-8">
            Artificial Intelligence and Machine Learning Engineer with hands-on experience building intelligent systems using Python, Machine Learning, Deep Learning, NLP, and Reinforcement Learning. Focused on solving real-world problems and building scalable AI solutions.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:w-[380px]">
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            className="rounded-3xl border border-cyan-400/20 bg-[#0B2447]/90 p-6 text-slate-200 shadow-glow transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Experience</p>
            <p className="mt-3 text-3xl font-semibold">1+ yrs</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            className="rounded-3xl border border-cyan-400/20 bg-[#0B2447]/90 p-6 text-slate-200 shadow-glow transition duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Focus</p>
            <p className="mt-3 text-3xl font-semibold">AI, ML, NLP</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
