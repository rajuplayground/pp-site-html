import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '',
    publicDir: "./public",
    build: {
        outDir: "dist",
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                author: resolve(__dirname, 'author-info.html'),
                peer: resolve(__dirname, 'peer-review.html'),
                editorial: resolve(__dirname, 'editorial-board.html'),
                archives: resolve(__dirname, 'archives.html'),
                submit: resolve(__dirname, 'submit-paper.html'),
                volume: resolve(__dirname, 'volume-1.html'),
                js: resolve(__dirname, 'assets/js/script.js'),
            },
        }
    },
    server: {
        host: "0.0.0.0",
        port: 3000
    }
})
