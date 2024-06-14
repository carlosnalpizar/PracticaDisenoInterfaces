
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import RegProductos from './pages/RegProductos';

function App() {
  return (

    <BrowserRouter>
      <Routes>
          <Route path="/" element={< Login/>}> </Route>
          <Route path="/home" element={< Home/>}> </Route>
          <Route path="/registrousuarios" element={< RegProductos/>}> </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
