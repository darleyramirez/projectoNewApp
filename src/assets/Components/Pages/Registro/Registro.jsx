import React from 'react';

export function Registro() {
  return (
    <>
      <h1>Hola soy el Registro</h1>
      
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
        <h2>Registro de Usuario</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="nombre" style={{ marginBottom: '5px' }}>Nombre:</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              placeholder="Ingresa tu nombre" 
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

        
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="correo" style={{ marginBottom: '5px' }}>Correo Electrónico:</label>
            <input 
              type="email" 
              id="correo" 
              name="correo" 
              placeholder="ejemplo@correo.com" 
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

         
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="contrasena" style={{ marginBottom: '5px' }}>Contraseña:</label>
            <input 
              type="password" 
              id="contrasena" 
              name="contrasena" 
              placeholder="********" 
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="rol" style={{ marginBottom: '5px' }}>Rol:</label>
            <select 
              id="rol" 
              name="rol" 
              style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="">Selecciona un rol...</option>
              <option value="admin">Administrador</option>
              <option value="usuario">Usuario Estándar</option>
              <option value="editor">Editor</option>
            </select>
          </div>

        
          <button 
            type="submit" 
            style={{ 
              padding: '10px', 
              backgroundColor: '#007BFF', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer',
              marginTop: '10px'
            }}
          >
            Registrar
          </button>
          
        </form>
      </div>
    </>
  );
}