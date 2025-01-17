import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar estilos de Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Opcional: Importar funcionalidad JavaScript
import Formulario from './form';
import Tabla from './tabla';
import { Navigate } from 'react-router-dom';
import Login from './login'; // Asegúrate de importar el componente Login




const App = () => {

    const isAuthenticated = () => {
        const token = localStorage.getItem('token');
        return token !== null;
    };

    const RutasPrivadas = ({ element }) => {
        return isAuthenticated() ? element : <Navigate to="/login" />;
    };

    return (
        <Router>
            <Routes>
                <Route path="/form" element={<RutasPrivadas element={<Formulario />} />} />
                <Route path="/tabla" element={<RutasPrivadas element={<Tabla />} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
