import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            core: "".concat(path.resolve(__dirname, './src/core/')),
            store: "".concat(path.resolve(__dirname, './src/core/+store/')),
            app: "".concat(path.resolve(__dirname, './src/core/+app/')),
            hooks: "".concat(path.resolve(__dirname, './src/core/hooks/')),
            components: "".concat(path.resolve(__dirname, './src/components/')),
            routes: "".concat(path.resolve(__dirname, './src/routes/'))
        }
    }
});
