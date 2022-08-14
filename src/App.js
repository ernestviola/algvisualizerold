import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './routes/Home';
import Search from './routes/Search';
import NotFound from './routes/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to={'/'} >Home</Link>
          <Link to={'/search'} >Search</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
