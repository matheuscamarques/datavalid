const CPF = require('./cpf');

class PFkey{
    constructor(cpf){this.cpf = cpf}
    Validate(){
       return (new CPF(this.cpf)).Validate()
    }
 }

 module.exports = PFkey