import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loginpage from "./login/Loginpage.jsx";
import Home from './login/Home';
function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<Loginpage/>}/>
       <Route path='/home' element={<Home/>}/>
      </Routes>
    </Router>
     );
}

export default App;
