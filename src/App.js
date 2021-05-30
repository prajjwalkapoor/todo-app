import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Todos from "./components/TodoComp";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/auth/login" component={Login}></Route>
          <Route path="/auth/logout" component={Logout}></Route>
          <Route path="/mytodos" component={Todos}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
