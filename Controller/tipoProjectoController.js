const TipoProjecto=require("../model/TipoProjecto")
const express=require("express")
const TipoProjectoController={
    todosTipoProjecto:(req,res)=>{
        TipoProjecto.findAll().then((tipos_projectos)=>{
            res.send(tipos_projectos)
        })
    }

}
module.exports=TipoProjectoController
