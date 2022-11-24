import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Corazon from "../Corazon";
import Context from "../Context";
import { useContext, useState } from "react";

export default function Favoritos() {

  const navigate = useNavigate();
  const { publicaciones, setPublicaciones } = useContext(Context);
  const [ seleccion, setSeleccion ] = useState(null);

  const setFavorita = (id) => {
    const publicacionIndex = publicaciones.findIndex((p) => p.id === id);
    publicaciones[publicacionIndex].favorito = !publicaciones[publicacionIndex].favorito;
    if(publicaciones[publicacionIndex].favorito) {
      setSeleccion(true);
    } else {
      setSeleccion(false);
    }
    setPublicaciones([...publicaciones]);
  };

  return (
    <div className="row">
      {publicaciones.filter((p) => p.favorito).map((publicacion) => (
      <Card className="col-3 mt-4" style={{border: '0'}}>
        <div className="p-2" style={{border: '1px solid rgba(0,0,0,.125)'}}>
          <Card.Img variant="top" src={publicacion.img} />
          <Card.Body>
            <Card.Title>{publicacion.titulo}</Card.Title>
            {/* <Card.Text className="fw-bold">{descripcion}</Card.Text> */}
            <Card.Text>Precio: {publicacion.precio}</Card.Text>
            {/* <div className="pb-2">
              <a onClick={() => navigate(`/detallepublicacion/${id}`)} style={{cursor: 'pointer'}} className="text-info">
                Ver detalle
              </a>
            </div> */}
            {/* <Card.Text>Publicado por : {user}</Card.Text> */}
            <div  onClick={() => setFavorita(publicacion.id)}>
              <Corazon filled={publicacion.favorito} />
            </div>
          </Card.Body>
        </div>
      </Card>
      ))}
    </div>
  );
}