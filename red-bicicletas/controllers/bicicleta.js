const { render } = require('pug');
var Bicicleta = require('../models/bicicleta');

exports.bicicleta_list = function(req, res) {
    res.render('bicicletas/index', { bicis: Bicicleta.allBicis });
}


//acceder a la pagina
exports.bicicleta_create_get = function(req, res) {
    res.render('bicicletas/create');
}

//esta es la creacion en si
exports.bicicleta_create_post = function(req, res) {
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng]
    Bicicleta.add(bici);
    res.redirect('/bicicletas');
}

//este es el borrado de bicis
exports.bicicleta_delete_post = function(req, res) {
    Bicicleta.removeById(req.body.id);
    res.redirect('/bicicletas');
}

//este es el update
exports.bicicleta_update_get = function(req, res) {
    var bici = Bicicleta.findById(req.params.id);
    res.render('bicicletas/update', { bici });
}

//esta es el update
exports.bicicleta_update_post = function(req, res) {
    var bici = Bicicleta.findById(req.params.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];

    res.redirect('/bicicletas');
}

//este es el view
exports.bicicleta_view_get = function(req, res) {
    var bici = Bicicleta.findById(req.params.id);

    res.render('bicicletas/views', { bici });
}