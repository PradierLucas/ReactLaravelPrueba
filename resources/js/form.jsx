import React from 'react';
import { useState, useEffect } from 'react';



const Formulario = () => {
    const [products, setProducts] = useState([]);

  // Función para obtener los datos de la API
const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products'); // Realiza la solicitud GET
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Maneja errores HTTP
        }
        const data = await response.json(); // Convierte la respuesta a JSON
        setProducts(data); // Actualiza el estado con los datos obtenidos
    } catch (error) {
        console.error('Error fetching products:', error); // Maneja errores de red o JSON
    }
};

    // Llamar a la API cuando el componente se monta
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='container mt-3'>
            <h1>Lista de Productos</h1>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Formulario;

