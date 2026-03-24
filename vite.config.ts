import { defineConfig, Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to resolve figma:asset/* imports locally
function figmaAssetPlugin(): Plugin {
  return {
    name: 'figma-asset',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return '\0figma-asset:' + id;
      }
    },
    load(id) {
      if (id.startsWith('\0figma-asset:')) {
        // Return a transparent 1x1 PNG as a data URL placeholder
        return `export default "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="`;
      }
    },
  }
}

export default defineConfig({
base: '/Newsappheader/',
  plugins: [
    react(),
    tailwindcss(),
    figmaAssetPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
