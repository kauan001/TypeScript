namespace empresa{
   export class Funcionario extends Pessoa{
       private valorDia: number;
       private codFuncionario: number;


    //    constructor(nome:string, cpf:string, cod:number){
    //     super(nome,cpf);
    //     this.codFuncionario = cod;
    //    }
       getCodFuncionario():number{
           return this.codFuncionario;
       }

       setCodFuncionario(cod:number):void{
           this.codFuncionario = cod;
       }
         getValorDia():number{
           return this.valorDia;
       }

       setValorDia(valor:number):void{
           this.valorDia = valor;
       }
       calcularSalario(): number{
           return this.valorDia * 30;
       }
   }
}