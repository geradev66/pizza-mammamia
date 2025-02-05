import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Register from './pages/Register';
import Cart from './pages/Cart'
import Pizza from './pages/Pizza';
import Profile from './pages/Profile';
import NotFound from './views/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/pizza" element={<Pizza/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

    <Footer/>
    </>
  )
}

export default App
