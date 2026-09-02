import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

function syncRootPlugin() {
  return {
    name: 'sync-root-plugin',
    closeBundle() {
      try {
        const devHtmlPath = resolve(__dirname, 'dist/dev.html');
        const distIndexPath = resolve(__dirname, 'dist/index.html');
        const rootIndexPath = resolve(__dirname, 'index.html');
        const rootNoJekyll = resolve(__dirname, '.nojekyll');
        const distNoJekyll = resolve(__dirname, 'dist/.nojekyll');

        // Copy dist/dev.html to dist/index.html and root index.html
        if (fs.existsSync(devHtmlPath)) {
          fs.copyFileSync(devHtmlPath, distIndexPath);
          fs.copyFileSync(devHtmlPath, rootIndexPath);
        }

        // Create .nojekyll in root and dist
        fs.writeFileSync(rootNoJekyll, '');
        fs.writeFileSync(distNoJekyll, '');

        // Copy dist/assets to root assets/ for GitHub Pages root deployment
        const distAssetsDir = resolve(__dirname, 'dist/assets');
        const rootAssetsDir = resolve(__dirname, 'assets');
        if (fs.existsSync(distAssetsDir)) {
          if (!fs.existsSync(rootAssetsDir)) {
            fs.mkdirSync(rootAssetsDir, { recursive: true });
          }
          const files = fs.readdirSync(distAssetsDir);
          for (const file of files) {
            fs.copyFileSync(resolve(distAssetsDir, file), resolve(rootAssetsDir, file));
          }
        }
      } catch (err) {
        console.error('syncRootPlugin error:', err);
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), syncRootPlugin()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'dev.html')
      }
    }
  },
  server: {
    port: 3000,
    open: '/dev.html'
  }
});
