/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  /**
 * 引入
 */
require('./router/default')(app)
};
