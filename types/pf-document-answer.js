class PFDocumentAnswer{
    constructor(tipo,numero,orgao_expedidor,uf_expedidor){
       this.tipo = tipo;
       this.numero = numero;
       this.orgao_expedidor = orgao_expedidor;
       this.uf_expedidor = uf_expedidor;
    }
    Validate(){
        if(!DOCUMENTOS_TIPOS.includes(this.tipo)) return false
        if(!BRASIL_UFS.includes(this.uf_expedidor)) return false
        if(this.tipo == CARTEIRA_IDENTIDADE){
            return true
        }return false
 
    }
 }
 
 module.exports = PFDocumentAnswer;