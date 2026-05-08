import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import profile from "./assets/profile.png";
import { TypeAnimation } from "react-type-animation";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
   <div className="relative bg-slate-950 text-white min-h-screen overflow-hidden">
    {/* Animated Background Blobs */}

<div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-blob"></div>

<div className="absolute top-40 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

<div className="absolute bottom-0 left-40 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Navbar */}
<nav className="flex justify-between items-center px-6 md:px-10 py-5 border-b border-slate-800 sticky top-0 bg-slate-950/80 backdrop-blur-md z-50">

  <h1 className="text-2xl font-bold text-cyan-400">
    ANSHUMAN KUMAR SINGH
  </h1>

  {/* Desktop Menu */}
  <ul className="hidden md:flex gap-8 text-slate-300">
    <li>
      <a href="#home" className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Home
      </a>
    </li>

    <li>
      <a href="#skills" className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Skills
      </a>
    </li>

    <li>
      <a href="#projects" className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Projects
      </a>
    </li>

    <li>
      <a href="#contact" className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Contact
      </a>
    </li>
  </ul>

  {/* Mobile Button */}
  <button
    className="md:hidden text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <HiX /> : <HiMenu />}
  </button>

  {/* Mobile Menu */}
  {menuOpen && (
    <div className="absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 md:hidden">

      <ul className="flex flex-col items-center gap-6 py-8 text-lg">

        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-cyan-400"
          >
            Contact
          </a>
        </li>

      </ul>

    </div>
  )}

</nav>

      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  id="home"
  className="relative z-10 flex flex-col justify-center items-center text-center px-6 py-32 overflow-hidden"
>

  {/* Glow Effects */}
  <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-16 w-full max-w-7xl">
  <div className="absolute inset-0 opacity-20">

  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

</div>
  {/* Left Content */}
  <div className="flex-1 text-center md:text-left">

    <p className="text-cyan-400 text-lg mb-3">
      Hello, I'm
    </p>

    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">

  <span className="text-white">
    I'm
  </span>

  <br />

  <TypeAnimation
    sequence={[
      "AI/ML Engineer",
      2000,
      "Data Science Enthusiast",
      2000,
      "Analytics Developer",
      2000,
      "AI Web Developer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-cyan-400"
  />

</h1>

    <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
      Working on Data Science, Analytics, AI/ML, AI-powered web applications,
      and innovative tech solutions through modern development and intelligent systems.
    </p>
 <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">

  {[
    "Python",
    "Machine Learning",
    "Data Science",
    "React",
    "AI/ML",
    "Analytics",
    "FastAPI",
    "IoT"
  ].map((skill, index) => (

    <span
      key={index}
      className="px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition duration-300 hover:-translate-y-1"
    >
      {skill}
    </span>

  ))}

</div>


    <div className="flex flex-wrap gap-4 mt-10 justify-center md:justify-start">

      <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/30">
        View Projects
      </button>

      <button className="border border-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300">
        Contact Me
      </button>

    </div>

  </div>

  {/* Right Image */}
  <div className="flex-1 flex justify-center">

    <div className="relative">

      <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full scale-110"></div>

      <img
        src={profile}
        alt="Profile"
        className="relative w-72 h-72 md:w-[420px] md:h-[420px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.45)] animate-[float_4s_ease-in-out_infinite]"
      />

    </div>

  </div>

</div>

</motion.section>



{/* About Section */}
<section
  id="about"
  className="relative z-10 px-6 md:px-20 py-24"
>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

    {/* Left */}
    <div>

      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-cyan-400">Me</span>
      </h2>

      <p className="text-slate-400 text-lg leading-relaxed mb-6">
        I'm passionate about building intelligent solutions using
        AI/ML, Data Science, Analytics and modern web technologies.
        I enjoy working on real-world projects that combine innovation,
        automation and impactful user experiences.
      </p>

      <p className="text-slate-400 text-lg leading-relaxed">
        From smart IoT systems like AgriSphere to AI-powered analytics
        and compliance platforms, I love exploring technologies that
        solve practical problems and create meaningful impact.
      </p>

    </div>

    {/* Right Stats */}
    <div className="grid grid-cols-2 gap-6">

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
        <h3 className="text-4xl font-bold text-cyan-400 mb-2">
          6+
        </h3>

        <p className="text-slate-400">
          Major Projects
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
        <h3 className="text-4xl font-bold text-cyan-400 mb-2">
          AI
        </h3>

        <p className="text-slate-400">
          Focused Development
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
        <h3 className="text-4xl font-bold text-cyan-400 mb-2">
          DS
        </h3>

        <p className="text-slate-400">
          Data Science & Analytics
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-cyan-400 transition">
        <h3 className="text-4xl font-bold text-cyan-400 mb-2">
          React
        </h3>

        <p className="text-slate-400">
          Modern Web Apps
        </p>
      </div>

    </div>

  </div>

</section>



{/* Skills Section */}
<section id="skills" className="relative z-10 px-6 md:px-20 py-24">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">
      My <span className="text-cyan-400">Skills</span>
    </h2>

    <p className="text-slate-400 mt-4">
      Technologies and domains I work with
    </p>
  </div>

  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
        AI / ML
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Machine Learning, Deep Learning, Model Training,
        Predictive Analytics and AI solutions.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
        Data Science
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Data Cleaning, Visualization, Feature Engineering,
        Statistical Analysis and Insights.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
        Web Development
      </h3>

      <p className="text-slate-400 leading-relaxed">
        React, JavaScript, Responsive UI,
        Modern frontend and AI-integrated web apps.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition duration-300 hover:-translate-y-2">
      <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
        Analytics
      </h3>

      <p className="text-slate-400 leading-relaxed">
        Dashboarding, Business Insights,
        Visualization tools and data-driven solutions.
      </p>
    </div>

  </motion.div>

</section>

{/* Projects Section */}
<section id="projects" className="relative z-10 px-6 md:px-20 py-24 bg-slate-900/40">

  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold">
      Featured <span className="text-cyan-400">Projects</span>
    </h2>

    <p className="text-slate-400 mt-4">
      Projects focused on AI, Analytics, Automation and Intelligent Systems
    </p>
  </div>

  <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
>

    {/* Project 1 */}
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <div className="h-52 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
        <h3 className="text-3xl font-bold text-cyan-400">
          AgriSphere
        </h3>
      </div>

      <div className="p-6">
        <p className="text-slate-400 mb-5 leading-relaxed">
          Smart agriculture platform integrating IoT sensors,
          AI insights, environmental monitoring, automation
          and real-time analytics.
        </p>

        <a
          href="https://www.linkedin.com/posts/anshumankrsingh07_agrisphere-smartagriculture-iot-activity-7360618493563518976-lSTS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEjfXf0BkdQzN9DgIk8-WTCc7FKehO7DO8U"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <div className="h-52 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center px-4">
        <h3 className="text-2xl font-bold text-center text-cyan-400">
          IntelliCredit AI
        </h3>
      </div>

      <div className="p-6">
        <p className="text-slate-400 mb-5 leading-relaxed">
          AI-powered credit risk analysis platform using
          RAG, financial document intelligence, analytics,
          and automated loan decision systems.
        </p>

        <a
          href="https://github.com/singhanshumanv/IntelliCredit-AI"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-400 transition duration-300 hover:-translate-y-2">

      <div className="h-52 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center px-4">
        <h3 className="text-2xl font-bold text-center text-cyan-400">
          AI Compliance Intelligence Platform
        </h3>
      </div>

      <div className="p-6">
        <p className="text-slate-400 mb-5 leading-relaxed">
          AI-driven compliance monitoring platform that
          extracts regulations, tracks deadlines,
          predicts risks and automates reporting workflows.
        </p>

        <a
          href="https://github.com/singhanshumanv/Coal_Monitor"
          target="_blank"
          className="text-cyan-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>

  </motion.div>

</section>

{/* Contact Section */}
<section id="contact" className="relative z-10 px-6 md:px-20 py-24">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6">
      Let's <span className="text-cyan-400">Connect</span>
    </h2>

    <p className="text-slate-400 text-lg leading-relaxed mb-10">
      Open to collaborations, internships, hackathons,
      AI/ML opportunities and innovative tech projects.
    </p>

    {/* Social Links */}
    <div className="flex justify-center gap-6 mb-10 text-3xl">

      <a
        href="https://github.com/singhanshumanv"
        target="_blank"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/anshumankrsingh07"
        target="_blank"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:singhanshumanv@gmail.com"
        className="hover:text-cyan-400 transition duration-300"
      >
        <FaEnvelope />
      </a>

    </div>

    {/* Buttons */}
    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="/resume.pdf"
        target="_blank"
        className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition duration-300"
      >
        Download Resume
      </a>

      <a
        href="mailto:yourmail@gmail.com"
        className="border border-cyan-400 px-6 py-3 rounded-2xl hover:bg-cyan-400 hover:text-black transition duration-300"
      >
        Contact Me
      </a>

    </div>

  </div>

</section>

{/* Footer */}
<footer className="border-t border-slate-800 py-6 text-center text-slate-500">
  © 2026 Aksingh • Built with React & Tailwind CSS
</footer>

    </div>
  )
}

export default App