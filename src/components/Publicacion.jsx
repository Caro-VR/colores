import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Corazon from "../Corazon";
import Context from "../Context";
import { useContext, useState } from "react";

export default function Publicacion({
  publicacion: { titulo, img, precio, id, favorito }
})

{
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
    <Card className="col-3 mt-3" style={{border: '0'}}>
      <div className="p-2" style={{border: '1px solid rgba(0,0,0,.125)'}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          {/* <Card.Text className="fw-bold">{descripcion}</Card.Text> */}
          <Card.Text>Precio: {precio}</Card.Text>
          <div className="pb-2">
            <a onClick={() => navigate(`/detallepublicacion/${id}`)} style={{cursor: 'pointer'}} className="text-info">
              Ver detalle
            </a>
          </div>
          {/* <Card.Text>Publicado por : {user}</Card.Text> */}
          <div  onClick={() => setFavorita(id)}>
            <Corazon filled={seleccion != null ? seleccion : favorito} />
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}
