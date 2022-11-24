
import "../components/css/Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Context from "../Context";


export default function Login() {

  const { setSession, users } = useContext(Context);

  const [user, setUser] = useState({});


  const navigate = useNavigate();
  const addUser = () => {
    const userExists =
      users.some((u) => u.usuario == user.usuario && u.password == user.password);
    if (userExists) {
      setSession(user);
      alert("Identificado con éxito");
      navigate("/tienda");
    } else {
      alert("Usuario o Contraseña incorrecta");
    }
  };

  return (
    <div className="row">
    <div className="wrapper fadeInDown">
        <div className="mt-5" id="formContent">
            <div className="fadeIn first mb-3">
                <Link to="/" className="text-decoration-none text-dark ml-3">
                  <img src="https://img2.freepng.es/20180218/gcq/kisspng-hand-free-content-clip-art-painted-hands-cliparts-5a89bf164122f5.0493422115189767902668.jpg" id="icon" alt="User Icon" />
                </Link>
            </div>
        </div>
        <form>
            < Form.Group type="text" id="usuario" className="fadeIn second" name="usuario" placeholder="usuario">
              <Form.Label>Usuario</Form.Label>
              <Form.Control
                onChange={({ target }) =>
                setUser({ ...user, ["usuario"]: target.value })
                }
                type="usuario"
              />
            </Form.Group>
            <Form.Group type="password" id="password"className="fadeIn third" name="login" placeholder="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={({ target }) =>
                setUser({ ...user, ["password"]: target.value })
                }
                type="password"
                placeholder="******"
              />
            </Form.Group>
            <div>
              <Button type="submit" className="fadeIn fourth mt-4" value="Iniciar Sesión" onClick={ addUser }>Ingresar</Button>
            </div>
            <Link to="/registro" className="">
              <h5 style={{marginTop: '20px'}}>¿No tienes cuenta?</h5>
            </Link>

        </form>
        {/* <div id="formFooter">
            <Link to="/" className="underlineHover mt-5">
              <Button>¿No tienes cuenta?</Button>
            </Link>
        </div> */}
</div>
</div>

  )
}