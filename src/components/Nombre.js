import Edad from './Edad'
import swal from '@sweetalert/with-react'
import {Redirect} from 'react-router-dom'

const Nombre = ({submitNombre, nombre}) => {
  

  return (
    <>
      <form onSubmit={submitNombre}>
        <label>¿Cuál es tu nombre?</label>
        <br />
        <input type="text" name="nombre" placeholder="Ingresá tu nombre aquí"></input>
        <button>enviar</button>
      </form>
      {/* {nombre !== "" && <h2>Hola {nombre}</h2>} */}
      {/* {nombre && <Redirect to="/edad" />} */}
    </>
  )
  }

export default Nombre;