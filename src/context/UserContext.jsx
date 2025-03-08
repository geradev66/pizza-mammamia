import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(null);

  // Función para hacer login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en la autenticación");

      const data = await response.json();
      setToken(data.token);
      setEmail(email);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error en login:", error);
    }
  };

  // Función para registrarse
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en el registro");

      const data = await response.json();
      setToken(data.token);
      setEmail(email);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error en register:", error);
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};
