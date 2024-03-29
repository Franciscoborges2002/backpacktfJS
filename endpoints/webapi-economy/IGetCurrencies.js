const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetCurrencies/v1
    Method: GET
    Parameters: - raw, 1 = adds a value_raw which represents the value of the item in the lowest currency without rounding.
                        If a high value is set, the raw value will be an average between the low and high value. 
                        Setting raw to *2* prevents this behaviour by adding a new field, value_raw_high.
    Description: Get a info about currencies in tf2
*/
module.exports = async function getCurrencies(raw = 0){
    let api_key = this.api_key;
    try{
        if(raw > 2){
            throw Error("raw cannot be > 2");
        }

        let response = await axios.get('https://backpack.tf/api/IGetCurrencies/v1?raw=' + raw + '&key=' + api_key)
        return response.data;
    }catch(err) {
        throw Error(err);
    }
}