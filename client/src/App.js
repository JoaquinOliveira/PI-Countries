import './App.css';
import Landing from '../src/Views/Landing/Landing';
import Home from '../src/Views/Home/Home';
import NavBar from '../src/components/NavBar/NavBar';
import Form from './Views/Form/Form';
import Detail from './Views/Detail/Detail'
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !=='/'&& <NavBar />}
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home /> } />
        <Route path="/home/:id" element={<Detail props/>} />
        <Route path="/activities" element= { <Form />} />  
      </Routes>
    </div>
  )
}

export default App;
