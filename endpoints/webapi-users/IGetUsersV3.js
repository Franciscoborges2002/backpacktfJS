const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetUsers/v3
    Method: GET
    Parameters: - 
    Description: The default value goes to my steam
*/
module.exports = async function getUser(steamId = '76561198243929698'){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetUsers/v3?steamid=' + steamId + '&key=' + api_key)
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}