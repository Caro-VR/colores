import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Context from "../Context";
import "../components/css/MenuHome.css"

export default function MenuDetalle() {
  const navigate = useNavigate();
  const { setSession } = useContext(Context);

  const logout = () => {
    setSession(null);
    alert("Sesión cerrada con éxito");
    navigate("/");
  };

  return (
    <div className="menuhome text-center">
      <Link to="/tienda" className="mr-3 mt-2 mb-2">
          <Button variant="light">Volver a la Tienda</Button>
        </Link>
    </div>
  );
}