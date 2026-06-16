import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const getBase = () => {
  const branch = process.env.VITE_BASE_PATH
  if (branch && branch !== 'main') {
    return `/preview/${branch}/`
  }
  return './'
}

export default defineConfig({
  plugins: [react()],
  base: getBase()
})
