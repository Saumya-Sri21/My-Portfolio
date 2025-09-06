import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiPython,
  SiGithub,
  SiPostman,
  SiCplusplus,
  SiGit,
  SiC,
  SiNextdotjs,
  SiRedux,
  SiMysql,
  SiOpenai,
} from "react-icons/si";
import { motion } from "framer-motion";

function Skills() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="skills"
      className="flex min-h-[70vh] w-full flex-col items-center gap-10 justify-center p-5 md:p-14"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white"
      >
        Technical Skills
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-5 p-5">
        {/* HTML */}
        <motion.div>
          <SiHtml5 className="cursor-pointer text-[60px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
         </motion.div>

        {/* CSS */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiCss3 className="cursor-pointer text-[60px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* JavaScript */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiJavascript className="cursor-pointer text-[60px] text-yellow-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* React */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiReact className="cursor-pointer text-[60px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Tailwind */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiTailwindcss className="cursor-pointer text-[60px] text-cyan-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* NodeJS */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiNodedotjs className="cursor-pointer text-[60px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Express */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiExpress className="cursor-pointer text-[60px] text-gray-300 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* MongoDB */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiMongodb className="cursor-pointer text-[60px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Python */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiPython className="cursor-pointer text-[60px] text-[#FFD43B] transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* GitHub */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiGithub className="cursor-pointer text-[60px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Postman */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiPostman className="cursor-pointer text-[60px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* C++ */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiCplusplus className="cursor-pointer text-[60px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* C */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiC className="cursor-pointer text-[60px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Git */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiGit className="cursor-pointer text-[60px] text-red-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Next.js */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiNextdotjs className="cursor-pointer text-[60px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* Redux */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiRedux className="cursor-pointer text-[60px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* SQL */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiMysql className="cursor-pointer text-[60px] text-blue-700 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>

        {/* OpenAI */}
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiOpenai className="cursor-pointer text-[60px] text-teal-400 transition-all duration-300 hover:-translate-y-5 sm:text-[80px] md:text-[100px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default Skills;
