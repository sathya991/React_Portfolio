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
      </div>
  );
}

export default App;
