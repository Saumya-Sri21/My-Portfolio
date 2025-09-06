import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import './index.css'


function App() {
  
  return (
    <>
    <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <main  className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
   <Navbar />
   <Hero />
   <Skills/>
   <Experience/>
   <Projects/>
   <Contact/>
     
    </main>
        
    </>
  )
}

export default App
