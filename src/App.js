import Login from './components/Login/Login';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom/cjs/react-router-dom.min';
 
import ForgotPassword from './components/Login/ForgotPassword';
import Register from './components/Login/Register';

function App() {
  return (
    <div className="App">
    <Router>
     
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
