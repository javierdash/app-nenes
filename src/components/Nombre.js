import Edad from './Edad'
import swal from '@sweetalert/with-react'
import {Redirect} from 'react-router-dom'

const Nombre = ({submitHandler, actualName}) => {

  return (
    <>
    <span>anda?</span>
      <form onSubmit={submitHandler}>
        <label>¿Cuál es tu nombre?</label>
        <br />
        <input type="text" name="nombre" placeholder="Ingresá tu nombre aquí"></input>
        <button>enviar</button>
      </form>
      {actualName !== "" && <h2>Hola {actualName}</h2>}
      { actualName !== "" && <Redirect to="/edad"> <Edad nombre="PEPE"/></Redirect> }
    </>
  )
  }

export default Nombre;