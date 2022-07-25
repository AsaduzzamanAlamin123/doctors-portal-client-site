import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './RequireAuth';

function App() {
  return (
    <div className='px-12 max-w-7xl mx-auto'>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
     <Route path='/login' element={<Login></Login>} ></Route>
     <Route path='/signup' element={<SignUp></SignUp>}></Route>
      <Route path='/appoinment' element={
        <RequireAuth>
          <Appoinment></Appoinment>
        </RequireAuth>
      }></Route>
    </Routes>
    </div>
  );
}

export default App;
