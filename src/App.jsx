import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';

import './server/server';

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
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
