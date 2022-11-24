import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Context from "../Context";
import "../components/css/MenuHome.css"

export default function MenuHome() {
  const navigate = useNavigate();
  const { setSession } = useContext(Context);

  const logout = () => {
    setSession(null);
    alert("Sesión cerrada con éxito");
    navigate("/");
  };

  return (
    <div className="menuhome text-center d-flex">
      <div style={{paddingTop: '12px'}} className="ml-4">
        <h4>
          <Link to="/perfil" className="text-dark text-decoration-none font-weight-bold">
            Mi Perfil
          </Link>
        </h4>
      </div>
      <div className="pr-4">
        <Button variant="danger" onClick={logout}>
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}
