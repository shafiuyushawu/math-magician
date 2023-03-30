import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Calculate from './pages/Calculate';
import QuotesPage from './pages/QuotesPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculate />} />
          <Route path="/quotes" element={<QuotesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
