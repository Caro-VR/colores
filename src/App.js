import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Login  from "./components/Login";
import Registro from "./views/Registro";
// import Welcome from "./views/Welcome";
import Home from "./views/Home"
import Context from "./Context";
import Tienda from "./views/Tienda";
import Perfil from "./views/Perfil";
import CrearPublicacion from './views/CrearPublicacion';
import DetallePublicacionView from './views/DetallePublicacion';
import FavoritosView from './views/Favoritos';
import { Provider } from './Context';

function App() {
  return (
    <div className="App">
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/tienda" element={<Tienda/>} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/crearpublicacion" element={<CrearPublicacion />} />
            <Route path="/detallepublicacion/:id" element={<DetallePublicacionView />} />
            <Route path="/favoritos" element={<FavoritosView />} />
          
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
