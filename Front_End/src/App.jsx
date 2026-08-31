import React, { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-R02F73TV4H";
ReactGA.initialize(TRACKING_ID);

const sectionVariant = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const childVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const dividerVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  }
};

function App() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans w-full mx-auto overflow-hidden">
      <main>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <NavBar />
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={childVariant}
        >
          <Hero />
        </motion.div>

        <motion.div 
          variants={dividerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="h-1 w-full bg-linear-to-r from-black via-[#39FF14] to-black mt-16 sm:mt-24 md:mt-40 mb-16 sm:mb-24 md:mb-40 origin-center shadow-[0_0_25px_rgba(57,255,20,0.6)]"
        />

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={childVariant}>
            <About />
          </motion.div>
        </motion.section>

        <motion.div 
          variants={dividerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          className="h-1 w-full bg-linear-to-r from-black via-[#39FF14] to-black mt-16 sm:mt-24 md:mt-40 mb-16 sm:mb-24 md:mb-40 origin-center shadow-[0_0_25px_rgba(57,255,20,0.6)]"
        />

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={childVariant}>
            <Contact />
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      </main>
    </div>
  );
}

export default App;