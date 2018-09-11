'use strict';

/**
 * egg-qabtest default config
 * @member Config#qabtest
 * @property {String} SOME_KEY - some description
 */
exports.qabtest = {
    requestTimeout: 5000, // 请求超时时间
    envCacheTime: 1000 * 60, // 环境信息缓存时常
    defaultOnerror: () => {}, // 出现错误时默认处理器
    vipMod = -1, // 白名单命中返回mod
    envList = ['dev', 'beta', 'prod'],
    // Symbol符号
    exp = Symbol('exp'),
    expTime = Symbol('expTime'),
    requestExp = Symbol('requestExp'),
    isEnd = Symbol('isEnd'),
    getExp = Symbol('getExp'),
    defaultAlter = {
        mod: -2, // 数据异常返回mod
        version: 'A',
        domain: '',
        layer: '',
        ruleVersion: ''
    }
};
