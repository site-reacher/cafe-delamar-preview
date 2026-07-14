import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // Required because this preview is hosted inside a GitHub repository path.
  base: '/cafe-delamar-preview/',

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
