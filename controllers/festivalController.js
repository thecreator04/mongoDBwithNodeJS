var festivalModel = require('../models/festivaisModel');
var moment = require('moment');
var app = require('../app')
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};
exports.create = function (req, res) {

    console.log(req.body)
    var nome = req.body.nome;
    var valor = req.body.valor;
    var date =  req.body.date
     valor = +valor;//foi de string para number

    let festival = new festivalModel(
     {
     nome: nome,
     valor_ingresso:valor,
     date:date
     }
     );
    festival.save(function (err) {
    if (err) {
    return next(err);
     }
     res.render('../View/cadastro/cadastrado.ejs')
     })
    };
exports.cadastro = function (req, res) {
    res.render('../View/cadastro/index.ejs');
};

exports.delete = function (req, res){

    festivalModel.remove({ _id: req.params.nome }, function(err) {
        if (!err) {
              

                res.render('../View/delete/delete.ejs')
        }
        else {
                
        }
    });


    
    //festivalModel.collection('festivais').deleteOne({"_id": ObjectId(req.params.nome)});
}

exports.index = function (req, res){
    festivalModel.find(function(err, doc) {
        // Check for error
        if(err) {
            throw err;
        
        }
        res.render('../View/Home/index.ejs', {festivais: doc, moment:moment})
      
    })


 
   // res.render('../View/Home/index.ejs')
}