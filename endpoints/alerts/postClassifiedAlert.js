const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/alerts
    Method: POST
    Parameters: - name: Name of the item
                - itent: if you want to buy or sell
                - currency: type of currency
                - min, max:
                - blanket: if you set, it will create the aler
    Description: create alerts. You can check your created alerts here https://backpack.tf/alerts
*/
module.exports = async function postClassfiedsAlerts(name, intent = 'buy', currency, min, max, blanket){
    let token = this.token;
    try{
        let response = await axios.get('https://backpack.tf/api/classifieds/alerts?item_name=' + name + '&intent=' + intent + '&currency=' + currency + '&min=' + min + '&max=' + max + '&blanket=' + blanket);
        return response.data;
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}