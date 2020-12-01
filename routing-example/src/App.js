import Nav from "./Components/Nav";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import User from "./Components/User";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" component={Products}/>
          <Route path="/user/:id" component={User}/>
          <Redirect to="/"/>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
