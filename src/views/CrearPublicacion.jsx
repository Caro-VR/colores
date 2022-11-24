import CrearPublicacion from "../components/CrearPublicacion";
import MenuPerfil from "../components/MenuPerfil";
import Context from "../Context";
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function CrearPublicacionView() {

  const { session } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (session === null) {
      navigate("/");
    }
  }, []);

  return (
    <div id="perfil" className="bg-light vh-100">
      <MenuPerfil />
      <CrearPublicacion />
    </div>
  );
}