const express = require("express")
const Tarefa = require("../model/Tarefa")
const { where } = require("sequelize")
const rota = express.Router()
const tarefas = {
    todasTarefa: (req, res) => {
        Tarefa.findAll().then((tarefas) => {
            res.send(tarefas)
        })
    },
    crearTarefa: function (req, res) {
        //console.log(req.body)
        Tarefa.create({
            descricao: req.body.descricao,
            percentagemTarefa: req.body.percentagem_tarefa,
            projectoId: req.body.projectoId
        }).then(() => {

            res.sendStatus(200)
        })
    },
    editaTarefa: function (req, res, next) {

        if (isNaN(req.params.id)) {
            res.sendStatus(400)

        } else {
            if (req.body.descricao != undefined) {
                let id = req.params.id
                // res.send(req.body.descricao)
                Tarefa.update({
                    descricao: req.body.descricao,
                    percentagemTarefa: req.body.percentagemTarefa,
                    projectoId: req.body.projectoId,
                }, {
                    where: {
                        id: id
                    }
                })
                res.sendStatus(200)
            } else {
                res.sendStatus(404)
            }


        }

    },
    apagarTarefa: (req, res) => {
        if (isNaN(req.params.id)) {
            res.sendStatus(400)
        } else {
            id = req.params.id
            Tarefa.destroy({
                where: {
                    id: id
                }
            })
            res.sendStatus(200)
        }
    }
}

module.exports = tarefas