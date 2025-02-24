import { createContext, useState } from "react";

// 1️⃣ Crear el contexto
export const UserContext = createContext();

// 2️⃣ Crear el proveedor
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Token inicial en true

  const logout = () => setToken(false); // Método para cerrar sesión

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
