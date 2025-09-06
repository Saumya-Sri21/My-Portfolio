import { motion } from "framer-motion";

const experienceData = [
  {
    position: "Full-Stack Developer Intern",
    company: "AlgoFlow AI",
    companyLink: "https://www.algoflow.ai",
    start: "Aug 2025",
    end: "Present",
    description: `• Contributed to an ongoing project involving API testing, debugging, and frontend integration.
• Integrated APIs with the frontend, ensuring smooth data flow between backend services and UI.
• Collaborated with the team to understand end-to-end architecture and improve development workflows.`,
  },
  {
    position: "Web Administrator",
    company: "Institute of Engineering and Technology",
    companyLink: "https://placement.ietlucknow.ac.in/tpc/contactus.html",
    start: "Feb 2025",
    end: "Present",
    description: `• Managed and maintained the official website, ensuring uptime, performance, and timely content updates.
• Collaborated with departments to enhance content accuracy and design aesthetics.
• Implemented UI/UX improvements and resolved technical issues for smooth user experience.
• Tech-Stack: HTML, CSS, JavaScript, Bootstrap.`,
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-16 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">Experience</h1>
      </ScrollReveal>

      <div className="relative flex w-full max-w-[800px] flex-col gap-16 mx-auto before:absolute before:left-4 before:top-0 before:h-full before:w-1 before:bg-gray-600">
        {experienceData.map((exp, index) => (
          <ScrollReveal key={index}>
            <div className="relative flex flex-col gap-2 pl-10 md:flex-row md:items-start md:gap-12">
              {/* Circle */}
              <div className="absolute left-2.5 top-0 flex h-4 w-4 items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-gray-600 shadow-lg"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-1 md:w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1">
                  <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                  <span className="text-gray-500 italic">
                    {exp.start} - {exp.end}
                  </span>
                </div>
                <a
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 italic hover:text-blue-600"
                >
                  {exp.company}
                </a>
                <p className="text-gray-200 whitespace-pre-line">{exp.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
};

export default Experience;
