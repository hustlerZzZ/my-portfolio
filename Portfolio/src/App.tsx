import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./components/Home/Home.tsx";
import Skills from "./components/Skills/Skills.tsx";
import Experience from "./components/Experience/Experience.tsx";
import Projects from "./components/Projects/Projects.tsx";
import Contact from "./components/Contact/Contact.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
