//const Sequalize=require("sequelize")
const Sequalize=require("sequelize")
const conexacao=require("../database/database")
const tarefa=require("../model/Tarefa")

const projecto=conexacao.define('projectos',{
    descricao:{
        type:Sequalize.STRING,
        allowNull:false,
    },
    tipoProjectoId:{
        type:Sequalize.STRING,
        allowNull:false

    },
    data_criacao:{
        type:Sequalize.STRING,
        allowNull:false,
    }

})
projecto.hasMany(tarefa)
projecto.sync({force:false}).then(()=>{

}).catch(()=>{})

module.exports=projecto;