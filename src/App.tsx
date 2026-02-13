import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App
