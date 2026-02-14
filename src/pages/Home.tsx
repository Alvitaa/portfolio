import About from "../components/About/About";
import Beam from "../components/Beam/Beam";
import Footer from "../components/Footer/Footer";
import PreFooter from "../components/Footer/PreFooter";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import ProjectsPreview from "../components/Projects/ProjectsPreview";

function Home () {
  return (
    <>
      <Beam />
      <main>
        <Nav />
        <Hero />
        <About />
        <ProjectsPreview />
        <PreFooter />
        <Footer />
      </main >
    </>
  )
}

export default Home;