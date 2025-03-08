import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Register = () => {
    const { register } = useContext(UserContext);
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!correo.trim() || !password.trim() || !confirm.trim()) {
            toast.error('Todos los campos son obligatorios');
            return;
        }
        if (password !== confirm) {
            toast.warning('Las contraseñas no coinciden');
            return;
        }
        if (password.length < 6) {
            toast.warning('La contraseña debe tener al menos 6 caracteres');
            return;
        }
        try {
            await register(correo, password);
            Swal.fire({
                title: "Registro exitoso",
                icon: "success",
                draggable: true
            });
        } catch (error) {
            toast.error("Error en el registro");
        }
    };

    return (
        <div className="container formulario-registro">
            <div className="card p-3 shadow" style={{ width: '18em' }}>
                <h2>Registro</h2>
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
                    <input 
                        className='form-control mt-2' 
                        type="password" 
                        placeholder='Confirmar contraseña'
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                    />
                    <button className='btn btn-success mt-2' type='submit'>Registrarse</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
