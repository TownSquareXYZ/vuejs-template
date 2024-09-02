import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const isGitHubPages = loadEnv(mode, process.cwd()).VITE_GH_PAGES == "1";
  console.log(isGitHubPages);
  return defineConfig({
    base: isGitHubPages ? '/vuejs-template/' : './',
    server: {
      host: true,
      port: 8000,
    },
    optimizeDeps: {
      include: ['vue', 'buffer'],
    },
    build: {
      outDir: 'docs',
    },

    plugins: [
      vue(),
      // basicSsl()
    ],
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.esm-bundler.js',
      },
    },
  })
}

