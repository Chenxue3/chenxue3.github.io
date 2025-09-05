import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ghPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ghPages({
      branch: 'gh-pages', // GitHub Pages branch
      repo: 'https://github.com/Chenxue3/chenxue3.github.io.git', // Repository URL
      message: 'deploy', // Commit message
    }),
  ],
  assetsInclude: ['**/*.glb'],
  base: '/chenxue3.github.io/', // Base path for GitHub Pages
})