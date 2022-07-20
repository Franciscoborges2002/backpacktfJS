const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/search/v1
    Method: GET
    Parameters: - intent :  ACCEPTED= sell, buy, dual. DEFAULT= dual.
                - page_size : ACCEPTED= >= 1 and <= 30. DEFAULT = 10
                - fold: DEFAULT = 0
    Description: 
*/
module.exports = async function classifiedSearch(intent = 'dual', page_size = 10, fold = 0, item, steamid){
    let api_key = this.api_key;
    var response;
    try{
        if(steamid === ''){
            response = await axios.get('https://backpack.tf/api/classifieds/search/v1?intent=' + intent + '&page_size=' + page_size + '&fold=' + fold + '&item=' + item + '&key=' + api_key)
        }else{
            response = await axios.get('https://backpack.tf/api/classifieds/search/v1?intent=' + intent + '&page_size=' + page_size + '&fold=' + fold + '&item=' + item + '&steamid=' + steamid + '&key=' + api_key)
        }
        
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}