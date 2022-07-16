const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetPriceHistory/v1
    Method: GET
    Parameters: - 
    Description: 
*/
module.exports = async function getPriceHistory(priceIndex){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetCurrencies/v1?raw' + priceIndex + '&key=' + api_key)
        console.log(response.data)
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}