const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/alerts/
    Method: DELETE
    Parameters: - itemName
                - intent: buy : only for buy
                          sell : only for sell
                          nothing : assume as '--' for both buy and sell
    Description: Delete alert by item name instaed of id
*/
module.exports = async function getClassfiedsAlerts(itemName, intent){
    intent = intent.toLowerCase();
    if(intent != 'buy' || 'sell' || ''){
        new Error("Intent needs to be one of the folowing: 'buy', 'sell' or ''");
    }
    try{
        var response;
        if(intent === ''){
            response = await axios.delete('https://backpack.tf/api/classifieds/alerts?item_name=' + itemName);
        }else{
            response = await axios.delete('https://backpack.tf/api/classifieds/alerts?item_name=' + itemName + '&intent=' + intent);
        }
        
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}