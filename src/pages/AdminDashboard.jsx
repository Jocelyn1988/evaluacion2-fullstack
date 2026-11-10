import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/admin.css';

export default function AdminDashboard() {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    navigate('/iniciar_sesion');
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      {/* Barra superior oscura */}
      <header className="bg-dark text-white px-3 py-2 d-flex align-items-center">
        <span className="fw-semibold small">Huerto Hogar | Admin</span>
      </header>

      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Barra lateral (Sidebar) */}
        <aside className="admin-sidebar bg-white border-end d-flex flex-column justify-content-between p-3">
          <div>
            <ul className="nav nav-pills flex-column gap-1">
              <li className="nav-item">
                <Link to="/admin" className="nav-link active fw-semibold d-flex align-items-center gap-2">
                  <span>📊</span> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <a href="#ordenes" className="nav-link text-secondary d-flex align-items-center gap-2">
                  <span>📋</span> Órdenes
                </a>
              </li>
              <li className="nav-item">
                <Link to="/productos" className="nav-link text-secondary d-flex align-items-center gap-2">
                  <span>🛒</span> Productos
                </Link>
              </li>
              <li className="nav-item">
                <a href="#categorias" className="nav-link text-secondary d-flex align-items-center gap-2">
                  <span>🏷️</span> Categorías
                </a>
              </li>
              <li className="nav-item">
                <Link to="/admin/usuarios" className="nav-link text-secondary d-flex align-items-center gap-2">
                  <span>👥</span> Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <a href="#reportes" className="nav-link text-secondary d-flex align-items-center gap-2">
                  <span>📈</span> Reportes
                </a>
              </li>
              <li className="nav-item mt-3 pt-2 border-top">
                <a href="#perfil" className="nav-link text-secondary d-flex align-items-center gap-2">
                  <span>👤</span> Perfil
                </a>
              </li>
            </ul>
          </div>

          {/* Botones inferiores del sidebar */}
          <div className="d-flex flex-column gap-2">
            <Link to="/" className="btn btn-dark w-100 fw-semibold d-flex align-items-center justify-content-center gap-2">
              <span>🏪</span> Tienda
            </Link>
            <button 
              type="button" 
              className="btn btn-danger w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
              onClick={handleCerrarSesion}
            >
              <span>🚪</span> Cerrar Sesión
            </button>
          </div>
        </aside>

        {/* Contenido principal */}
        <main className="flex-grow-1 p-4 overflow-auto">
          <div className="mb-4">
            <h1 className="h3 fw-bold text-dark m-0">Dashboard</h1>
            <p className="text-secondary small m-0">Resumen de las actividades diarias</p>
          </div>

          {/* 1. Tarjetas Superiores de Métricas */}
          <div className="row g-3 mb-4">
            {/* Compras */}
            <div className="col-12 col-md-4">
              <div className="card text-white bg-primary p-3 shadow-sm border-0 rounded-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="fs-1">🛒</div>
                  <div>
                    <span className="small text-white-50 text-uppercase fw-semibold">Compras</span>
                    <h2 className="h3 fw-bold m-0">1,234</h2>
                  </div>
                </div>
                <div className="text-end small mt-2 text-white-50">
                  Probabilidad de aumento: <strong>20%</strong>
                </div>
              </div>
            </div>

            {/* Productos */}
            <div className="col-12 col-md-4">
              <div className="card text-white bg-success p-3 shadow-sm border-0 rounded-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="fs-1">📦</div>
                  <div>
                    <span className="small text-white-50 text-uppercase fw-semibold">Productos</span>
                    <h2 className="h3 fw-bold m-0">400</h2>
                  </div>
                </div>
                <div className="text-end small mt-2 text-white-50">
                  Inventario actual: <strong>500</strong>
                </div>
              </div>
            </div>

            {/* Usuarios */}
            <div className="col-12 col-md-4">
              <div className="card text-white bg-warning p-3 shadow-sm border-0 rounded-3">
                <div className="d-flex align-items-center gap-3">
                  <div className="fs-1">👥</div>
                  <div>
                    <span className="small text-white-50 text-uppercase fw-semibold">Usuarios</span>
                    <h2 className="h3 fw-bold m-0">890</h2>
                  </div>
                </div>
                <div className="text-end small mt-2 text-white-50">
                  Nuevos usuarios este mes: <strong>120</strong>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Grilla de Módulos / Acciones */}
          <div className="row g-3">
            {/* Dashboard */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                <div className="fs-2 text-primary mb-2">⏱️</div>
                <h3 className="h6 fw-bold text-dark mb-1">Dashboard</h3>
                <p className="small text-muted m-0">
                  Visión general de todas las métricas y estadísticas clave del sistema.
                </p>
              </div>
            </div>

            {/* Órdenes */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                <div className="fs-2 text-primary mb-2">🛒</div>
                <h3 className="h6 fw-bold text-dark mb-1">Órdenes</h3>
                <p className="small text-muted m-0">
                  Gestión y seguimiento de todas las órdenes de compra realizadas.
                </p>
              </div>
            </div>

            {/* Productos */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                <div className="fs-2 text-primary mb-2">📦</div>
                <h3 className="h6 fw-bold text-dark mb-1">Productos</h3>
                <p className="small text-muted m-0">
                  Administrar inventario y detalles de los productos disponibles.
                </p>
              </div>
            </div>

            {/* Categorías */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                <div className="fs-2 text-primary mb-2">🏷️</div>
                <h3 className="h6 fw-bold text-dark mb-1">Categorías</h3>
                <p className="small text-muted m-0">
                  Organizar productos en categorías para facilitar su navegación.
                </p>
              </div>
            </div>

            {/* Usuarios */}
            <div className="col-12 col-sm-6 col-lg-3">
              <Link to="/admin/usuarios" className="text-decoration-none">
                <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                  <div className="fs-2 text-primary mb-2">👥</div>
                  <h3 className="h6 fw-bold text-dark mb-1">Usuarios</h3>
                  <p className="small text-muted m-0">
                    Gestión de cuentas de usuario y sus roles dentro del sistema.
                  </p>
                </div>
              </Link>
            </div>

            {/* Reportes */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                <div className="fs-2 text-primary mb-2">📊</div>
                <h3 className="h6 fw-bold text-dark mb-1">Reportes</h3>
                <p className="small text-muted m-0">
                  Generación de informes detallados sobre las operaciones del sistema.
                </p>
              </div>
            </div>

            {/* Perfil */}
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                <div className="fs-2 text-primary mb-2">👤</div>
                <h3 className="h6 fw-bold text-dark mb-1">Perfil</h3>
                <p className="small text-muted m-0">
                  Administración de la información personal y configuraciones de cuenta.
                </p>
              </div>
            </div>

            {/* Tienda */}
            <div className="col-12 col-sm-6 col-lg-3">
              <Link to="/" className="text-decoration-none">
                <div className="card h-100 p-3 text-center border-0 shadow-sm rounded-3 admin-card-action">
                  <div className="fs-2 text-primary mb-2">🏪</div>
                  <h3 className="h6 fw-bold text-dark mb-1">Tienda</h3>
                  <p className="small text-muted m-0">
                    Visualiza tu tienda en tiempo real y gestiona los pedidos.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}