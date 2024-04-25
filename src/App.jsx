import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

import './server/server';
import Vans from './pages/Vans';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className='site-logo' to={'/'}>
          #VanLife
        </Link>

        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/vans'}>Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
