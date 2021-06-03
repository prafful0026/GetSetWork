import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import UserRegister from './components/UserRegister.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/register" component={UserRegister} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
