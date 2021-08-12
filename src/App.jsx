import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './app.scss';
import { AuthProvider } from './contexts/AuthContext';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';

const App = () => {
  return <Router>
    <AuthProvider>
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
    </AuthProvider>
  </Router>;
};

export default App;