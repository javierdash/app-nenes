import Contador from './components/Contador'
import Nombre from './components/Nombre'
import Edad from './components/Edad'
import {Switch, Route} from 'react-router-dom'
import { useState } from "react"
import swal from '@sweetalert/with-react'

function App() {
  
  const AlgunNombre = () => {
  
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
    <h3>funciona esto??</h3>
    {/* <Switch>
      <Route path="/" exact render={ () => <Nombre submitHandler={submitHandler} actualName={actualName}/> } />
      <Route path="/edad" render={ () => <Edad nombre={actualName}/> } />
      <Route path="/contador" component={Contador} />
    </Switch> */}
    </>
  );
}
}

export default App;
