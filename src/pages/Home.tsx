import { useTranslation } from "react-i18next";
import About from "../components/About/About";
import Announcement from "../components/Announcement/Announcement";
import Beam from "../components/Beam/Beam";
import Footer from "../components/Footer/Footer";
import PreFooter from "../components/Footer/PreFooter";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import ProjectsPreview from "../components/Projects/ProjectsPreview";
import { useEffect } from "react";

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
        <Announcement />
        <ProjectsPreview />
        <PreFooter />
        <Footer />
      </main >
    </>
  )
}

export default Home;