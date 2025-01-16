import React, { useState } from 'react';


const Formulario = () => {
    const [nombre, setNombre] = useState('');
    const [precioPorKg, setPrecioPorKg] = useState('');
    const [mensaje, setMensaje] = useState('');


    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/verduras/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrfToken, 
                },
                body: JSON.stringify({
                    nombre,
                    precioPorKg,
                }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setMensaje('Verdura guardada exitosamente');
            setNombre('');
            setPrecioPorKg('');
        } catch (error) {
            setMensaje('Error al guardar la verdura');
            console.error('Error al enviar datos:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Agregar Verdura</h1>
            {mensaje && <div className="alert alert-info">{mensaje}</div>}
            <form onSubmit={handleSubmit}>
            
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre de la Verdura</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="precioPorKg" className="form-label">Precio por Kg</label>
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="precioPorKg"
                        value={precioPorKg}
                        onChange={(e) => setPrecioPorKg(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>
        </div>
    );
};

export default Formulario;
