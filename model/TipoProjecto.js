const Sequelize=require("sequelize")
const conexacao=require("../database/database")
const projecto = require("./Projecto")
const TipoProjecto=conexacao.define('tipo_projectos',{
    descrica:{
        type:Sequelize.STRING,
    allowNull:false},
    criado_por:{
        type:Sequelize.INTEGER
    },
    feito_por:{
        type:Sequelize.INTEGER,

    }

},

)
projecto.belongsTo(TipoProjecto)
TipoProjecto.sync({force:false})
module.exports=TipoProjecto