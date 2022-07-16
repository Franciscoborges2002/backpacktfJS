const axios = require('axios')

/*
    Uses url https://backpack.tf/api/users/info/v1
    Method: GET
    Parameters: - steamId64 REQUIRED
    Description: Get a info about an accounts, more info https://backpack.tf/api/docs/user_info
*/
module.exports = async function getUserInfo(steamId64){
    let api_key = this.api_key;
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