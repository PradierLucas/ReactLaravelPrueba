import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';


const Login = () => {
    const [mail, setmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken, 
            },
            body: JSON.stringify({ mail, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful login
            console.log('Login successful', data);
        } else {
            // Handle errors
            setError(data.message || 'Login failed');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="usuario">Mail</label>
                                    <input
                                        type="mail"
                                        className="form-control"
                                        id="mail"
                                        value={mail}
                                        onChange={(e) => setusuario(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



const root = createRoot(document.getElementById('login'));
root.render(<Login />);