import { useNavigate } from "react-router-dom";
import MenuDetalle from "../components/MenuDetalle";
import DetallePublicacion from "../components/DetallePublicacion";
import { useContext, useEffect } from "react";
import Context from "../Context";

export default function DetallePublicacionView() {
  const { session } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (session === null) {
      navigate("/");
    }
  }, []);

  return (
    <div id="tienda" className="bg-light vh-100">
      <MenuDetalle />
      <DetallePublicacion />
    </div>
  );
}