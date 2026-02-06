import { type ComponentType } from 'react'
import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

type SectionItem = {
  id: string,
  Component: ComponentType
}

const items: SectionItem[] = [
  {id: "about", Component: About},
  {id: "projects", Component: Projects},
  {id: "skills", Component: Skills},
]

function App() {
  return (
    <>
      <Nav />
      <Hero />
      {items.map(({id, Component}, index) => (
        <section key={index} id={id} className="min-h-screen p-5">
          <Component />
        </section>
      ))}
    </>
  )
}

export default App
