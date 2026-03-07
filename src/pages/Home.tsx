import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import About from "../components/About/About";
import Beam from "../components/Beam/Beam";
import Footer from "../components/Footer/Footer";
import PreFooter from "../components/Footer/PreFooter";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import ProjectsPreview from "../components/Projects/ProjectsPreview";
import Skills from "../components/Skills/Skills";

function Home() {
  const { t } = useTranslation("home");

  useEffect(() => {
    document.title = t("title", {name: "Juan Alva"});
  }, [t]);

  return (
    <>
      <Beam />
      <main>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <ProjectsPreview />
        <PreFooter />
        <Footer />
      </main >
    </>
  )
}

export default Home;