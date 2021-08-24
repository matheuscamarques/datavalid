
const PFFaceInput = require('./types/pf-face-input');
const PFkey = require('./types/pf-key');
const PFDocumentAnswer = require('./types/pf-document-answer');
const PFAnswer = require('./types/pf-answer');
const axios = require('axios');
const request = require('request');
const {OptionsToken, OptionsRequestJSON} = require('./options');
const { ENDPOINT } = require('./constants');



class Biovalid {

   constructor() {
      this._PFFaceInput = new PFFaceInput(this)
      this._Http = require('request')

      this._Endpoint = ENDPOINT
      this._BearerToken = "Bearer"
   }

   /**
    * @return PFFaceInput
    */
   PFFaceInput() { return this._PFFaceInput }
   /**
    * @param {string} cpf 
    * @returns {PFkey}
    */
   PFkey(cpf) { return new PFkey(cpf) }
   /** 
    *  @param {string} uf_expedidor 
    *  @param {string} orgao_expedidor 
    *  @param {number} tipo 
    *  @param {string} numero
    *  @return {PFDocumentAnswer} 
    */
   PFDocumentAnswer(tipo, numero, orgao_expedidor, uf_expedidor) { return new PFDocumentAnswer(tipo, numero, orgao_expedidor, uf_expedidor) }
   /** 
    *  @param {string} nome 
    *  @param {PFDocumentAnswer} documento
    *  @param {string} biometria
    *  @return {PFAnswer}
    */
   PFAnswer(nome, documento, biometria) { return new PFAnswer(nome, documento, biometria) }


   /**
   *  @return {Biovalid} 
   */
   Auth(consumerKey, consumerSecret) {
      let authorization = Buffer
                              .from(consumerKey + ':' + consumerSecret)
                              .toString('base64');
      // NodeJs - Request
      let http = this.Http;
      this.promiseToken = new Promise( 
         function (resolve, reject) {
            http(OptionsToken(authorization), function (error, response) {
               if (!error && response.statusCode == 200) {
                  resolve(JSON.parse(response.body));
               } else {
                  reject(error);
               }
            });
         })
    

      return this

   }

   async Send() {
      this._BearerToken = "Bearer " + (await this.promiseToken).access_token;

      if (this.PFFaceInput().Validate()) {
         return {}
      }

      let options = OptionsRequestJSON(this._Endpoint, this._BearerToken, this.PFFaceInput().Object())
      let http = this.Http;
      return new Promise(
         function (resolve, reject) {
           // console.log(options)
            http(options, function (error, res, body) {
               console.log(error, res, body)
               if (!error && res.statusCode == 200) {
                  resolve(body);
               } else {
                  reject(error);
               }
            });
      });
   }

   get Http() {
      return this._Http
   }

}

module.exports = Biovalid