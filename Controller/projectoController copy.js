const express=require("express")
const router=express.Router();
const Projecto=require("../model/Projecto")

router.get('/projectos', function (req, res) {
    Projecto.findAll().then((projecto) => {

        res.send(projecto);
    })
})
router.post('/projectos', (req, res) => {

    Projecto.create({
        descricao: req.body.descricao,
        tipo_projectoId: req.body.tipo_projectoId,
        data_criacao: req.body.data_criacao
    }).then(() => {
        res.sendStatus(200)
    })

})
router.put('/projectos/:id', (req, res) => {
    if (isNaN(req.params.id)) {

        res.sendStatus(400)
    } else {
        id=req.params.id
        let descricao = req.body.descricao
        Projecto.update({
            descricao: descricao
        }, {
            where: {
                id: id
            }
        })
        res.sendStatus(200)
    }
})

router.delete('/projectos/:id', (req, res) => {
    let id = req.params.id
    console.log(req.params.id)
    if (isNaN(req.params.id)) {
        res.sendStatus(400)

    } else {
        if (id == -1) {
            res.sendStatus(404)
        } else {
            Projecto.destroy({
                where: {
                    id: id
                }
            })
            res.sendStatus(200)
        }


    }

})

module.exports=router