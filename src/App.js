import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register.js';
import NotFoundError from './components/NotFoundError.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/user/home" component={Register} />
          <Route exact path="/freelancer/home" component={Register} />
          <Route exact path="/:role/register" render={(props)=>
            props.match.params.role === "freelancer" || props.match.params.role === "client" ? (<Register props={props} />) : (<Redirect to="/*" />)
          } />
          <Route path = "/*" component={NotFoundError} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
