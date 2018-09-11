/**
 * @author lee
 *
 * @desc abtest egg插件
 * */

const abtest = require('./lib/abtest');

module.exports = app => {
    app.addSingleton('abtest', abtest);
}