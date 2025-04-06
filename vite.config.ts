import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                content: resolve(__dirname, 'src/injectYoutube.ts'),
            },
            output: {
                format: 'iife', // 👈 IMPORTANT: bundle as classic script
                entryFileNames: '[name].js',
            }
        }
    },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: 'public/manifest.json', dest: '.' },
                { src: 'public/login.html', dest: '.' },
                { src: 'public/icons', dest: '.' }
            ]
        })
    ]
})
