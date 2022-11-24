import React from 'react'
import "../components/css/Home.css";
import Navbar from '../components/Navbar';
//import Login from "../components/Login"

//Página de bienvenida, acceso a los login y registro 

export default function Home () {

  return (
    <div>
      <Navbar />
      <div className='home'>
        <h1 className='mt-5'><strong>¡Bienvenido!</strong></h1>
      </div>
    </div>
  )
  
}
