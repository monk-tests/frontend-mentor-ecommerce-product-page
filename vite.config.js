import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

//vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
})

// export default defineConfig({
//     plugins: [
//         react(),
//         svgr({
//             svgrOptions: {
//                 // svgr options
//             },
//         }),
//     ],
// })
