import { Link } from "react-router-dom";

const Navbar = () => {
    const total = 25000
    const token = false
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand" href="#"><Link to="/">Pizzería Mamma Mía</Link></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse estructuraNav" id="navbarSupportedContent">
                <div className="navegacion">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><Link to="/"><button type="button" className="btn btn-outline-light ms-3">🍕Home</button></Link></li>
                    <li><Link to="/login"><button type="button" className="btn btn-outline-light ms-3"> 🔒Login</button></Link></li>
                    <li><Link to="/register"><button type="button" className="btn btn-outline-light ms-3"> 🔏Register</button></Link></li>
                </ul>
                </div>
                <div className="botonCarrito">
                    <Link to="/cart"><button type="button" className="btn btn-outline-primary ms-3">🛒Total: {total} </button></Link>
                </div>
            </div>
        </div>
        </nav>


    </>
  )
}

export default Navbar