import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                resetPassword: resolve(__dirname, 'src/pages/auth/reset-password.html'),
                dashboard: resolve(__dirname, 'src/pages/dashboard.html'),
                projects: resolve(__dirname, 'src/pages/projects/projects.html'),
                projectCreate: resolve(__dirname, 'src/pages/projects/project-creation.html'),
                projectDetails: resolve(__dirname, 'src/pages/projects/project-details.html'),
                tickets: resolve(__dirname, 'src/pages/tickets/tickets.html'),
                ticketCreate: resolve(__dirname, 'src/pages/tickets/ticket-creation.html'),
                ticketDetails: resolve(__dirname, 'src/pages/tickets/ticket-details.html'),
                profile: resolve(__dirname, 'src/pages/profile.html')
            }
        }
    },
    server: {
        port: 3000,
        open: true
    }
});