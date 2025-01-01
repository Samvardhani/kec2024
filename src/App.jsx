import './App.css';
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import About from './Components/FunctionalComponents/Samplefunc/about';
import Home from './Components/FunctionalComponents/Samplefunc/Home';
import Contact from './Components/FunctionalComponents/Samplefunc/Contact';
import Gallery from './Components/FunctionalComponents/Samplefunc/Gallery';
import NavBar from './Components/FunctionalComponents/Samplefunc/NavwBar';
import Footer from './Components/FunctionalComponents/Samplefunc/Footer';
import UseEffect from './Components/FunctionalComponents/Samplefunc/UseEffect';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar /> {/* Navigation bar at the top */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About college="KEC" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useEffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>

      {/* Footer added here */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
