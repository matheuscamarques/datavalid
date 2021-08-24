class PFAnswer{
    /**
     * @param {Biovalid} father 
     * @param {documento} PFDocumentAnswer
     */
    constructor(nome,documento,biometria){
       this.nome=nome;
       this.documento=documento;
       this.biometria_face=biometria;
    }
 
    Validate(){
       return this.documento.Validate();
    }
 }

 module.exports=PFAnswer;