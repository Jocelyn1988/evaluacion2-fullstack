import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { productos } from '../data/productos';
import '../css/productos.css';

export default function Productos() {
  const [productoAgregado, setProductoAgregado] = useState(null);

  const handleAgregar = (prod) => {
    const carritoActual = JSON.parse(localStorage.getItem('carrito') || '[]');
    const item = carritoActual.find((i) => i.id === prod.id);

    if (item) {
      item.cantidad += 1;
    } else {
      carritoActual.push({
        id: prod.id,
        nombre: prod.nombre,
        precio: prod.precioNumero,
        cantidad: 1,
        imagen: prod.imagen
      });
    }

    localStorage.setItem('carrito', JSON.stringify(carritoActual));

    // Muestra la notificación flotante
    setProductoAgregado(prod.nombre);
    setTimeout(() => {
      setProductoAgregado(null);
    }, 3000);
  };

  return (
    <>
      <Navbar />

      <main className="container my-5">
        <h2 className="text-center mb-5 fw-normal seccion-titulo-catalogo">PRODUCTOS</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {productos.map((prod) => (
            <div className="col" key={prod.id}>
              <div className="card h-100 shadow-sm border tarjeta-producto-catalogo p-3 text-center">
                <Link to={`/detalle_producto?id=${prod.id}`}>
                  <img src={prod.imagen} alt={prod.nombre} className="card-img-top img-catalogo mb-3" />
                </Link>
                <div className="card-body d-flex flex-column justify-content-between p-0">
                  <Link to={`/detalle_producto?id=${prod.id}`} className="text-decoration-none titulo-producto-link mb-2">
                    {prod.nombre}
                  </Link>
                  <div className="precio-producto-texto mb-3 fw-bold">
                    {prod.precio}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notificación flotante de confirmación (Toast sin alert de navegador) */}
        {productoAgregado && (
          <div
            className="position-fixed bottom-0 end-0 p-3"
            style={{ zIndex: 1100 }}
          >
            <div className="toast show align-items-center text-bg-success border-0 shadow-lg" role="alert">
              <div className="d-flex">
                <div className="toast-body fw-semibold">
                  🛒 ¡Se agregó <strong>{productoAgregado}</strong> al carrito!
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white me-2 m-auto"
                  aria-label="Cerrar"
                  onClick={() => setProductoAgregado(null)}
                ></button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}