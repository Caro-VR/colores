import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Context from "../Context";
import { isEmptyObject } from "jquery";
import { useNavigate } from "react-router-dom";

export default function CrearPublicacion() {
  const { publicaciones, setPublicaciones, guardarPublicacion } = useContext(Context);
  const [ producto, setProducto ] = useState({});
  const navigate = useNavigate();

  const addPublicacion = () => {
    if (!isEmptyObject(producto) && (producto.titulo != undefined && producto.titulo.trim() != '') && (producto.descripcion != undefined && producto.descripcion.trim() != '') && (producto.precio != undefined && producto.precio.trim() != '') && (producto.img != undefined && producto.img.trim() != '')) {
      guardarPublicacion(producto);
      alert('La publicación ha sido creada correctamente');
      // navigate("/perfil");
    } else {
      alert('Todos los campos deben ser llenados');
    }
  }

  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded text-white " style={{backgroundColor: '#d6b0b0'}}>
        <div>
          <h4>Crear Publicación</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Título</Form.Label>
          <Form.Control
            onChange={({ target }) => {
              setProducto({...producto, ["titulo"]: target.value });
            }}
            type="text"
            placeholder="Producto de prueba"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setProducto({ ...producto, ["descripcion"]: target.value })
            }
            type="user"
            placeholder="Producto para el hogar"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setProducto({ ...producto, ["precio"]: target.value })
            }
            type="email"
            placeholder="50000"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>URL Imagen</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setProducto({ ...producto, ["img"]: target.value })
            }
            type="url"
            placeholder="http://imagen.cl/imagen.jpg"
          />
        </Form.Group>
        <Button variant="warning me-3" onClick={addPublicacion}>
          Crear
        </Button>
      </Form>
    </div>
  );
}
