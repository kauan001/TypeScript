"use strict";
var empresa;
(function (empresa) {
    class Funcionario extends empresa.Pessoa {
        //    constructor(nome:string, cpf:string, cod:number){
        //     super(nome,cpf);
        //     this.codFuncionario = cod;
        //    }
        getCodFuncionario() {
            return this.codFuncionario;
        }
        setCodFuncionario(cod) {
            this.codFuncionario = cod;
        }
        getValorDia() {
            return this.valorDia;
        }
        setValorDia(valor) {
            this.valorDia = valor;
        }
        calcularSalario() {
            return this.valorDia * 30;
        }
    }
    empresa.Funcionario = Funcionario;
})(empresa || (empresa = {}));
