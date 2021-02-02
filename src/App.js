import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Register from './components/RegisterPage/Register'
import Spinner from './components/Spinner/Spinner';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/spinner" component={Spinner} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </Router>
  );
}

export default App;
