import image from "../assets/image.jpg";
import { motion } from 'framer-motion'
function Hero() {
    return (
        <div
            id="home"
            className="px-16 flexx min-h-screen w-full items-center justify-center py-28 md:px-32"
        >
            <div className="flex   flex-col items-center justify-center gap-10 text-white">
                <motion.div

                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img
                        src={image}
                        alt=""
                        className=" w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all   duration-300 hover:-translate-y-5 hover:shadow-2xl  hover:scale-105 hover:shadow-indigo-600 md:w-[350px] "
                    />
                </motion.div>

                <motion.div

                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}

                    className="flex max-w-[600px]  flex-col items-center  justify-center gap-3 text-center">
                    <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl  transition-all duration-300 md:text-4xl">
                        Saumya Srivastava
                    </h1>

                    <p className="md:text-base text-pretty text-sm text-gray-100 italic font-light">
                        Software Developer | Full-Stack | MERN
                        <br />
                        Turning ideas into reality ✨
                        <br />
                        On a journey to build impactful solutions and grow as a developer 🚀
                    </p>

                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
