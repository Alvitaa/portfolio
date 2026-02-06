import type { ComponentType } from 'react'
import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

const items: ComponentType[] = [About, Skills, Projects,]

function App() {
  return (
    <>
      <Nav />
      <Hero />
      {items.map((Item, index) => (
        <section key={index} className="min-h-screen p-5">
          <Item />
        </section>
      ))}
    </>
  )
}

export default App
