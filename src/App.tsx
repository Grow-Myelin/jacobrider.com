import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TravelDetail from './pages/TravelDetail';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {!isHomePage && <Navbar />}
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel/:location" element={<TravelDetail />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <AppContent />
      </Router>
    </>
  );
}

export default App;