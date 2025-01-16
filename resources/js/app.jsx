import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './form';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/form" element={<Formulario />} />
               
            </Routes>
        </Router>
    );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
