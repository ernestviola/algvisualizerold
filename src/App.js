import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Search from './routes/Search';
import NotFound from './routes/NotFound';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
          <Route path ='/search' element={<Search/>} />
            <Route path ='*' element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
