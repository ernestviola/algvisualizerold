import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './routes/Home';
import ArraySearch from './routes/ArraySearch';
import NotFound from './routes/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Link to={'/'} >Home</Link>
          <Link to={'/arraysearch'} >Array Search</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/arraysearch' element={<ArraySearch />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
