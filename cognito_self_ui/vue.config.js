module.exports = {
  baseUrl: '/public',
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
    pages: {
        signin: {
          entry: 'src/main.js',
          template: 'public/pages/index.html',
          filename: 'pages/signin.html',
          title: 'Sign in',
        },
        signup: {
          entry: 'src/main.js',
          template: 'public/pages/index.html',
          filename: 'pages/signup.html',
          title: 'Sign up',
        },
        signout: {
          entry: 'src/main.js',
          template: 'public/pages/index.html',
          filename: 'pages/signout.html',
          title: 'Sign out',
        },
        sorry: {
          entry: 'src/main.js',
          template: 'public/pages/index.html',
          filename: 'pages/sorry.html',
          title: 'Sorry',
        },
    },
};
