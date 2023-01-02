import {useState} from 'react'
import Edad from './Edad'

const Contador = (props) => {

  const [contador, setContador] = useState(0)

  const sumar = (e) => {
    setContador(contador + 1)
  }

  const restar = (e) => {
    setContador(contador - 1)
  }

  return (
    <div>
      <h3>{contador}</h3>
      {/* <button onClick={restar}>RESTAR</button> */}
      <button onClick={sumar}>click</button>
      {/* <h3>{props.edad}</h3> */}
      {contador === props.edad ? <h1>"GANASTE!!!"</h1> : ""}
      {contador > props.edad ? <h1>"PERDISTE!!!"</h1> : ""}
    </div>
  )
}

export default Contador