import { type ComponentType } from 'react'
import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Beam from './components/Beam/Beam'

type SectionItem = {
  id: string,
  Component: ComponentType
}

const items: SectionItem[] = [
  { id: "about", Component: About },
  { id: "projects", Component: Projects },
  { id: "skills", Component: Skills },
]

function App() {
  return (
    <>
      <Beam />
      <main className='background'>
        <Nav />
        <Hero />
        {items.map(({ id, Component }, index) => (
          <section key={index} id={id} className="min-h-screen p-5 pt-15">
            <Component />
          </section>
        ))}
      </main >
    </>
  )
}

export default App
