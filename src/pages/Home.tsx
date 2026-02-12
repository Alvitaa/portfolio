import type { ComponentType } from "react";
import About from "../components/About/About";
import Beam from "../components/Beam/Beam";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import ProjectsPreview from "../components/Projects/ProjectsPreview";

type SectionItem = {
  id: string,
  Component: ComponentType
}

const items: SectionItem[] = [
  { id: "about", Component: About },
  { id: "projects", Component: ProjectsPreview },
]

function Home () {
  return (
    <>
      <Beam />
      <main className="background">
        <Nav />
        <Hero />
        {items.map(({ id, Component }, index) => (
          <section key={index} id={id} className="min-h-screen p-5 pt-15">
            <Component />
          </section>
        ))}
        <Footer />
      </main >
    </>
  )
}

export default Home;