import { useContext, useState } from "react";
import Publicacion from "./Publicacion";
import Context from "../Context";
import Form from "react-bootstrap/Form";

export default function Publicaciones() {
  const { publicaciones } = useContext(Context);
  // const [nombre, setNombre] = useState("");
  const [filtro, setFiltro] = useState("");
  const [publicacionesFiltradas, setPublicacionesFiltradas] = useState(publicaciones);

  const filtrarPorNombre = (nombre) => {
    setPublicacionesFiltradas(publicaciones.filter((p) =>
      p.titulo.toLowerCase().includes(nombre.toLowerCase())
    ));
  }

  const filtrar = (seleccion) => {
    setFiltro(seleccion);
    if (seleccion === 'precioasc') {
      setPublicacionesFiltradas(publicaciones.sort((a,b) => a.precio - b.precio));
    } else if (seleccion === 'preciodesc') {
      setPublicacionesFiltradas(publicaciones.sort((a,b) => b.precio - a.precio));
    }
  }

  return (
    <div className="p-4" style={{backgroundColor: 'white'}}>
      <div className="d-flex align-items-center px-2 mb-3">
        Nombre:
        <input
          type="text"
          className="ms-2 form-control ml-2"
          onChange={({ target }) => filtrarPorNombre(target.value)}
          // value={nombre}
        />
      </div>
      <div>
        Ordenar Por
        <Form.Select
          value={filtro}
          onChange={({ target }) => filtrar(target.value)}
          className="ml-2 mb-2"
        >
          <option value="preciodesc">Precio mayor a menor</option>
          <option value="precioasc">Precio menor a mayor</option>
          {/* <option value="alfabetico">Orden alfabético</option> */}
        </Form.Select>
      </div>
      <div className="publicaciones row">
        {publicacionesFiltradas.map((p, i) => {
          return <Publicacion publicacion={p} key={i} />;
        })}
      </div>
    </div>
  );
}
