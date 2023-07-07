import { defineConfig, loadEnv } from 'vite'

// export default defineConfig(({ command, mode }) => {
//   // Load env file based on `mode` in the current working directory.
//   // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
//   const env = loadEnv(mode, process.cwd(), '')
//   return {
//     // vite config
    
//     define: {
//       __APP_ENV__: JSON.stringify(env.APP_ENV),
//     },
//     root:"src",
//   }
// })

export default {
  // Other Vite options...
  build: {
    rollupOptions: {
      input: 'index.html', // Specify the correct path to your entry point file
    },
    optimizeDeps: {
      // include: ['src/**/*.js'], // Add file patterns to include for pre-bundling
      include: ['src/*'],
    },
  },
};

