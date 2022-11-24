import { useNavigate } from "react-router-dom";
import MenuPerfil from "../components/MenuPerfil";
import Favoritos from "../components/Favoritos";
import Context from "../Context";
import { useEffect, useContext } from "react";

export default function FavoritosView() {

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
      <Favoritos />
    </div>
  );
}