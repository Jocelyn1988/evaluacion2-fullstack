import React, { useState } from 'react';

// Tipado estricto de los roles permitidos
export type RolUsuario = 'usuario' | 'admin';

interface IniciarSesionProps {
  onLoginSuccess?: (email: string, rol: RolUsuario) => void;
}

export const IniciarSesion: React.FC<IniciarSesionProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rol, setRol] = useState<RolUsuario>('usuario');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess(email, rol);
    } else {
      alert(`Iniciando sesión como ${rol.toUpperCase()} con el correo: ${email}`);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Iniciar Sesión</h2>

      {/* Selector de rol: Usuario o Administrador */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button
          type="button"
          onClick={() => setRol('usuario')}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: rol === 'usuario' ? '#0d6efd' : '#f8f9fa',
            color: rol === 'usuario' ? '#fff' : '#000',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Usuario
        </button>
        <button
          type="button"
          onClick={() => setRol('admin')}
          style={{
            flex: 1,
            padding: '10px',
            backgroundColor: rol === 'admin' ? '#198754' : '#f8f9fa',
            color: rol === 'admin' ? '#fff' : '#000',
            border: '1px solid #ced4da',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Administrador
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '15px' }}>
          Modo actual seleccionado: <strong>{rol === 'usuario' ? 'Usuario Estándar' : 'Administrador'}</strong>
        </p>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Correo electrónico:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Contraseña:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: rol === 'admin' ? '#198754' : '#0d6efd',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Entrar como {rol === 'usuario' ? 'Usuario' : 'Administrador'}
        </button>
      </form>
    </div>
  );
};

export default IniciarSesion;