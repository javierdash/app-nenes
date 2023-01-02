import { useState } from "react"
import Edad from './Edad'
import swal from '@sweetalert/with-react'
import {Redirect} from 'react-router-dom'

const Nombre = () => {
  
  const [actualName, setActualName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    const nombre = e.target.nombre.value
    e.target.nombre.value = ""
    setActualName(nombre)
    swal(<h2>"tu nombre es genial!"</h2>)
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>¿Cuál es tu nombre?</label>
        <br />
        <input type="text" name="nombre" placeholder="Ingresá tu nombre aquí"></input>
        <button>enviar</button>
      </form>
      {actualName !== "" && <h2>Hola {actualName}</h2>}
      {actualName !== "" && <Edad />}
      {/* <Edad nombre={actualName}/>
      {actualName !== "" && <Redirect to="/edad" />} */}
    </>
  )
}

export default Nombre