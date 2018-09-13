module.exports = {
  baseUrl: '/private',
  outputDir: 'dist',
  assetsDir: 'assets',
  runtimeCompiler: false,
  productionSourceMap: true,
  parallel: true,
  css: {
    modules: false,
    extract: true,
    sourceMap: false,
  },
  lintOnSave: true,
};
