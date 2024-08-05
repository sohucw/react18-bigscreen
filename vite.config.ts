import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe} from 'vite-plugin-mock'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      }
    ],
    dedupe: ['vue']
  },
  plugins: [
    viteMockServe({
      mockPath: './src/api/mock',
      // 生产打包开关
      enable: true,
      // 监视文件更改
      watchFiles: true
    }),
    react(),
  ]
})
