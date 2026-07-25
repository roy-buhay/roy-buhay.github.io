import { defineConfig } from "astro/config";

export default defineConfig({
    site: 'https://roy-buhay.github.io',
    base: '/',
    prefetch: {
        defaultStrategy: 'hover',
    },
    vite: {
        build: {
            assetsInclude: ['**/*.png','**/*.jpg','**/*.webp','**/*.svg'],
        },
    },
})