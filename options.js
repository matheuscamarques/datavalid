const { ENDPOINT_TOKEN } = require('./constants');


function OptionsToken(authorization) {
    return {
       'method': 'POST',
       'url': ENDPOINT_TOKEN,
       'headers': {
          'Authorization': 'Basic ' + authorization,
          'Content-Type': 'application/x-www-form-urlencoded'
       },
       form: {
          'grant_type': 'client_credentials'
       }
    }
 }
 
 function OptionsRequestJSON(url, authorization, json) {
    return {
       'method': 'POST',
       'url': url,
       'headers': {
          'Authorization': authorization,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
       },
       json: true,
       body: json
    }
 }


 module.exports = {
    OptionsToken,
    OptionsRequestJSON,
 }