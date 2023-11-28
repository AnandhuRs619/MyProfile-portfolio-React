
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import "bootstrap/dist/css/bootstrap.min.css"
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import { Contact } from './components/contact';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills />
    <Project/>
    <Contact/>
    <Footer />
    
    </div>
  );
}

export default App;
