const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  transpileDependencies: true
})

// publicPath를 설정해야 빌드 후에 dist의 index.html에 기본 디렉토리 경로가 정확히 지정된다.
// https://cli.vuejs.org/config/#publicpath