"use strict";
var empresa;
(function (empresa) {
    class Funcionario extends empresa.Pessoa {
        constructor(nome, cpf, cod) {
            super(nome, cpf);
            this.codFuncionario = cod;
        }
        getCodFuncionario() {
            return this.codFuncionario;
        }
        setFuncionario(codFuncionario) {
            this.codFuncionario = codFuncionario;
        }
        getValorDia() {
            return this.valorDia;
        }
        setValorDia(valorDia) {
            this.valorDia = valorDia;
        }
    }
    empresa.Funcionario = Funcionario;
})(empresa || (empresa = {}));
