const axios = require('axios');

const header= {
    "accept": "application/json",
}


/*
    Uses url https://backpack.tf/api/users/info
    Method: GET
    Parameters: - steamId64 REQUIRED
    Description: To know if backpack.tf is online and operatable
*/
async function index(){
    //let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/', header)
        console.log(response)
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}

/*
    Uses url https://backpack.tf/api/users/info
    Method: GET
    Parameters: - steamId64 REQUIRED
    Description: Get a info about an accounts, more info https://backpack.tf/api/docs/user_info
*/
async function getUserInfo(steamId64){
    //let api_key = this.api_key;
    

    if(steamId64 === ''){
        new Error("SteamID 64 not given.")
    }else{
        try{
            let response = await axios.get('https://backpack.tf/api/users/info/v1?steamids=' + steamId64 + '&key=' + api_key)
            console.log(response.data)
        }catch(err) {
            console.log(err.response.data)
            new Error(err.response.data);
        }
    }
    
}

/*
    Uses url https://backpack.tf/api/users/info
    Method: GET
    Parameters: - raw, 1 = adds a value_raw which represents the value of the item in the lowest currency without rounding.
                        If a high value is set, the raw value will be an average between the low and high value. 
                        Setting raw to *2* prevents this behaviour by adding a new field, value_raw_high.
    Description: Get a info about currencies in tf2
*/
async function getCurrencies(raw = 0){
    //let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetCurrencies/v1?raw' + raw + '&key=' + api_key)
        console.log(response.data)
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}

async function getPriceHistory(priceIndex){
    //let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetCurrencies/v1?raw' + priceIndex + '&key=' + api_key)
        console.log(response.data)
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}

getCurrencies(0)

class API {
    constructor (api_key) {
        this.api_key = api_key;
    }
}