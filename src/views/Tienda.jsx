import { useNavigate } from "react-router-dom";
import MenuHome from "../components/MenuHome";
import Publicaciones from "../components/Publicaciones";
import { useContext, useEffect } from "react";
import Context from "../Context";

export default function Tienda() {
  const { session } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (session === null) {
      navigate("/");
    }
  }, []);

  
  //El router de la aplicación, aquí declaro todas las rutas de los componentes que estén después del registro 
  return (
    <div id="tienda" className="bg-light vh-100">
      <MenuHome />
      <Publicaciones />
    </div>
  );
}
