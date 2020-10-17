var Bicicleta = function(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function() {
    return 'id: ' + this.id + " | color: " + this.color;
}

Bicicleta.allBicis = [];

//agregar elementos
Bicicleta.add = function(aBici) {
    Bicicleta.allBicis.push(aBici);
}

//buscar elementos
Bicicleta.findById = function(aBiciId) {
    var aBici = Bicicleta.allBicis.find(x => x.id == aBiciId); // si lo encuentra lo va a poner en la bicicleta
    if (aBici)
        return aBici
    else
        throw new Error(`No existe una bicicleta con el id $(aBiciId)`);
}


//eliminar elementos
Bicicleta.removeById = function(aBiciId) {
    Bicicleta.findById(aBiciId); //hace la busqueda si no existe dispara una excepcion para terminar la ejecucion de la funcion
    for (var i = 0; i < Bicicleta.allBicis.length; i++) {
        if (Bicicleta.allBicis[i].id == aBiciId) {
            Bicicleta.allBicis.splice(i, 1)
            break;
        }
    }
}


var a = new Bicicleta(1, 'rojo', 'urbana', [-34.6012424, -58.3861497]);
var b = new Bicicleta(2, 'blanco', 'urbana', [-34.596932, -58.3808287]);


Bicicleta.add(a);
Bicicleta.add(b);


module.exports = Bicicleta;