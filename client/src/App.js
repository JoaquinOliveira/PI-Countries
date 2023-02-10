import './App.css';
import Landing from '../src/Views/Landing/Landing';
import Home from '../src/Views/Home/Home'
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path= "/" component= { Landing} />
      <Route exact path = "/home" component= { Home } />
      {/* <Route path="/home/:id" component= { Detail } />
      <Route path="/activity" component= { ActivityForm } /> */}
    
    </Switch>
    </div>
</Router>
)}

export default App;
