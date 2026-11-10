import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Productos from './pages/Productos';
import DetalleProducto from './pages/DetalleProducto';
import Nosotros from './pages/Nosotros';
import Blogs from './pages/Blogs';
import Contacto from './pages/Contacto';
import Carrito from './pages/Carrito';
import IniciarSesion from './pages/IniciarSesion';
import RegistrarUsuario from './pages/RegistrarUsuario';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsuarios from './pages/AdminUsuarios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/detalle_producto" element={<DetalleProducto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/iniciar_sesion" element={<IniciarSesion />} />
        <Route path="/registrar_usuario" element={<RegistrarUsuario />}/>
        <Route path="/admin" element={<AdminDashboard />} /> 
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;