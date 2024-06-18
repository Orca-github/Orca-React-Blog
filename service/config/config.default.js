/* eslint valid-jsdoc: "off" */

const { TurnedIn } = require("@mui/icons-material");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1714062202219_8258';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql ={
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'Mmmysql1997',
      // database
      database: 'React_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security={
    crf:{
      enable:false
    },csrf: {
      enable: true,
      ignoreJSON: false,
  },
    domainWhiteList:['*']
  };

  config.cors = {
    // origin:'http://localhost:5174/',
    origin:'*',
    credentials:true,//允许cookie 跨域
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  //日志级别设置
  config.logger = {
    level: 'INFO',
    consoleLevel: 'INFO',
};

  return {
    ...config,
    ...userConfig,
  };
};
