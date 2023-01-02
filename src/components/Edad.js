import Contador from './Contador'
import {Redirect} from 'react-router-dom'

const Edad = ({nombre, submitEdad, edad}) => {
  
  console.log(edad)

  return (
    <>
    {!nombre && <Redirect to="/" />}
    <span>Hola {nombre}!</span>
      <form onSubmit={submitEdad}>
        <label>¿Cuántos años tenés?</label>
        <br />
        <input type="text" name="edad" placeholder="Ingresá tu edad"></input>
        <button>enviar</button>
      </form>
      {/* {edad && <Redirect to="/contador" />} */}
    </>
  )
}

export default Edad;