import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.jsx'], // Archivo principal de tu aplicación React
            refresh: true, // Habilita la recarga automática
        }),
        react(), // Soporte para React
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'), // Alias para recursos de JavaScript
        },
    },
});
