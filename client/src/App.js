import './App.css';
import Landing from '../src/Views/Landing/Landing';
import Home from '../src/Views/Home/Home';
import NavBar from '../src/components/NavBar/NavBar';
import Form from './Views/Form/Form';
import Detail from './Views/Detail/Detail';
import About from './Views/About/About'
import About2 from './Views/About/About2'
import { Route, Routes, useLocation } from "react-router-dom";
import Error from './components/Error/Error'
import Footer from './Views/Footer/Footer';
import Favorites from './Views/Favorites/Favorites.jsx'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname !=='/'&& <NavBar />}

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home /> } />
        <Route exact path="/about" element= { <About />} />  
        <Route exact path="/about2" element= { <About2 />} />  
        <Route exact path="/favorites" element= { <Favorites />} />  
        <Route path="/home/:id" element={<Detail props/>} />
        <Route path="/activities" element= { <Form />} />  
        <Route path='*' element={<Error />} />
      </Routes>
      {location.pathname !=='/'&& <Footer />}
    </div>
  )
}

export default App;
