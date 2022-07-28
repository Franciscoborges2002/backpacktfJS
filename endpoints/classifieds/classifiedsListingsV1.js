const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/listings/v1
    Method: GET
    Parameters: - intent :  ACCEPTED= sell, buy, dual. DEFAULT= dual.
                - page_size : ACCEPTED= >= 1 and <= 30. DEFAULT = 10
                - fold: DEFAULT = 0
    Description: 
*/
module.exports = async function classifiedSearch(intent, inactive = 0){
    let token = this.token;
    var response;
    try{
        if(intent !== 0 || intent !== 1){
            response = await axios.get('https://backpack.tf/api/classifieds/listings/v1?inactive=' + inactive + '&token=' + token)
        }else{
            response = await axios.get('https://backpack.tf/api/classifieds/listings/v1?intent=' + intent + '&inactive=' + inactive + '&token=' + token)
        }
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}