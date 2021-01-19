const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" // 打包环境
      ? "./"
      : "/",
  //   ? '/production-sub-path/'

  // 相对路径
  // baseUrl: "./",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false, //关闭eslint
  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  // compiler: false,
  // webpack配置
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: () => {},
  configureWebpack: config => {
    const productionGzipExtensions = ["html", "js", "css"];
    config.plugins.push(
      new CompressionWebpackPlugin({
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240, // 只有大小大于该值的资源会被处理 10240
        minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
        deleteOriginalAssets: false // 删除原文件
      })
    );
    // 公共代码抽离
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          vendor: {
            chunks: "all",
            test: /node_modules/,
            name: "vendor",
            minChunks: 1,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 100
          },
          common: {
            chunks: "all",
            test: /[\\/]src[\\/]js[\\/]/,
            name: "common",
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 60
          },
          styles: {
            name: "styles",
            test: /\.(sa|sc|c)ss$/,
            chunks: "all",
            enforce: true
          },
          runtimeChunk: {
            name: "manifest"
          }
        }
      }
    };
    [
      // 配置 jQuery 插件的参数
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ];
  },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  // vueLoader: {},
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false, //代码可读性
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {}
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require("os").cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  // dll: false,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: process.platform === "darwin",
    host: "127.0.0.1",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null // 设置代理
    // before: app => {}
  },
  // 第三方插件配置
  pluginOptions: {
    // ...z
  }
};
