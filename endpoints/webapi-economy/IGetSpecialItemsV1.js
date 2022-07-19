const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetSpecialItems/v1
    Method: GET
    Parameters: - appid: appid of the game, default 440 = tf2
    Description: Get a info about currencies in tf2
*/
module.exports = async function getSpecialItems(appid = 440){
    let api_key = this.api_key;
    var response;
    try{
        response = await axios.get('https://backpack.tf/api/IGetSpecialItems/v1?appid=' + appid +  '&key=' + api_key)
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}