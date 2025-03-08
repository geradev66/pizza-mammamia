import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
    const { email, logout } = useContext(UserContext);

    return (
        <div className="container perfil">
            <h2>{email ? email : "Usuario no identificado"}</h2>
            <button className='btn btn-danger' onClick={logout}>Cerrar Sesión</button>
        </div>
    );
};

export default Profile;
