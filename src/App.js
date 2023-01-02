import Contador from './components/Contador'
import Nombre from './components/Nombre'
import Edad from './components/Edad'
import './css/bootstrap.min.css'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Nombre />
    {/* <Switch>
      <Route exact path="/" component={Nombre}/>
      <Route path="/edad" component={Edad}/>
    </Switch> */}
    </>
  );
}

export default App;
