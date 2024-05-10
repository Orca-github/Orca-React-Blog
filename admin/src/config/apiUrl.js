//let ipUrl = 'http://127.0.0.1:7001'
//已经在 vite.config.js设置了代理，所以不用全称

let ipUrl = '/api/admin'
let servicePath={
    checkLogin:ipUrl+'/checkLogin/', //检查用户名和密码
    getTypeInfo:ipUrl+'/getTypeInfo',//获得文章类别信息
    addArticle:ipUrl+'/addArticle',//增加文章
    updateArticle:ipUrl+'/updateArticle',//修改文章内容
    getArticleList:ipUrl+'/getArticleList',//显示文章列表
    delArticle:ipUrl+'/delArticle/',//删除文章
    getArticleById:ipUrl+'/getArticleById/',//根据ID显示文章内容
}

export default servicePath