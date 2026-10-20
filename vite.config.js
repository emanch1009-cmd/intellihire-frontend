import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {viteSingleFile} from 'vite-plugin-singlefile'
// Set SINGLE=1 to build one self-contained HTML file (used for previews)
export default defineConfig({plugins:[react(),...(process.env.SINGLE?[viteSingleFile()]:[])]})
