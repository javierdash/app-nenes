import { useState } from "react"
import Contador from './Contador'

const Edad = ({nombre}) => {
  
  console.log(nombre)
  
  const [actualEdad, setActualEdad] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    const edad = e.target.edad.value
    e.target.edad.value = ""
    setActualEdad(edad)
  }

  return (
    <>
    <span>Hola {nombre}!</span>
      <form onSubmit={submitHandler}>
        <label>¿Cuántos años tenés?</label>
        <br />
        <input type="text" name="edad" placeholder="Ingresá tu edad"></input>
        <button>enviar</button>
        {actualEdad !== "" && <h2>Tenés {actualEdad} años!</h2>}
      </form>
      {actualEdad !== "" && <h3>Apretá el botón hasta llegar a tu edad</h3>}
      {actualEdad !== "" && <Contador edad={actualEdad} />}
    </>
  )
}

export default Edad;