import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from '../Landing/Landing';
import Home from '../Landing/Landing'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path='/'>
          <Landing />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
