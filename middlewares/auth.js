/* function auth(req,res,next){
    if (req.params.id!= undefined) {
       // res.send(req.params)
        next()
    } else {
        res.send("Falhou")
    }
    
} */

const auth={
        autenticar:(req,res,next)=>{
            if (req.params.id!= undefined) {
               // res.send(req.params)
                next()
            } else {
                res.send("Falhou")
            }
            
        }
}
module.exports=auth;