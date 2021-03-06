import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default ({mode}) => {

    process.env = {...process.env, ...loadEnv(mode, process.cwd())}

    return defineConfig({
        plugins: [vue()],
        server: {
            port: 8080
        },
        base: '/wysiwyg/'
    })
}