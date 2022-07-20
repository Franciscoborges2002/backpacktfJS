const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetPriceHistory/v1
    Method: GET
    Parameters: - 
    Description: 

    link for the default item: https://backpack.tf/classifieds?item=Pop-Eyes&quality=6&tradable=1&craftable=1&australium=-1&killstreak_tier=0
*/
module.exports = async function getPriceHistory(appId = 440, item = 'Pop-Eyes', quality = 'unique', tradable = 'tradable', craftable = 'craftable', priceindex = 0){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetPriceHistory/v1?appid=' + appId + '&item=' + item + '&quality=' + quality + '&tradable=' + tradable + '&craftable=' + craftable + '&priceindex=' + priceindex + '&key=' + api_key)
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}