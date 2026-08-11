import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-dom/client";

import{Router} from './components/Router/Router'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createRoot(document.getElementById('root')).render(
 <StrictMode>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
    </StrictMode>
)
