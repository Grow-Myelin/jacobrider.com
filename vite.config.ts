import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.JPG', '**/*.png', '**/*.jpg', '**/*.jpeg'],
})