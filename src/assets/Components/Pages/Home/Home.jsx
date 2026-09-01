import { useLocation } from 'react-router-dom';

export function Home() {
  const location = useLocation();
  const usuario = location.state?.usuario ?? JSON.parse(localStorage.getItem('usuarioRegistrado') ?? 'null');

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h1 className="mb-4 text-primary">Bienvenido</h1>

              {usuario ? (
                <>
                  <p className="lead mb-4">Tu registro ha sido completado correctamente.</p>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Nombre:</strong> {usuario.nombre}</li>
                    <li className="list-group-item"><strong>Correo:</strong> {usuario.correo}</li>
                    <li className="list-group-item"><strong>Rol:</strong> {usuario.rol}</li>
                  </ul>
                </>
              ) : (
                <div className="alert alert-info mb-0">
                  Aún no has registrado un usuario. Completa el formulario para continuar.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}