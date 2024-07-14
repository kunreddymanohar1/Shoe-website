import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./Home";
import Mens from "./Mens";
import Womens from './Womens';
import About from "./About";
import Contact from "./Contact";
import Signup from './signinsignup/Signup';
import Login from  './signinsignup/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='mens' element={<Mens />} />
    <Route path='womens' element={<Womens />} />
    <Route path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='Signup' element={<Signup />} />
    <Route path='Login' element={<Login />} />


   </Routes>
   </BrowserRouter>
  );
}

export default App;
