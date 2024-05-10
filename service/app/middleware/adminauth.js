module.exports = options=>{
    return async function adminauth(ctx,next){
        console.log("in Middleware id is :",ctx.session.openId)
        if(ctx.session.openId){
            await next()
        }else{
            ctx.body={data:'No login'}
        }
    }
}