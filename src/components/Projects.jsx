import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Pic-Match.AI",
    link: "https://pic-match-ai.onrender.com/",
    description:
      "An intelligent web application that leverages AI to recognize and match images with ~90% accuracy, providing fast and relevant visual search results.",
    technologies: ["React", "Tailwind CSS", "Python", "FastAPI", "CLIP", "FAISS", "Docker"],
  },
  {
    image: image2,
    title: "Task-Yatra",
    link: "https://taskyatra.onrender.com",
    description:
      "A full-stack task management web application with Admin and User roles, designed to help teams and individuals organize tasks efficiently.",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Cloudinary",
      "Postman",
      "RESTful APIs",
    ],
  },
  {
    image: image3,
    title: "Quick-Chat",
    link: "https://github.com/Saumya-Sri21/Quick-Chat",
    description:
      "A full-stack chat application supporting real-time messaging with WebSockets, user authentication, and online status indicators using MERN stack.",
    technologies: ["MongoDB", "Express", "Mongoose", "React", "Tailwind CSS", "Node.js", "Socket.io"],
  },
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl transition-transform duration-300 hover:scale-105 sm:w-[250px] md:w-[400px] lg:w-[420px] cursor-pointer"
          />
        </a>

        <div className="flex flex-col gap-5 w-full md:w-[calc(100%-420px)]">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="rounded-lg bg-black px-3 py-1 text-sm sm:text-base"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

function Project() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center gap-16 min-h-screen p-4 md:px-14 md:py-24"
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        {/* More Projects link after all project cards */}
        <ScrollReveal>
          <div className="flex justify-center mt-8">
            <a
              href="https://github.com/Saumya-Sri21?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-600 transition-colors italic"
            >
              More Projects →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export default Project;
