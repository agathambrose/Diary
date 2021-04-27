import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js'
import Home from './Components/Home.js'
import Dashboard from './Components/DashBoard.js'
import {Route,Switch,Redirect} from 'react-router-dom'
import DashBoard from './Components/DashBoard.js';

function App() {
  return (
    <div className="App">
     <Nav />
     <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/dashboard' component={DashBoard} />
     </Switch>
    
    </div>
  );
}

export default App;
