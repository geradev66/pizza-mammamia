import React from 'react'

const Navbar = () => {
    const total = 25000
    const token = false
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container">
            <a className="navbar-brand" href="#">Pizzería Mamma Mía</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse estructuraNav" id="navbarSupportedContent">
                <div className="navegacion">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li><button type="button" className="btn btn-outline-light ms-3">🍕Home</button></li>
                    <li><button type="button" className="btn btn-outline-light ms-3"> 🔒Login</button></li>
                    <li><button type="button" className="btn btn-outline-light ms-3"> 🔏Register</button></li>
                </ul>
                </div>
                <div className="botonCarrito">
                    <button type="button" className="btn btn-outline-primary ms-3">🛒Total: {total} </button>
                </div>
            </div>
        </div>
        </nav>


    </>
  )
}

export default Navbar