import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhoWeAre from './pages/about/WhoWeAre';
import WhatWeDo from './pages/about/WhatWeDo';
import Careers from './pages/about/Careers';
import Engineering from './pages/services/Engineering';
import Manufacturing from './pages/services/Manufacturing';
import Products from './pages/services/Products';
import Process from './pages/Process';
import LunchAndLearn from './pages/LunchAndLearn';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<WhoWeAre />} />
            <Route path="/about/who-we-are" element={<WhoWeAre />} />
            <Route path="/about/what-we-do" element={<WhatWeDo />} />
            <Route path="/about/careers" element={<Careers />} />
            <Route path="/services" element={<Engineering />} />
            <Route path="/services/engineering" element={<Engineering />} />
            <Route path="/services/manufacturing" element={<Manufacturing />} />
            <Route path="/services/products" element={<Products />} />
            <Route path="/process" element={<Process />} />
            <Route path="/lunch-and-learn" element={<LunchAndLearn />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
