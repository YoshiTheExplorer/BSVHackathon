export default defineConfig({
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                injectYoutube: resolve(__dirname, 'src/injectYoutube.ts')
            },
            output: {
                format: 'iife', // <- 👈 bundle all imports into one browser-friendly function
                entryFileNames: '[name].js'
            }
        }
    }
})
