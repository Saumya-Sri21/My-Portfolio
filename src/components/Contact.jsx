import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

function Contact() {
  const icons = [
    {
      icon: <HiOutlineMail />,
      link: "mailto:saumyasrivastava498@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/in/saumya-srivastavaa/",
      color: "bg-blue-600",
    },
    {
      icon: <BsGithub />,
      link: "https://github.com/Saumya-Sri21",
      color: "bg-gray-700",
    },
  ];

  return (
    <div
      id="contact"
      className="flex min-h-[70vh] w-full items-center justify-center px-4"
    >
      <div className="flex flex-col items-center gap-6 p-8">
        <h1 className="text-center text-5xl">
          <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
            Get in Touch
          </span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">
          Let's connect!
        </p>

        <div className="flex gap-6 mt-4">
          {icons.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-shadow duration-300 hover:shadow-xl ${item.color}`}
            >
              <span className="text-2xl">{item.icon}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
