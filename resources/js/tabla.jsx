import React, { useState, useEffect } from 'react';

const Tabla = () => {
    const [products, setProducts] = useState([]); // Estado para almacenar los productos

    // Función para obtener los datos de la API
    const fetchProducts = async () => {
        try {
            const response = await fetch('/verduras'); // Realiza la solicitud GET
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); // Maneja errores HTTP
            }
            const data = await response.json(); // Convierte la respuesta a JSON
            setProducts(data); // Actualiza el estado con los datos obtenidos
        } catch (error) {
            console.error('Error fetching products:', error); // Maneja errores
        }
    };

    // Llamar a fetchProducts cuando el componente se monta
    useEffect(() => {
        fetchProducts();
    }, []);

    // Renderizar la tabla con los productos
    return (
        <div className="container mt-5">
            <h1>Lista de Verduras</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.nombre}</td>
                            <td>{product.precioPorKg}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Tabla;
