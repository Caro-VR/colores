import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [users, setUsers] = useState([]);
  const [ producto, setProducto ] = useState({});
  const [session, setSession] = useState(null);

  const [publicaciones, setPublicaciones] = useState([
    {
      id: 1,
      titulo: "Grupo",
      descripcion: " Ideal para usar en paredes, muebles, baños, cocinas, mesas y todas aquellas superficies LISAS donde quieras hacer un cambio de apariencia sin gastar mucho.",
      precio: 12000,
      img: "https://i.pinimg.com/564x/13/b4/3f/13b43f86ba6731659992b07eeb9c2951.jpg",
      favorito: false
    },
    {
      id: 2,
      titulo: "Bienvenido",
      descripcion: "Están hechos de vinilo de alta resistencia con adhesivo de fácil instalación. Resistentes a la humedad y el calor.",
      precio: 9000,
      img: "https://i.pinimg.com/564x/20/e1/24/20e124dea6b797d775e929be07ddcef9.jpg",
      favorito: false
    }
    ,
    {
      id: 3,
      titulo: "Cebra",
      descripcion: "Con nuestros productos tendrás una decoración totalmente personalizada, que te guste y que se pueda adaptar a tu estilo y gustos.",
      precio: 11000,
      img: "https://i.pinimg.com/564x/65/15/23/651523bfe61b1f8dab94e0d2ddcb57fc.jpg",
      favorito: false
    }
    ,
    {
      id: 4,
      titulo: "Oso",
      descripcion: "La decoración con nuestros diseños es una magnífica opción si estás pensando en dar un toque distinto y tienen una durabilidad de 7 años.",
      precio: 4000,
      img: "https://i.pinimg.com/564x/64/52/5b/64525b07dd83f17dfe8d28d462809f1f.jpg",
      favorito: false
    }
  ]);

  const guardarPublicacion = (producto) => {
    setPublicaciones([...publicaciones, {...producto, ['id']: publicaciones.length + 1, ['favorito']: false }]);
    console.log(publicaciones);
  }

  const verDetallePublicacion = (id) => {
    const result = publicaciones.filter(obj =>
      obj.id == id
    )
    
    return result;
  }

  const state = {
    users,
    setUsers,
    session,
    setSession,
    publicaciones,
    setPublicaciones,
    verDetallePublicacion,
    guardarPublicacion
  };

  return <Context.Provider value={{users,
    setUsers,
    session,
    setSession,
    publicaciones,
    setPublicaciones,
    verDetallePublicacion,
    guardarPublicacion}}>{children}</Context.Provider>;
}
export { Provider }
export default Context;
