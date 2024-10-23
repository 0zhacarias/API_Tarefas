
const  TipoProjecto  = require("../model/TipoProjecto");
const Projecto=require("../model/Projecto");
const tarefas=require("../model/Tarefa")
/* const parser=require("body-parser") */
const ProjectoCont={
todosProjectos: (req, res)=> {
    Projecto.findAll(
       { include:[{model:tarefas},{model:TipoProjecto}]}
    ).then((projecto) => {
        
        res.send(projecto);
    })
},
criarProjectos:(req, res)=>{
Projecto.create({
    descricao:req.body.descricao,
    tipoProjectoId:req.body.tipoProjectoId,
    data_criacao:req.body.data_criacao
}).then(()=>{
    res.sendStatus(200)
})
},
editarProjectos:(function(req,res){
    if (isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        id=req.params.id
        let descricao=req.body.descricao
        Projecto.update({
            descricao:descricao
        },{
            where:{id:id}
        })
        res.sendStatus(200)
    }
}),
apagarProjectos:(function(req,res){
if (isNaN(req.params.id)) {
    res.sendStatus(400)
    
} else {
    let id=req.params.id
    if (id<1) {
        res.sendStatus(404)
        
    } else {
        Projecto.destroy({
            where:{
                id:id
            }
        })
    }
    res.send("Dados Eliminado com sucesso")
    //res.sendStatus(200)
   
}
}),
projectosTarefas:((req,res)=>{
    if (isNaN(req.params.id)) {
        res.send("ii não existe")
    } else {
        let id=req.params.id
        Projecto.findOne({
            where:{
                id:id
            },
            include:[{model:tarefas}]

        }).then((projecto)=>{
            res.send(projecto.tarefas)
        })
    }
})


};
module.exports=ProjectoCont;