import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Context from "../Context";
import { isEmptyObject } from "jquery";
import "../components/css/Registro.css"

export default function Registro() {
  const { users, setUsers, session } = useContext(Context);

  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const addUser = () => {
    if (!isEmptyObject(user) && (user.nombre != undefined && user.nombre.trim() != '') && (user.usuario != undefined && user.usuario.trim() != '') && (user.email != undefined && user.email.trim() != '') && (user.password != undefined && user.password.trim() != '')) {
      setUsers([...users, user]);
      alert("Usuario Creado con éxito, intente iniciar sesión");
      navigate("/login");
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  return (
    <div className="vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded registro text-white ">
        <div>
          <h4>Manitos de colores</h4>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["nombre"]: target.value })
            }
            type="name"
            placeholder="Juan Pérez"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["usuario"]: target.value })
            }
            type="name"
            placeholder="jperez"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["email"]: target.value })
            }
            type="email"
            placeholder="prueba@prueba.cl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["password"]: target.value })
            }
            type="password"
            placeholder="******"
          />
        </Form.Group>

        <Button variant="warning me-3" onClick={addUser}>
          Registrarme
        </Button>
        <Link to="/login" className="text-decoration-none text-dark ml-3">
          <Button variant="light">Volver</Button>
        </Link>
      </Form>
    </div>
  );
}
