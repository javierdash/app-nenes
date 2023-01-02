import Contador from './Contador'
import {Redirect} from 'react-router-dom'

const Edad = ({nombre, submitEdad, edad}) => {
  
  console.log(edad)

  return (
    <>
    {!nombre && <Redirect to="/" />}
    <h3>Hola {nombre}!</h3>
      <form className="form-nombre" onSubmit={submitEdad}>
        <h2>¿Cuántos años tenés?</h2>
        <br />
        <input className="input" type="text" name="edad" placeholder="Ingresá tu edad"></input>
        <br/><button className="btn btn-primary">enviar</button>
      </form>
      {/* {edad && <Redirect to="/contador" />} */}
    </>
  )
}

export default Edad;