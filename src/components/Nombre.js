import Edad from './Edad'
import swal from '@sweetalert/with-react'
import {Redirect} from 'react-router-dom'

const Nombre = ({submitNombre, nombre}) => {
  

  return (
    <>
      <form className="form-nombre" onSubmit={submitNombre}>
        <h2>¿Cómo te llamás?</h2>
        <br />
        <input className="input" type="text" name="nombre" placeholder="Ingresá tu nombre aquí"></input>
        <br/><button className="btn btn-primary">enviar</button>
      </form>
      {/* {nombre !== "" && <h2>Hola {nombre}</h2>} */}
      {/* {nombre && <Redirect to="/edad" />} */}
    </>
  )
  }

export default Nombre;