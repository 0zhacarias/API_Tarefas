const express = require('express')
const conexacao = require('./database/database')
const rota=require("./routers/router")
/* const bcrypt=require("bcrypt")
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt); */
/*
Uso desse passo sem uma pasta de rotas a ordem de impportação é importante.
primeiro os riquire e depois os use.
const projectoController = require('./Controller/projectoController')
const tarefaController=require("./Controller/tarefaController") 
 app.use("/",projectoController)
app.use("/",tarefaController)
const Projecto = require("./model/Projecto");
const Tarefa=require("./model/Tarefa")
*/

const app = express();
app.use(express.json());
app.use(rota)
app.use(express.static('public'))
conexacao.authenticate().then(() => {
    console.log("Coneção com a base de dado")
}).catch((err) => {
    console.log("Conexação falhou com a base de dado ",err)
})
    /* const connectWithRetry = (retries = 10) => {
        conexacao.authenticate()
          .then(() => {
            console.log('Conexão com o banco de dados estabelecida com sucesso.');
          })
          .catch(err => {
            if (retries === 0) {
              console.error('Falha ao conectar com o banco de dados:', err);
              process.exit(1);
            }
            console.log('Tentando conectar ao banco de dados, tentativa restante:', retries);
            setTimeout(() => connectWithRetry(retries - 1), 5000); // Espera 5 segundos antes de tentar novamente
          });
      };
      
      connectWithRetry(); */


app.get("/", function (req, res) {
    res.send("Bem vindo")
})
app.get("/tarefas", function (req, res) {
    res.send("Tarefas")

})
app.get("/tipos_projecto/:dados?", function (req, res) {
    let request = req.params.dados
    res.send(req.query["dados"])
})

app.listen(4000, function (error) {
    if (error) {
        console.log("Erro")
    } else {
        console.log('servidor levantado!!')
    }

})