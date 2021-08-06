const CracoLessPlugin = require('craco-less');
const { when, whenDev, whenProd, whenCI, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
const path = require('path')
const pathResolve = pathUrl => path.join(__dirname, pathUrl)

module.exports = {
  reactScriptsVersion: "react-scripts",
  webpack: {
   // 别名
     alias: {
         '@': pathResolve('src'),
         '@components': pathResolve('src/components'),
         '@pages': pathResolve('src/pages'),
         '@styles': pathResolve('src/styles'),
         '@assets': pathResolve('src/assets'),
         '@utils': pathResolve('src/utils')
     },
     configure: (webpackConfig, { env, paths }) => {
          webpackConfig.output.path = path.resolve(__dirname, "dist");//ts和less编译后的文件
          paths.appBuild = path.resolve(__dirname, "dist");//public中的文件
          return webpackConfig;
      }

  },
  plugins: [
   {
     plugin: CracoLessPlugin,
     options: {
       lessLoaderOptions: {
         lessOptions: {
           modifyVars: { '@primary-color': '#1DA57A' },//设置主题颜色，相关主题配置可参照antd官方配置文档
           javascriptEnabled: true,
         },
       },
     },
   },
  ],
  babel:{  
   plugins: [
     ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
     [   
       "import", 
       {
         "libraryName": "antd",
         "libraryDirectory": "es",
         "style": true //设置为true即是less
        }
    ]
   ]
  },
//  配置代理解决跨域
 devServer: {
   proxy: {
       "/api": {
           target: "http://baidu.com",  
           //target: 'http://192.168.9.18:8000',
           changeOrigin: true,
           pathRewrite: {
               "^/api": ""
           }
       }
   }
 },
 
};
