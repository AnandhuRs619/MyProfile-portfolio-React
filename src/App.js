
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import "bootstrap/dist/css/bootstrap.min.css"
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/contact';
import { Footer } from './components/Footer';
import About from './components/about';
import Cursor from './components/Cursor';

function App() {
  return (
    <div className="App">
    <Cursor/>
    <NavBar/>
    <Banner/>
    <About/>
    <Skills />
    <Project/>
    <Contact/>
    <Footer />S    
    </div>
  );
}

export default App;
