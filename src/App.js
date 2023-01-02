import Contador from './components/Contador'
import Nombre from './components/Nombre'
import Edad from './components/Edad'
import {Switch, Route, useHistory} from 'react-router-dom'
import { useState, useEffect } from "react"
import swal from '@sweetalert/with-react'
import {Redirect} from 'react-router-dom'

function App() {
  
    const history = useHistory()

    const [actualName, setActualName] = useState("");
    const [actualEdad, setActualEdad] = useState("");
    
    useEffect(() => {
      
    }, [])
    
    const submitEdad = (e) => {
      e.preventDefault()
      const edad = e.target.edad.value
      e.target.edad.value = ""
      setActualEdad(edad)
      history.push("/contador")
    }

    const submitNombre = (e) => {
      e.preventDefault()
      const nombre = e.target.nombre.value
      e.target.nombre.value = ""
      setActualName(nombre)
      swal(<h2>"tu nombre es genial!"</h2>)
      history.push("/edad")
    }
  
  return (
    <Switch>
      <Route path="/" exact render={ () => <Nombre submitNombre={submitNombre} nombre={actualName} /> } />
      <Route path="/edad" render={ () => <Edad nombre={actualName} submitEdad={submitEdad} edad={actualEdad}/> } />
      <Route path="/contador" render={ () => <Contador edad={actualEdad}/> } />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
