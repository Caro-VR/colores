import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function AsideMenu() {
  return (
    <div className="text-center" style={{backgroundColor: '#d6b0b0'}}>
      <div className="d-flex" style={{justifyContent: 'space-between'}}>
        <Link to="/perfil" className="text-dark text-decoration-none pt-3 ml-3">
          <h5 className="font-weight-bold">Perfil</h5>
        </Link>
        <Link to="/crearpublicacion" className="text-dark text-decoration-none pt-3">
          <h5 className="font-weight-bold">Crear Publicación</h5>
        </Link>
        <Link to="/favoritos" className="text-dark text-decoration-none pt-3">
          <h5 className="font-weight-bold">Mis Publicaciones Favoritas</h5>
        </Link>
        <Link to="/tienda" className="mr-3 mt-2 mb-2">
          <Button variant="light">Volver a la Tienda</Button>
        </Link>
      </div>
    </div>
  );
}
