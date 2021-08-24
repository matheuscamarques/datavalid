const Biovalid = require('../biovalid.js')
const PFkey = require('./pf-key.js')
const PFAnswer = require('./pf-answer.js')

class PFFaceInput{
    /**
     * @param {Biovalid} father 
     */
    constructor(father){
       this._father = father
    }
 
    /**
     * 
     * @param {PFkey} key 
     * @param {PFAnswer} answer 
     * @returns {Biovalid}
     */
    Init(key,answer){
       this.key = key;
       this.answer = answer;
       return this._father
    }
 
    Validate(){
       return this.key.Validate() && this.key.Validate()
    }
 
    Object(){
       let json = ({
          key: this.key,
          answer: this.answer
       })
       return json 
    }
 
 }


 module.exports = PFFaceInput