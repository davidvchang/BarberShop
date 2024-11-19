import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
// import NavBar from "./pages/NavBar";
// import Dashboard from "./pages/Dashboard";
import Principal from "./pages/Principal";


function App() {

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  

  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <BrowserRouter>
      <main className="main">

        <Routes>
          {/* Si el usuario no está autenticado, redirigir al login */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login isLogin={handleLogin} />} />

          {/* Ruta protegida de dashboard, solo accesible si está autenticado */}
          <Route path="/*" element={isAuthenticated ? <Principal /> : <Navigate to="/login" />} />

          <Route path="/" element={<Navigate to="/login" />} />




        </Routes>
      </main>
    
    </BrowserRouter>
  )
}

export default App
