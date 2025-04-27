// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import MillionLint from "@million/lint";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [MillionLint.vite()],
});