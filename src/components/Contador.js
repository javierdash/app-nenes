import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Confetti from 'react-confetti'

const Contador = ({edad}) => {

  const [contador, setContador] = useState(0)

  const sumar = (e) => {
    setContador(contador + 1)
  }

  const restar = (e) => {
    setContador(contador - 1)
  }

  const si = () => {
    if(contador == (edad - 2)) {
      const igual = "Falta menos.."    
      return igual
    } else if(contador == edad) {
    const igual = "Guau! Que grande sos!"    
    return igual
  } else if (contador == edad - 1) {
    const casi = "Ya casi llegas!"
    return casi
  } else if (contador > edad) {
    const grande = "Todavía No! Ya vas a crecer :) Por favor disminuye tu edad"
    return grande
  }
  // } else {
  //   const resto = "FALTA!"
  // }
  }

  return (
    <div>
      {!edad && <Redirect to="/" />}
      <h2>Tenés {edad} años!</h2>
      <h3>Apretá el botón hasta llegar a tu edad</h3>
      <h3>{contador}</h3>
      {/* <button onClick={restar}>RESTAR</button> */}
      {contador > edad && <button onClick={restar} className="btn btn-warning">restá 1 año!</button>}
      <button onClick={sumar} className="btn btn-success">sumá 1 año!</button>
      {/* <h3>{edad}</h3> */}
      {/* {contador == edad ? <h1>"GANASTE!!!"</h1> : ""}
      {contador > edad ? <h1>"PERDISTE!!!"</h1> : ""} */}
      <h3>{si()}</h3>
      {contador == edad ? <Confetti /> : ""}
      {/* <Confetti /> */}
    </div>
  )
}

export default Contador