import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Headers from './pages/Shared/Headers/Headers';
import Footer from './pages/Shared/Footer/Footer';
import Doctors from './pages/Home/Doctor/Doctor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Headers></Headers>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
