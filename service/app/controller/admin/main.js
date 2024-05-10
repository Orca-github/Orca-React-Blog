'use strict'

const Contoller = require('egg').Controller

class MainController extends Contoller {
    async index() {
        this.ctx.body = "hi api"
    }
    //验证登录
    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password = '" + password + "' "
        const res = await this.app.mysql.query(sql)
        if (res.length > 0) {
            let openId = new Date().getTime()
            this.ctx.session.openId = { 'openId': openId }
            this.ctx.body = { 'data': 'Login successful', 'openId': openId }

        } else {
            this.ctx.body = { 'data': 'Login fail' }

        }
    }
    //获得类型的信息
    async getTypeInfo() {
        const resType = await this.app.mysql.select('type')
        this.ctx.body = { data: resType }
    }
    //添加文章
    async addArticle() {
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.insert('article', tmpArticle)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId//插入失败 为null 或 undefined

        this.ctx.body = {
            isSuccess: insertSuccess,
            insertId: insertId
        }
    }
    //更新文章
    async updateArticle() {
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.update('article', tmpArticle)
        const updateSuccess = result.affectedRows === 1
        this.ctx.body = {
            isSuccess: updateSuccess,
        }
    }
    //获取文章列表
    async getArticleList() {

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime," +
            'article.view_count as view_count,' +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type ON article.type_id = type.id ' +
            'ORDER BY article.id DESC'
        console.log('sdfsdfsdf')
        const resList = await this.app.mysql.query(sql)
        this.ctx.body = { data: resList }
    }

    //删除文章
    async delArticle(){
        let id = this.ctx.params.id
        const res = await this.app.mysql.delete('article',{'id':id})
        this.ctx.body = { data: res }


    }

      //获得文章详细内容
  async getArticleById(){
    let id =this.ctx.params.id

    let sql = 'SELECT article.id as id,'+
                'article.title as title,'+
                'article.introduce as introduce,'+
                'article.article_content as content,'+
                "FROM_UNIXTIME(article.addTime,'%Y-%m-%d') as addTime,"+
                'article.view_count as view_count,'+
                'type.typeName as typeName, '+
                'type.id as typeId '+
                'FROM article LEFT JOIN type ON article.type_id = type.id '+
                'WHERE article.id = ' +id

    const result = await this.app.mysql.query(sql)
    this.ctx.body ={data:result} 
  }

    // async checkLogin(){
    //     this.ctx.body = "hihihihihi"
    // }
}

module.exports = MainController