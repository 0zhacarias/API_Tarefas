const Sequelize=require("sequelize")
const conexacao=require("../database/database")
const tarefa=conexacao.define('tarefas',{
    descricao:{
       type:Sequelize.STRING,
       allowNull:false
    },
    percentagemTarefa:{
        type:Sequelize.DOUBLE,
        alloeNull:false
    },
    projectoId:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
tarefa.sync({force:false}).then(()=>{}).catch(()=>{})
module.exports=tarefa