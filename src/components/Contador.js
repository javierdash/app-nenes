import {useState} from 'react'
import {Redirect} from 'react-router-dom'

const Contador = ({edad}) => {

  const [contador, setContador] = useState(0)

  const sumar = (e) => {
    setContador(contador + 1)
  }

  const restar = (e) => {
    setContador(contador - 1)
  }

  const si = () => {
  if(contador === edad) {
    const igual = "Guau! Que grande eres!"
    //return igual
  } else if (contador === contador - 1) {
    const casi = "Ya casi llegas!"
    //return casi
  } else if (contador === contador + 1) {
    const pasaste = "Espera! El año que viene cuando cumplas años vas a tener esa edad!"
    //return pasaste
  } else if (contador > contador + 1) {
    const grande = "Todavía No! Ya vas a crecer :) Por favor disminuye tu edad"
    //return grande
  }
  }
  console.log(si)

  return (
    <div>
      {!edad && <Redirect to="/" />}
      <h2>Tenés {edad} años!</h2>
      <h3>Apretá el botón hasta llegar a tu edad</h3>
      <h3>{contador}</h3>
      {/* <button onClick={restar}>RESTAR</button> */}
      <button onClick={restar}>restá 1 año!</button>
      <button onClick={sumar}>sumá 1 año!</button>
      {/* <h3>{edad}</h3> */}
      {/* {contador == edad ? <h1>"GANASTE!!!"</h1> : ""}
      {contador > edad ? <h1>"PERDISTE!!!"</h1> : ""} */}
      <h3>{() => si}</h3>
    </div>
  )
}

export default Contador