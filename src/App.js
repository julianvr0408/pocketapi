import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './containers/pages/Home';
import Error404 from './containers/errors/Error404';
import Menu from './containers/pages/Menu';
import Captura from './containers/pages/Captura';
import Capturados from './containers/pages/Capturados';
import Listado from './containers/pages/Listado'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path='Menu' element={<Menu />} />
          <Route path='Captura' element={<Captura />} />
          <Route path='Capturados' element={<Capturados />} />
          <Route path='Listado' element={<Listado />} />
        </Routes>
      </Router>
    </div>
  );
}



export default App;
