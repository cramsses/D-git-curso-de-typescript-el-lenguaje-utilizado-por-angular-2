var Coche = /** @class */ (function () {
    function Coche() {
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    return Coche;
}());
var coche = new Coche();
coche.setColor("AZUL");
console.log("Color del cochecin: " + coche.getColor());
