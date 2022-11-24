import { NavLink, Link } from 'react-router-dom'
import "../components/css/Navbar.css";
//import { useContext } from 'react';



 //Página de bienvenida, acceso a Inicio de sesión, registro y la página
export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : 'undefined');

// Estrutura del arreglo items del menú busqueda


  return(
    <div className="navbar" >
      {/* <div className="manos">
        <NavLink className={setActiveClass} to="/">
            <img src="https://img2.freepng.es/20180218/gcq/kisspng-hand-free-content-clip-art-painted-hands-cliparts-5a89bf164122f5.0493422115189767902668.jpg" width="100" height="100" alt="" className="rounded d-inline-block align-top"/>
        </NavLink>
      </div> */}
      <div>
        <h1 className="mb-3 titulo-1 pt-3"><em><span className="ma">Ma</span><span className="ni">ni</span><span className="tos">tos</span> <span className="de">De</span> <span className="co">Co</span><span className="lo">lo</span><span className="res">res</span></em></h1> 
      </div>
      <div className="botones">
        <div className="ingresar">
          <NavLink className={setActiveClass} to="/login">
            <button className="inicio"> Iniciar Sesión</button>
          </NavLink>
        </div>
        <div>
          <NavLink className={setActiveClass} to="/registro">
            <button className="button-registro">Regístrate</button>
          </NavLink>
        </div>
      </div>  
    </div>
  )
};