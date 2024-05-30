import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx";
import Oneproduct from './components/Oneproduct.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/oneProduct" element={<Oneproduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
