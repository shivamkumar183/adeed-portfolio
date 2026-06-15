import { motion } from "framer-motion";
import { FaArrowRight, FaDownload, FaEnvelope, FaStar } from "react-icons/fa";
import profileImage from "../assets/profile.png";

export default function Header({ title }) {
  return (
    <header className="relative isolate overflow-hidden px-6 pb-24 pt-8 sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 opacity-30 mix-blend-screen bg-hero-grid" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,255,0.12),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.16),_transparent_20%)]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="hero-particle left-16 top-24 h-4 w-4" />
        <span
          className="hero-particle left-24 top-56 h-3 w-3"
          style={{ animationDelay: "0.5s" }}
        />
        <span
          className="hero-particle left-[35%] top-14 h-5 w-5"
          style={{ animationDelay: "2s" }}
        />
        <span
          className="hero-particle right-20 top-32 h-4 w-4"
          style={{ animationDelay: "1.4s" }}
        />
        <span
          className="hero-particle right-28 bottom-24 h-5 w-5"
          style={{ animationDelay: "0.8s" }}
        />
        <span
          className="hero-particle left-10 bottom-28 h-6 w-6"
          style={{ animationDelay: "1.1s" }}
        />
      </div>
      <nav className="relative flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 shadow-glow backdrop-blur-xl md:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-sky-500 text-slate-950 shadow-glow">
            <FaStar className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">S. ABEED ALI</p>
          </div>
        </div>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#skills" className="transition hover:text-white">
            Skills
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <div className="relative mx-auto mt-10 max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <div className="text-slate-300">Hello, I am</div>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                S. ABEED ALI
              </h1>
              <p className="text-cyan-300 text-xl font-medium sm:text-2xl">
                {title}
              </p>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                Artificial Intelligence and Machine Learning Engineer focused on
                building scalable AI systems, advanced data models, and polished
                automation experiences for high-growth technology teams.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-2">
                  Bengaluru, Karnataka
                </span>
                <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-2">
                  AI Engineer
                </span>
                <span className="rounded-full border border-slate-700 bg-white/5 px-3 py-2">
                  Top-tier quality
                </span>
              </div>
            </div>
            <div className="grid gap-4 sm:max-w-xl sm:grid-cols-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow group flex items-center justify-center gap-2 rounded-3xl bg-cyan-500/15 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-300 hover:bg-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
              >
                <FaEnvelope className="h-4 w-4 group-hover:animate-pulse" /> Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center rounded-3xl border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-100 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                View Projects <FaArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </motion.a>
              <motion.a
                href="public\resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center rounded-3xl border border-cyan-400/20 bg-[#0B2447] px-5 py-3 text-sm font-semibold text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.15)] transition duration-300 hover:border-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
              >
                <FaDownload className="h-4 w-4" /> Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm rounded-[40px] border border-white/10 bg-white/5 p-1 shadow-[0_0_60px_rgba(10,67,140,0.35)] backdrop-blur-xl"
          >
            <div className="absolute inset-x-0 top-0 h-2 rounded-t-[40px] bg-gradient-to-r from-cyan-400 to-sky-500" />
            <div className="relative overflow-hidden rounded-[36px] bg-[#0B2447] p-8">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.2),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.2),_transparent_24%)]" />
              <div className="relative flex min-h-[440px] flex-col items-center justify-between gap-4">
                {/* <div className="h-40 w-40 rounded-full border border-cyan-400/30 bg-slate-950/50 p-1 shadow-[0_0_40px_rgba(56,189,248,0.24)]">
                  <img src={profileImage} alt="S. Abeed Ali" className="h-full w-full rounded-full object-cover" />
                </div> */}

                 {/* The above code is replaced with the following to add a blur effect to the profile image */}
                <div className="h-52 w-52 rounded-full border-2 border-cyan-400/30 bg-slate-950/50 p-1 shadow-[0_0_40px_rgba(56,189,248,0.24)]">
                  <img
                    src={profileImage}
                    alt="S. Abeed Ali"
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
                <div className="space-y-2 text-center text-slate-200">
                  <p className="text-xl font-semibold">S. ABEED ALI</p>
                  <p className="text-slate-400">
                    AI & Machine Learning Engineer
                  </p>
                </div>
                <div className="w-full rounded-3xl border border-white/10 bg-white/5 p-5 text-left text-sm text-slate-300 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
                  <p className="mt-3 text-slate-300">
                    Delivering polished AI systems, Python automation, and
                    machine learning products for fast-moving technology teams.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
