import { useNavigate } from "react-router-dom";
import MenuPerfil from "../components/MenuPerfil";
import Perfil from "../components/Perfil";
import Context from "../Context";
import { useEffect, useContext } from "react";

export default function PerfilView() {

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
      <Perfil />
    </div>
  );
}
