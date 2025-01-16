import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Login from './components/Login'

function App() {
  return (
    <>
    {/* <Home/> */}
    <Navbar/>
    {/* <Register/> */}
    <Login/>
    <Footer/>
    </>
  )
}

export default App
