import { NavLink, Route, Routes } from 'react-router-dom';

import { Home } from '../Pages/Home/Home';
import { Registro } from '../Pages/Registro/Registro';

export function Router() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Mi App
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/registro">
                  Registro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="bg-light min-vh-100">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
