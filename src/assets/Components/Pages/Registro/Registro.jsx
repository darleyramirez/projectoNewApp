import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialForm = {
  nombre: '',
  correo: '',
  contrasena: '',
  confirmarContrasena: '',
  rol: '',
  aceptarTerminos: false,
};

export function Registro() {
  const [formData, setFormData] = useState(initialForm);
  const [errores, setErrores] = useState({});
  const [mensajeExito, setMensajeExito] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrores((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es obligatorio.';
    }

    if (!formData.correo.trim()) {
      nuevosErrores.correo = 'El correo es obligatorio.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      nuevosErrores.correo = 'Ingresa un correo válido.';
    }

    if (!formData.contrasena) {
      nuevosErrores.contrasena = 'La contraseña es obligatoria.';
    } else if (formData.contrasena.length < 6) {
      nuevosErrores.contrasena = 'La contraseña debe tener al menos 6 caracteres.';
    }

    if (formData.contrasena !== formData.confirmarContrasena) {
      nuevosErrores.confirmarContrasena = 'Las contraseñas no coinciden.';
    }

    if (!formData.rol) {
      nuevosErrores.rol = 'Debes seleccionar un rol.';
    }

    if (!formData.aceptarTerminos) {
      nuevosErrores.aceptarTerminos = 'Debes aceptar los términos.';
    }

    return nuevosErrores;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validarFormulario();

    if (Object.keys(validationErrors).length > 0) {
      setErrores(validationErrors);
      setMensajeExito('');
      return;
    }

    const usuarioRegistrado = {
      nombre: formData.nombre,
      correo: formData.correo,
      rol: formData.rol,
      contrasena: '********',
    };

    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioRegistrado));
    setMensajeExito('Registro completado correctamente.');
    setErrores({});
    setFormData(initialForm);

    setTimeout(() => {
      navigate('/home', { state: { usuario: usuarioRegistrado } });
    }, 500);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-lg-5">
              <h2 className="text-center mb-4 text-primary">Registro de Usuario</h2>

              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Ingresa tu nombre"
                  />
                  {errores.nombre && <div className="invalid-feedback d-block">{errores.nombre}</div>}
                </div>

                <div className="col-12">
                  <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                  <input
                    type="email"
                    className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="ejemplo@correo.com"
                  />
                  {errores.correo && <div className="invalid-feedback d-block">{errores.correo}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="contrasena" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${errores.contrasena ? 'is-invalid' : ''}`}
                    id="contrasena"
                    name="contrasena"
                    value={formData.contrasena}
                    onChange={handleChange}
                    placeholder="********"
                  />
                  {errores.contrasena && <div className="invalid-feedback d-block">{errores.contrasena}</div>}
                </div>

                <div className="col-md-6">
                  <label htmlFor="confirmarContrasena" className="form-label">Confirmar contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${errores.confirmarContrasena ? 'is-invalid' : ''}`}
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    value={formData.confirmarContrasena}
                    onChange={handleChange}
                    placeholder="Repite tu contraseña"
                  />
                  {errores.confirmarContrasena && (
                    <div className="invalid-feedback d-block">{errores.confirmarContrasena}</div>
                  )}
                </div>

                <div className="col-12">
                  <label htmlFor="rol" className="form-label">Rol</label>
                  <select
                    id="rol"
                    name="rol"
                    className={`form-select ${errores.rol ? 'is-invalid' : ''}`}
                    value={formData.rol}
                    onChange={handleChange}
                  >
                    <option value="">Selecciona un rol...</option>
                    <option value="admin">Administrador</option>
                    <option value="usuario">Usuario Estándar</option>
                    <option value="editor">Editor</option>
                  </select>
                  {errores.rol && <div className="invalid-feedback d-block">{errores.rol}</div>}
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      className={`form-check-input ${errores.aceptarTerminos ? 'is-invalid' : ''}`}
                      type="checkbox"
                      id="aceptarTerminos"
                      name="aceptarTerminos"
                      checked={formData.aceptarTerminos}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="aceptarTerminos">
                      Acepto los términos y condiciones
                    </label>
                  </div>
                  {errores.aceptarTerminos && (
                    <div className="text-danger small mt-1">{errores.aceptarTerminos}</div>
                  )}
                </div>

                <div className="col-12 d-grid">
                  <button type="submit" className="btn btn-primary btn-lg mt-2">
                    Registrar
                  </button>
                </div>

                {mensajeExito && (
                  <div className="col-12">
                    <div className="alert alert-success mb-0">{mensajeExito}</div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}