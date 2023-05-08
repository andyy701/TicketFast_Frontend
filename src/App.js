import logo from './logo.svg';
import './App.css';
import './css/TicketFast.css'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IniciarSesion from './Paginas/IniciarSesion';
import Registrar from './Paginas/Registrar'
import Catálogo from './Paginas/Catálogo';
import ANP from './Componentes/ANP.js';
import Detalle_ANP from './Componentes/Detalle_ANP';
import Mensaje_Exito from './Componentes/Mensaje_Exito';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<IniciarSesion />} />
          <Route path="Catálogo">
             <Route index element={<Catálogo/>}/>
             <Route path="Detalle_ANP">
               <Route index element={<Detalle_ANP/>}/>
               <Route path="Mensaje_Exito" element={<Mensaje_Exito/>}/>
             </Route>
          </Route>
          <Route path="Registrar" element={<Registrar />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
