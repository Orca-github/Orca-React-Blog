//let ipUrl = 'http://127.0.0.1:7001'
//已经在 vite.config.js设置了代理，所以不用全称
let ipUrl = '/api/default'
let servicePath={
    getArticleList:ipUrl+'/getArticleList',
    getArticleById:ipUrl+'/getArticleById/',
    getTypeInfo:ipUrl+'/getTypeInfo',
    getListById:ipUrl+'/getListById/',
    getListByDetail:ipUrl+'/getListByDetail/'
}

export default servicePath