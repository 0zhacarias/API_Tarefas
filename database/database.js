const Sequalize=require('sequelize')
const conex=new Sequalize('express_api','root','root',{
    host:'db',
    port:'3306',
    dialect:'mysql'
})

module.exports=conex