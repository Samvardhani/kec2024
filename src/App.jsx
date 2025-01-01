<<<<<<< HEAD

;
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Samplefunc/Home';
import About from './Components/Samplefunc/About';
import Gallery from './Components/Samplefunc/Gallery';
import Contact from './Components/Samplefunc/Contact';
import NavBar from './Components/Samplefunc/Navbar';
import Form from './Components/Samplefunc/Form';
import UseEffect from './Components/Hooks/UseEffect';
import UseRef from './Components/Hooks/UseRef';
import ExamResults from './Components/Hooks/UseContext';
=======
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
>>>>>>> 2c5626aa6129fb1738d37d36a3114643c8ed53d8

function App() {
  return (
    <div>
      <BrowserRouter>
<<<<<<< HEAD
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/useeffect" element = {<UseEffect />} />
          <Route path="/usecontext" element = {<ExamResults />} />
          <Route path="/useref" element = {<UseRef />} />
        </Routes>
      </BrowserRouter>
      <Form/>
=======
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
>>>>>>> 2c5626aa6129fb1738d37d36a3114643c8ed53d8
    </div>
  );
}

export default App;
