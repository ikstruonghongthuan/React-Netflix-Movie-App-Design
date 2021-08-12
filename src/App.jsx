import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './app.scss';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = () => {
  return <Router>
    <Switch>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Register">
        <Register />
      </Route>
      <Route path="/Watch">
        <Watch />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
};

export default App;