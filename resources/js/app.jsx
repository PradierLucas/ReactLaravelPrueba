import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Opcional: Importar funcionalidad JavaScript
import Formulario from './form';
import Tabla from './tabla';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/form" element={<Formulario />} />
                <Route path="/tabla" element={<Tabla />} />
            </Routes>
        </Router>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
