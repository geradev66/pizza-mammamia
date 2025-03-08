import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Login = () => {
    const { login } = useContext(UserContext);
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!correo.trim() || !password.trim()) {
            toast.error('Todos los campos son obligatorios');
            return;
        }
        try {
            await login(correo, password);
            Swal.fire({
                title: "Inicio de sesión exitoso",
                icon: "success",
                draggable: true
            });
        } catch (error) {
            toast.error("Error en el inicio de sesión");
        }
    };

    return (
        <div className="container formulario-registro">
            <div className="card p-3 shadow" style={{ width: '18em' }}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        className='form-control mt-2' 
                        type="email" 
                        placeholder='Correo'
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                    <input 
                        className='form-control mt-2' 
                        type="password" 
                        placeholder='Contraseña'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='btn btn-success mt-2' type='submit'>Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
