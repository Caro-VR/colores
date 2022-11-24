import { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Context from "../Context";

export default function DetallePublicacion() {

  const { verDetallePublicacion, publicaciones } = useContext(Context);
  // const [ publicacion, setPublicacion ] = useState([]);
  const { id } = useParams();

  let publicacion = verDetallePublicacion(id);

  return (
    <Card className="col-5 mt-4" style={{border: '0'}}>
      <div className="p-2 mb-3" style={{border: '1px solid rgba(0,0,0,.125)'}}>
        <Card.Img variant="top" src={publicacion[0].img} />
        <Card.Body>
          <Card.Title>{publicacion[0].titulo}</Card.Title>
          {/* <Card.Text className="fw-bold">{descripcion}</Card.Text> */}
          <Card.Text>Precio: {publicacion[0].precio}</Card.Text>
          <Card.Text>Descripción: {publicacion[0].descripcion}</Card.Text>
          {/* <div className="pb-2">
            <a onClick={() => navigate(`/detallepublicacion/${id}`)}>
              Ver detalle
            </a>
          </div> */}
          {/* <Card.Text>Publicado por : {user}</Card.Text> */}
        </Card.Body>
      </div>
    </Card>
  );
}