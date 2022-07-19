const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetPriceHistory/v1
    Method: GET
    Parameters: - 
    Description: 
*/
module.exports = async function getPriceHistory(appId = 440, item = 'Pop-Eyes', quality = 'unique', tradable = 'tradable', craftable = 'craftable', priceindex = 0){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetPriceHistory/v1?appid=' + appId + '&item=' + item + '&quality=' + quality + '&tradable=' + tradable + '&craftable=' + craftable + '&priceindex=' + priceindex + '&key=' + api_key)
        //https://backpack.tf/api/IGetPriceHistory/v1?appid=440&item=Pop-Eyes&quality=unique&tradable=Tradable&craftable=Craftable&priceindex=0
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}