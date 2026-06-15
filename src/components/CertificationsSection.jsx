import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

export default function CertificationsSection({ certifications }) {
  return (
    <motion.section
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative mb-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#061B5A] via-[#071644] to-[#0B2447] px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.12),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-16 h-44 w-44 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative z-10">
        <div className="mb-10">
          <SectionHeader label="CERTIFICATIONS" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <motion.article
              key={cert.title}
              whileHover={{ y: -8 }}
              className="flex min-h-[180px] flex-col justify-center rounded-[25px] border border-white/10 bg-white/5 px-6 py-8 shadow-[0_30px_120px_rgba(4,24,72,0.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/25 hover:bg-white/10"
            >
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ x: 4 }}
                className="mt-6 inline-block text-sm font-medium text-cyan-300 transition duration-300 hover:text-cyan-100 hover:underline underline-offset-2"
              >
                View Certificate
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
