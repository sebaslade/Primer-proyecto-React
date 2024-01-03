import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './menu/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Inicio} from './componentes/Inicio'
import Formulario from './componentes/Formulario'
import {Calculadora} from './componentes/Calculadora.js'
import Mensajes from './componentes/Mensajes'
import { PageNotFound } from './componentes/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="https://6595aaadca39470082c43a2c--imaginative-beijinho-1859ac.netlify.app/" element={<Inicio />}></Route>
          <Route path="https://6595aaadca39470082c43a2c--imaginative-beijinho-1859ac.netlify.app/calculadora" element={<Calculadora />}></Route>
          <Route path="https://6595aaadca39470082c43a2c--imaginative-beijinho-1859ac.netlify.app/formulario" element={<Formulario />}></Route>
          <Route path="https://6595aaadca39470082c43a2c--imaginative-beijinho-1859ac.netlify.app/mensajes" element={<Mensajes />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
