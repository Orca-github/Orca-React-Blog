const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    this.ctx.body = "api hi............"
  }
//获得文章列表
  async getArticleList(){

    let sql = 'SELECT article.id as id,'+
                'article.title as title,'+
                'article.introduce as introduce,'+
                "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
                'article.view_count as view_count,'+
                'type.typeName as typeName '+
                'FROM article LEFT JOIN type ON article.type_id = type.id ;'

    const results = await this.app.mysql.query(sql)
    this.ctx.body ={data:results} 
  }
  //获得文章详细内容
  async getArticleById(){
    let id =this.ctx.params.id

    let sql = 'SELECT article.id as id,'+
                'article.title as title,'+
                'article.introduce as introduce,'+
                'article.article_content as content,'+
                "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
                'article.view_count as view_count,'+
                'type.typeName as typeName, '+
                'type.id as typeId '+
                'FROM article LEFT JOIN type ON article.type_id = type.id '+
                'WHERE article.id = ' +id

    const result = await this.app.mysql.query(sql)
    this.ctx.body ={data:result} 
  }
  //获得类别名称和编号
  async getTypeInfo(){
    // let sql = 'SELECT * FROM `type`'
    const result = await this.app.mysql.select('type')
    // const result = await this.app.mysql.query(sql)
    this.ctx.body ={data:result} 
  }
  //根据类别id获得文章列表
  async getListById(){
    let id =this.ctx.params.id
    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime,"+
    'article.view_count as view_count,'+
    'type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.id '+
    'WHERE type_id = ' +id
    const result = await this.app.mysql.query(sql)
    this.ctx.body ={data:result} 
  }

}

module.exports = HomeController;
