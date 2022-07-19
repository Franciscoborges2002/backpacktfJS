const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetPrices/v4
    Method: GET
    Parameters: - raw, 1 = adds a value_raw which represents the value of the item in the lowest currency without rounding.
                        If a high value is set, the raw value will be an average between the low and high value. 
                        Setting raw to *2* prevents this behaviour by adding a new field, value_raw_high.
    
                - since If set, only returns prices that have a last_update value greater than or equal to this UNIX time
    Description: Get a info about currencies in tf2
*/
module.exports = async function getPricesV4(raw = 0, since = 0){
    let api_key = this.api_key;
    var response;
    try{
        if(since = 0){
            response = await axios.get('https://backpack.tf/api/IGetPrices/v4?raw=' + raw +  '&key=' + api_key)
        }else{
            response = await axios.get('https://backpack.tf/api/IGetPrices/v4?raw=' + raw + '$since=' + since + '&key=' + api_key)
        }
        
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}