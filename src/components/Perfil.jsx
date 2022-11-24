import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Context from "../Context";
import { isEmptyObject } from "jquery";

export default function Perfil() {
  const { setUsers, users, session } = useContext(Context);

  // Declaración de variables de estado
  const [user, setUser] = useState(users.filter((u) => 
  u.usuario === session.usuario));

  const updateUser = () => {
    if (!isEmptyObject(user) && user[0].nombre.trim() != '' && user[0].usuario.trim() != '' && user[0].email.trim() != '' && user[0].password.trim() != '') {
      const userFoundIndex = users.findIndex((u) => u.usuario === session.usuario);
      session.usuario = user[0].usuario;
      users[userFoundIndex] = user;
      setUsers([...users]);
      alert("Datos actualizados con éxito");
    } else {
      alert("Debe llenar todos los campos");
    }
  };

  return (
    <div className="bg-light vh-100 pt-5">
      <Form className="w-50 mx-auto border p-3 rounded text-white " style={{backgroundColor: '#d6b0b0'}}>
        <div>
          <h4>Datos de Perfil</h4>
          <hr />
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              // setUser({ ...user, ["nombre"]: target.value })
              user[0].nombre = target.value
            }
            type="text"
            defaultValue={user[0].nombre}
            placeholder="Juan Pérez"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              user[0].usuario = target.value
            }
            type="user"
            defaultValue={user[0].usuario}
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
            defaultValue={user[0].email}
            placeholder="jperez"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={({ target }) =>
              setUser({ ...user, ["password"]: target.value })
            }
            type="password"
            defaultValue={user[0].password}
            placeholder="******"
          />
        </Form.Group>
        <Button variant="warning me-3" onClick={updateUser}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
