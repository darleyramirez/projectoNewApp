import { Routes, Route, Navlink } from "react-router-dom";

import { Registro } from "../../Pages/Registro/Registro";
import { Home } from "../../Pages/Home/Home";

export function Router() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Navlink class="navbar-brand" to="/"></Navlink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Navlink class="nav-link" to="/">
                  Features
                </Navlink>
              </li>
              <li class="nav-item">
                <Navlink class="nav-link" to="/">
                  Pricing
                </Navlink>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="container p-5">
        <Routes>
          <Route path="/" element={<Registro />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </section>
    </>
  );
}
