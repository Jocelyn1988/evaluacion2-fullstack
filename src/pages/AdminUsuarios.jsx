import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/admin.css';
import '../css/admin_usuarios.css';

const usuariosPorDefecto = [
  { id: 1, date: "2024-06-01", order: "SO1001", customer: "Acme Corporation", status: "Enviado", amount: "$2.500.000" },
  { id: 2, date: "2024-06-02", order: "SO1002", customer: "Bravo Solutions", status: "Pendiente", amount: "$1.200.000" },
  { id: 3, date: "2024-06-02", order: "SO1003", customer: "Charlie's Workshop", status: "Cancelado", amount: "$500.000" },
  { id: 4, date: "2024-06-03", order: "SO1004", customer: "Delta Retail", status: "En proceso", amount: "$750.000" },
  { id: 5, date: "2024-06-04", order: "SO1005", customer: "Echo Enterprises", status: "Enviado", amount: "$3.000.000" },
  { id: 6, date: "2024-06-05", order: "SO1006", customer: "Foxtrot Media", status: "Pendiente", amount: "$1.150.000" },
  { id: 7, date: "2024-06-06", order: "SO1007", customer: "Golf Goods Inc.", status: "Enviado", amount: "$2.300.000" },
  { id: 8, date: "2024-06-07", order: "SO1008", customer: "Hotel Harmony", status: "En proceso", amount: "$900.000" },
  { id: 9, date: "2024-06-08", order: "SO1009", customer: "India IT Solutions", status: "Cancelado", amount: "$600.000" },
  { id: 10, date: "2024-06-09", order: "SO1010", customer: "Juliett Services", status: "Enviado", amount: "$1.850.000" },
  { id: 11, date: "2024-06-10", order: "SO1011", customer: "Kilo Retail Group", status: "Pendiente", amount: "$2.750.000" },
  { id: 12, date: "2024-06-11", order: "SO1012", customer: "Lima Landscaping", status: "Enviado", amount: "$980.000" }
];

export default function AdminUsuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState(() => {
    const guardados = localStorage.getItem('usuarios_registrados');
    if (guardados) {
      try {
        return JSON.parse(guardados);
      } catch (e) {
        return usuariosPorDefecto;
      }
    }
    localStorage.setItem('usuarios_registrados', JSON.stringify(usuariosPorDefecto));
    return usuariosPorDefecto;
  });

  const [paginaActual, setPaginaActual] = useState(1);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  // Traduce automáticamente tanto si viene en inglés como si viene en español
  const traducirEstado = (estado) => {
    switch (estado) {
      case 'Shipped':
      case 'Enviado':
        return 'Enviado';
      case 'Pending':
      case 'Pendiente':
        return 'Pendiente';
      case 'Processing':
      case 'En proceso':
        return 'En proceso';
      case 'Cancelled':
      case 'Cancelado':
        return 'Cancelado';
      default:
        return estado;
    }
  };

  const actualizarUsuarios = (nuevaLista) => {
    setUsuarios(nuevaLista);
    localStorage.setItem('usuarios_registrados', JSON.stringify(nuevaLista));
  };

  const handleCerrarSesion = () => {
    navigate('/iniciar_sesion');
  };

  const handleEliminar = (id, nombre) => {
    if (window.confirm(`¿Estás seguro de eliminar a "${nombre}"?`)) {
      const filtrados = usuarios.filter((u) => u.id !== id);
      actualizarUsuarios(filtrados);
    }
  };

  const handleEditarClick = (user) => {
    setUsuarioEditando({
      ...user,
      status: traducirEstado(user.status)
    });
  };

  const handleGuardarEdicion = (e) => {
    e.preventDefault();
    const modificados = usuarios.map((u) => (u.id === usuarioEditando.id ? usuarioEditando : u));
    actualizarUsuarios(modificados);
    setUsuarioEditando(null);
  };

  return (
    <div className="d-flex flex-column vh-100 bg-light">
      {/* Barra superior oscura */}
      <header className="bg-dark text-white px-3 py-2 d-flex align-items-center">
        <span className="fw-semibold small">Huerto Hogar | Panel Admin</span>
      </header>

      <div className="d-flex flex-grow-1 overflow-hidden">
        {/* Barra lateral */}
        <aside className="admin-sidebar bg-white border-end d-flex flex-column justify-content-between p-3">
          <div>
            <ul className="nav nav-pills flex-column gap-1">
              <li className="nav-item">
                <Link to="/admin" className="nav-link text-secondary fw-semibold d-flex align-items-center gap-2">
                  <span>📊</span> Panel Principal
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
                <Link to="/admin/usuarios" className="nav-link active fw-semibold d-flex align-items-center gap-2">
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

        {/* Panel central de Usuarios */}
        <main className="flex-grow-1 p-4 overflow-auto">
          <div className="card shadow-sm border rounded-0 bg-white p-4">
            
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center gap-3">
                <h1 className="h2 fw-bold text-dark m-0">Usuarios</h1>
                <Link to="/registrar_usuario" className="btn btn-dark text-uppercase fw-semibold btn-nuevo-usuario">
                  Nuevo Usuario
                </Link>
              </div>

              <div className="d-flex align-items-center gap-3">
                <button type="button" className="btn border-0 bg-transparent fs-5 p-0" title="Notificaciones">
                  🔔
                </button>
              </div>
            </div>

            <div className="mb-3">
              <span className="fw-semibold text-secondary small d-inline-flex align-items-center gap-1 cursor-pointer">
                Todas las órdenes de compra ▾
              </span>
            </div>

            {/* Tabla con estados en español */}
            <div className="table-responsive">
              <table className="table table-sm table-striped align-middle tabla-ordenes m-0">
                <thead>
                  <tr className="table-light-header">
                    <th className="fw-semibold py-2">Fecha ⬍</th>
                    <th className="fw-semibold py-2">Orden N° ⬍</th>
                    <th className="fw-semibold py-2">Cliente ⬍</th>
                    <th className="fw-semibold py-2">Estado ⬍</th>
                    <th className="fw-semibold py-2 text-end">Monto ⬍</th>
                    <th className="fw-semibold py-2 text-center" style={{ width: '130px' }}>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuarios.map((item) => {
                    const estadoEsp = traducirEstado(item.status);
                    return (
                      <tr key={item.id}>
                        <td className="py-2 text-secondary small">{item.date}</td>
                        <td className="py-2 text-secondary small">{item.order}</td>
                        <td className="py-2 text-dark small fw-medium">{item.customer}</td>
                        <td className="py-2 text-secondary small">
                          <span className={`badge ${
                            estadoEsp === 'Enviado' ? 'bg-success-subtle text-success' :
                            estadoEsp === 'Pendiente' ? 'bg-warning-subtle text-warning-emphasis' :
                            estadoEsp === 'En proceso' ? 'bg-primary-subtle text-primary' :
                            'bg-danger-subtle text-danger'
                          }`}>
                            {estadoEsp}
                          </span>
                        </td>
                        <td className="py-2 text-dark small text-end fw-medium">{item.amount}</td>
                        <td className="py-2 text-center">
                          <div className="d-flex justify-content-center gap-2">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-primary px-2 py-0"
                              title="Editar usuario"
                              onClick={() => handleEditarClick(item)}
                            >
                              ✏️
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger px-2 py-0"
                              title="Eliminar usuario"
                              onClick={() => handleEliminar(item.id, item.customer)}
                            >
                              🗑️
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                  {usuarios.length === 0 && (
                    <tr>
                      <td colSpan="6" className="text-center py-4 text-muted">
                        No hay usuarios registrados actualmente.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Paginación */}
            <div className="d-flex justify-content-center mt-4">
              <div className="btn-group paginador-custom" role="group">
                <button type="button" className="btn btn-light border py-1 px-3 small">&laquo;</button>
                <button type="button" className="btn btn-light border py-1 px-3 small">&lsaquo;</button>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    className={`btn border py-1 px-3 small ${paginaActual === num ? 'btn-primary text-white' : 'btn-light'}`}
                    onClick={() => setPaginaActual(num)}
                  >
                    {num}
                  </button>
                ))}
                <button type="button" className="btn btn-light border py-1 px-3 small">&rsaquo;</button>
                <button type="button" className="btn btn-light border py-1 px-3 small">&raquo;</button>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Modal para Editar Usuario traducido al español */}
      {usuarioEditando && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content shadow">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">Editar Usuario / Cliente</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  aria-label="Cerrar"
                  onClick={() => setUsuarioEditando(null)}
                ></button>
              </div>
              <form onSubmit={handleGuardarEdicion}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Nombre del Cliente / Empresa</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditando.customer}
                      onChange={(e) => setUsuarioEditando({ ...usuarioEditando, customer: e.target.value })}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Estado de la Orden</label>
                    <select
                      className="form-select"
                      value={usuarioEditando.status}
                      onChange={(e) => setUsuarioEditando({ ...usuarioEditando, status: e.target.value })}
                    >
                      <option value="Enviado">Enviado</option>
                      <option value="Pendiente">Pendiente</option>
                      <option value="En proceso">En proceso</option>
                      <option value="Cancelado">Cancelado</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label small fw-semibold">Monto / Facturación</label>
                    <input
                      type="text"
                      className="form-control"
                      value={usuarioEditando.amount}
                      onChange={(e) => setUsuarioEditando({ ...usuarioEditando, amount: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm"
                    onClick={() => setUsuarioEditando(null)}
                  >
                    Cancelar
                  </button>
                  <button type="submit" className="btn btn-success btn-sm fw-bold">
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}