"use strict";
var empresa;
(function (empresa) {
    class Gerente extends empresa.Pessoa {
        getSetor() {
            return this.getSetor();
        }
    }
    empresa.Gerente = Gerente;
})(empresa || (empresa = {}));
