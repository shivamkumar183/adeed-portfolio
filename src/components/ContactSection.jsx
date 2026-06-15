// import { useEffect, useRef, useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
// import SectionHeader from './SectionHeader';
// import emailjs from '@emailjs/browser';

// export default function ContactSection() {
//   const formRef = useRef(null);
//   const [status, setStatus] = useState('');
//   const [loading, setLoading] = useState(false);

//   const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
//   const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
//   const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

//   useEffect(() => {
//     if (publicKey) {
//       emailjs.init(publicKey);
//     }
//   }, [publicKey]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (!formRef.current) return;

//     if (!serviceId || !templateId || !publicKey) {
//       setStatus('Email setup is incomplete. Check your env variables.');
//       return;
//     }

//     setLoading(true);
//     setStatus('');

//     try {
//       await emailjs.sendForm(serviceId, templateId, formRef.current);
//       setStatus('Message sent successfully');
//       formRef.current.reset();
// } catch (error) {
//   console.error("FULL EMAILJS ERROR:", error);
//   setStatus(`Error: ${error.text || error.message}`);
// } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <motion.section
//       id="contact"
//       variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{ duration: 0.8, delay: 0.7 }}
//       className="relative mb-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#050816] via-[#061B5A] to-[#0B2447] px-6 py-10 sm:px-10 sm:py-14"
//     >
//       <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.14),_transparent_22%)]" />
//       <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
//       <div className="pointer-events-none absolute right-10 top-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />

//       <div className="relative z-10 grid gap-8 lg:grid-cols-[1.8fr_1fr]">
//         <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_45px_160px_rgba(56,189,248,0.18)]">
//           <SectionHeader label="CONTACT ME" />
//           <p className="mb-8 max-w-2xl text-sm text-slate-300">
//             Send a message and let&apos;s discuss your next project.
//           </p>
//           <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="sr-only" htmlFor="name">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your name"
//                 required
//                 className="w-full rounded-[18px] border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25 hover:border-cyan-400/30"
//               />
//             </div>
//             <div>
//               <label className="sr-only" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 required
//                 className="w-full rounded-[18px] border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25 hover:border-cyan-400/30"
//               />
//             </div>
//             <div>
//               <label className="sr-only" htmlFor="message">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows="6"
//                 placeholder="Write your message"
//                 required
//                 className="w-full rounded-[18px] border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25 hover:border-cyan-400/30"
//               />
//             </div>
//             <motion.button
//               type="submit"
//               disabled={loading}
//               whileHover={{ scale: loading ? 1 : 1.02 }}
//               whileTap={{ scale: loading ? 1 : 0.98 }}
//               className="inline-flex w-full items-center justify-center rounded-[18px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
//             >
//               {loading ? 'Sending...' : 'Send Message'}
//             </motion.button>
//             {status && (
//               <p className="text-sm font-medium text-emerald-300">{status}</p>
//             )}
//           </form>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.2 }}
//           className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_45px_160px_rgba(56,189,248,0.18)]"
//         >
//           <div className="mb-8">
//             <p className="text-lg font-semibold uppercase tracking-[0.22em] text-cyan-300">Contact Info</p>
//             <p className="mt-3 text-sm text-slate-300">
//               Reach out directly via email, phone, or connect on LinkedIn and GitHub.
//             </p>
//           </div>
//           <div className="space-y-6">
//             <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-5">
//               <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Email</p>
//               <p className="mt-3 text-base font-semibold text-white">abeedali48@gmail.com</p>
//             </div>
//             <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-5">
//               <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Phone</p>
//               <p className="mt-3 text-base font-semibold text-white">+91 93924 42541</p>
//             </div>
//           </div>
//           <div className="mt-8 space-y-4">
//             <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">Social</p>
//             <div className="flex flex-wrap gap-3">
//               <a
//                 href="https://www.linkedin.com/in/abeed-ali-46b279301/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging_compose%3BZIzH94rXRz2cZVoo%2FG7teQ%3D%3D"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
//               >
//                 <FaLinkedin className="h-4 w-4" /> LinkedIn
//               </a>
//               <a
//                 href="https://github.com/abeedali-hub"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-2 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
//               >
//                 <FaGithub className="h-4 w-4" /> GitHub
//               </a>
//             </div>
//           </div>
//           <div className="mt-10 rounded-[22px] border border-white/10 bg-slate-950/70 p-5 text-center text-sm text-slate-300 shadow-[0_15px_40px_rgba(56,189,248,0.08)]">
//             Let’s build something amazing together
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }


import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SectionHeader from './SectionHeader';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formRef.current) return;

    console.log('SERVICE ID:', serviceId);
    console.log('TEMPLATE ID:', templateId);
    console.log('PUBLIC KEY:', publicKey);

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Email setup is incomplete. Check your env variables.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      setStatus('✅ Message sent successfully');
      formRef.current.reset();
    } catch (error) {
      console.error('FULL EMAILJS ERROR:', error);
      setStatus(`❌ Error: ${error.text || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: 0.7 }}
      className="relative mb-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#050816] via-[#061B5A] to-[#0B2447] px-6 py-10 sm:px-10 sm:py-14"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(125,211,252,0.14),_transparent_22%)]" />
      <div className="pointer-events-none absolute left-10 top-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-16 h-44 w-44 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.8fr_1fr]">

        {/* LEFT SIDE FORM */}
        <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_45px_160px_rgba(56,189,248,0.18)]">
          
          <SectionHeader label="CONTACT ME" />

          <p className="mb-8 max-w-2xl text-sm text-slate-300">
            Send a message and let's discuss your next project.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded-[18px] border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25 hover:border-cyan-400/30"
            />

            {/* EMAIL */}
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-[18px] border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25 hover:border-cyan-400/30"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              rows="6"
              placeholder="Write your message"
              required
              className="w-full rounded-[18px] border border-white/10 bg-slate-950/80 px-4 py-4 text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/25 hover:border-cyan-400/30"
            />

            {/* BUTTON */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              className="inline-flex w-full items-center justify-center rounded-[18px] bg-gradient-to-r from-cyan-400 via-sky-500 to-violet-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.2)] transition duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {/* STATUS */}
            {status && (
              <p className="text-sm font-medium text-emerald-300">
                {status}
              </p>
            )}
          </form>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 hover:border-cyan-400/20 hover:shadow-[0_45px_160px_rgba(56,189,248,0.18)]"
        >
          <div className="mb-8">
            <p className="text-lg font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Contact Info
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Reach out directly via email, phone, or connect on LinkedIn and GitHub.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Email
              </p>
              <p className="mt-3 text-base font-semibold text-white">
                abeedali48@gmail.com
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-slate-950/70 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                Phone
              </p>
              <p className="mt-3 text-base font-semibold text-white">
                +91 93924 42541
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Social
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/abeed-ali-46b279301/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                <FaLinkedin className="h-4 w-4" /> LinkedIn
              </a>

              <a
                href="https://github.com/abeedali-hub"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-400/10"
              >
                <FaGithub className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          <div className="mt-10 rounded-[22px] border border-white/10 bg-slate-950/70 p-5 text-center text-sm text-slate-300 shadow-[0_15px_40px_rgba(56,189,248,0.08)]">
            Let’s build something amazing together
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}