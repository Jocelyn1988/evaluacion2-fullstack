import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/login.css';

export default function IniciarSesion() {
  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    correo: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciales((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificación de Administrador: redirige directo sin alert
    if (credenciales.correo === 'admin@huertohogar.cl' && credenciales.contrasena === 'admin123') {
      navigate('/admin');
      return;
    }

    // Cliente estándar
    navigate('/');
  };

  return (
    <>
      <Navbar />

      <main className="container my-5 py-4 d-flex justify-content-center align-items-center">
        <div className="card shadow-sm border-0 p-4 p-md-5 rounded-3 bg-white tarjeta-auth">
          
          <div className="text-center mb-4">
            <img
              src="/imagenes/logo.jpg"
              alt="Logo Huerto Hogar"
              className="img-fluid rounded-3 img-auth-logo"
            />
          </div>

          <h2 className="h4 fw-bold text-center mb-4 titulo-auth-verde">Inicio de sesión</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="correo" className="form-label fw-semibold text-secondary small">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="correo"
                name="correo"
                value={credenciales.correo}
                onChange={handleChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="contrasena" className="form-label fw-semibold text-secondary small">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="contrasena"
                name="contrasena"
                value={credenciales.contrasena}
                onChange={handleChange}
                placeholder="********"
                required
              />
            </div>

            <button type="submit" className="btn btn-success btn-lg w-100 fw-bold shadow-sm mb-3">
              Iniciar sesión
            </button>

            <div className="text-center small text-muted">
              ¿No tienes cuenta?{' '}
              <Link to="/registrar_usuario" className="text-success text-decoration-none fw-semibold">
                Regístrate aquí
              </Link>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </>
  );
}