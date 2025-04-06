import { defineConfig } from 'vite'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                injectYoutube: resolve(__dirname, 'src/injectYoutube.ts')
            },
            output: {
                format: 'iife', // 🔥 ensures no `import` in built JS
                entryFileNames: '[name].js'
            }
        }
    },
    plugins: [
        viteStaticCopy({
            targets: [
                { src: 'public/manifest.json', dest: '.' },
                { src: 'public/youtubeAuth.html', dest: '.' }
            ]
        })
    ]
})
