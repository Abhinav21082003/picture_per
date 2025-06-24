import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Learn from './components/Learn';
import Buy from './components/Buy';
import Contact from './components/Contact';
import BuyGallery from './components/BuyGallery';
import PhotoDetail from './components/PhotoDetail';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container-fluid bg-dark text-light min-vh-100 py-4">
        <h2 className="text-center mb-4 heading-title">Abhinav's Lens</h2>

        <nav className="nav nav-pills justify-content-center gap-2 mb-5">
          <li className="nav-item">
            <Link className="nav-link small px-3 py-1" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link small px-3 py-1" to="/learn">Learn Photography</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link small px-3 py-1" to="/buy">Buy Showcase</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link small px-3 py-1" to="/contact">Contact</Link>
          </li>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/buy/photos" element={<BuyGallery />} />
          <Route path="/buy/photos/:photoId" element={<PhotoDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
