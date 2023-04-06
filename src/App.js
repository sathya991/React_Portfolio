import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Skills from './components/Skills';
function App() {
  return (
    <div>
    <div className="App">
      <Dashboard />
      <Skills />
      <Projects />
      <Contact />
    </div>
    <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/skills" element={<Skills/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
  );
}

export default App;
