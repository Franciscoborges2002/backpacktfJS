const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetUserTrades/v1
    Method: GET
    Parameters: 
    Description: Get the listenings of the user
*/
module.exports = async function getCurrencies(){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetUserTrades/v1?key=' + api_key)
        return response.data;
    }catch(err) {
        throw Error(err);
    }
}