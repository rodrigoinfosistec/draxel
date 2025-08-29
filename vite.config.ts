import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    
    esbuild: {
        jsx: 'automatic',
    },

    server: {
        host: '0.0.0.0', // aceita conexões externas
        port: 5173,
        hmr: {
            host: '127.0.0.1', // garante que o browser veja o host correto
            port: 5173,
        },
        watch: {
            usePolling: true, // necessário para WSL2/Docker
        },
    },
});
