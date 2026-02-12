import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import ScrollToHash from './components/ScrollToHash';
import { LanguageProvider } from './i18n/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App
