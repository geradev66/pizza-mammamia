import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Register from './components/Register';
import Cart from './components/Cart'
import Pizza from './components/Pizza';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    {/* <Pizza/> */}
    {/* <Register/> */}
    {/* <Login/> */}
    {/* <Cart/> */}
    <Footer/>
    </>
  )
}

export default App
