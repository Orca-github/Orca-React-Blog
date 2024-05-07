'use strict'

const Contoller =  require('egg').Controller

class MainController extends Contoller{
    async index(){
        this.ctx.body = "hi api"
    }

    async checkLogin(){
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        const sql = "SELECT userName FROM admin_user WHERE userName = '"+userName+"' AND password = '"+password+"' "
        const res = await this.app.mysql.query(sql)
        if(res.length>0){
            let openId = new Date().getTime()
            this.ctx.session.openId={'openId':openId}
            this.ctx.body = {'data':'Login successful','openId':openId}

        }else{
            this.ctx.body = {'data':'Login fail'}

        }
    }

    async getTypeInfo(){
        const resType = await this.app.mysql.select('type')
        this.ctx.body={data:resType}
    }
    async addArticle(){
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.insert('article',tmpArticle)
        const insertSuccess = result.affectedRows ===1
        const insertId = result.insertId//插入失败 为null 或 undefined

        this.ctx.body = {
            isSuccess:insertSuccess,
            insertId:insertId
        }
    }
    async updateArticle(){
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.update('article',tmpArticle)
        const updateSuccess = result.affectedRows ===1
        this.ctx.body = {
            isSuccess:updateSuccess,
        }
    }

    // async checkLogin(){
    //     this.ctx.body = "hihihihihi"
    // }
}

module.exports = MainController