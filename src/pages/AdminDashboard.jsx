rama/juan
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
=======
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
 main
import '../css/admin.css';

export default function AdminDashboard() {
  const navigate = useNavigate();

 rama/juan
  const handleCerrarSesion = () => {
    navigate('/iniciar_sesion');
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      {/* Barra superior oscura */}

  const [cantUsuarios, setCantUsuarios] = useState(890);
  const [cantCategorias, setCantCategorias] = useState(400);

  useEffect(() => {
    const usuariosGuardados = localStorage.getItem('usuarios_registrados');
    if (usuariosGuardados) {
      try {
        const parsed = JSON.parse(usuariosGuardados);
        setCantUsuarios(parsed.length);
      } catch (e) {
        console.error("Error al leer usuarios", e);
      }
    }

    const categoriasGuardadas = localStorage.getItem('categorias_registradas');
    if (categoriasGuardadas) {
      try {
        const parsed = JSON.parse(categoriasGuardadas);
        setCantCategorias(parsed.length);
      } catch (e) {
        console.error("Error al leer categorías", e);
      }
    }
  }, []);

  const accesosDirectos = [
    {
      titulo: 'Dashboard',
      descripcion: 'Visión general de todas las métricas y estadísticas clave del sistema.',
      icono: '⏱️',
      ruta: '/admin'
    },
    {
      titulo: 'Órdenes',
      descripcion: 'Gestión y seguimiento de todas las órdenes de compra realizadas.',
      icono: '🛒',
      ruta: '/admin/ordenes'
    },
    {
      titulo: 'Productos',
      descripcion: 'Administrar inventario y detalles de los productos disponibles.',
      icono: '📦',
      ruta: '/admin/productos'
    },
    {
      titulo: 'Categorías',
      descripcion: 'Organizar productos en categorías para facilitar su navegación.',
      icono: '🏷️',
      ruta: '/admin/categorias'
    },
    {
      titulo: 'Usuarios',
      descripcion: 'Gestión de cuentas de usuario y sus roles dentro del sistema.',
      icono: '👥',
      ruta: '/admin/usuarios'
    },
    {
      titulo: 'Reportes',
      descripcion: 'Generación de informes detallados sobre las operaciones del sistema.',
      icono: '📈',
      ruta: '/admin/reportes'
    },
    {
      titulo: 'Perfil',
      descripcion: 'Administración de la información personal y configuraciones de cuenta.',
      icono: '👤',
      ruta: '/admin/perfil'
    },
    {
      titulo: 'Tienda',
      descripcion: 'Visualiza tu tienda en tiempo real y gestiona los pedidos.',
      icono: '🏪',
      ruta: '/'
    }
  ];

  return (
    <div className="d-flex flex-column vh-100 bg-light">
 main
      <header className="bg-dark text-white px-3 py-2 d-flex align-items-center">
        <span className="fw-semibold small">Huerto Hogar | Admin</span>
      </header>

      <div className="d-flex flex-grow-1 overflow-hidden">
 rama/juan
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

        <AdminSidebar />

        <main className="flex-grow-1 p-4 overflow-auto">
          <div className="mb-4">
            <h1 className="h2 fw-bold text-dark mb-1">Dashboard</h1>
            <p className="text-secondary small m-0">Resumen de las actividades diarias</p>
          </div>

          {/* Tarjetas superiores de resumen */}
          <div className="row g-3 mb-4">
            <div className="col-12 col-md-4">
              <div 
                className="card text-white p-3 rounded-3 shadow-sm border-0 cursor-pointer"
                style={{ backgroundColor: '#0d6efd', cursor: 'pointer' }}
                onClick={() => navigate('/admin/usuarios')}
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <span className="small text-uppercase fw-bold text-white-50">COMPRAS</span>
                    <h2 className="display-6 fw-bold my-1">1,234</h2>
                    <span className="small">Probabilidad de aumento: <strong>20%</strong></span>
                  </div>
                  <div className="fs-1 opacity-50">🛒</div>
 main
                </div>
              </div>
            </div>

 rama/juan
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
=======
            <div className="col-12 col-md-4">
              <div 
                className="card text-white p-3 rounded-3 shadow-sm border-0 cursor-pointer"
                style={{ backgroundColor: '#198754', cursor: 'pointer' }}
                onClick={() => navigate('/admin/categorias')}
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <span className="small text-uppercase fw-bold text-white-50">PRODUCTOS</span>
                    <h2 className="display-6 fw-bold my-1">{cantCategorias}</h2>
                    <span className="small">Inventario actual: <strong>500</strong></span>
                  </div>
                  <div className="fs-1 opacity-50">📦</div>
 main
                </div>
              </div>
            </div>

 rama/juan
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
=======
            <div className="col-12 col-md-4">
              <div 
                className="card text-white p-3 rounded-3 shadow-sm border-0 cursor-pointer"
                style={{ backgroundColor: '#ffc107', cursor: 'pointer' }}
                onClick={() => navigate('/admin/usuarios')}
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <span className="small text-uppercase fw-bold text-dark-50">USUARIOS</span>
                    <h2 className="display-6 fw-bold my-1 text-dark">{cantUsuarios}</h2>
                    <span className="small text-dark">Nuevos usuarios este mes: <strong>120</strong></span>
                  </div>
                  <div className="fs-1 opacity-50">👥</div>
 main
                </div>
              </div>
            </div>
          </div>

 rama/juan
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
=======
          {/* Grid de Accesos Directos */}
          <div className="row g-3">
            {accesosDirectos.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-3" key={index}>
                <div 
                  className="card h-100 p-3 text-center border shadow-sm rounded-3 bg-white cursor-pointer"
                  onClick={() => navigate(item.ruta)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="fs-2 mb-2">{item.icono}</div>
                  <h3 className="h6 fw-bold text-dark mb-2">{item.titulo}</h3>
                  <p className="text-secondary small m-0 flex-grow-1" style={{ fontSize: '0.825rem' }}>
                    {item.descripcion}
                  </p>
                </div>
              </div>
            ))}
 main
          </div>
        </main>
      </div>
    </div>
  );
}