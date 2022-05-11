
module.exports = {
  transpileDependencies: true,
  css: {
      loaderOptions: {
          scss: {
            additionalData: '@import "@/assets/styles/variables.scss";'
          }
      }
  }
}

