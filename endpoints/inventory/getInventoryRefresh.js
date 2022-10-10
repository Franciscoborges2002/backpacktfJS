const axios = require('axios')

/*
    Uses url https://backpack.tf/api/inventory/{steamid}/refresh
    Method: GET
    Parameters: - steamId: steamId og the account
    Description: Get a info about an accounts, more info https://backpack.tf/api/docs/user_info
*/
module.exports = async function getStatus(steamId){
    if(steamId === ''){
        throw new Error("No steam id given.");
    }else{
        try{
            let response = await axios.post('https://backpack.tf/api/inventory/' + steamId + '/refresh');
            return response.data;
        }catch(err) {
            throw new Error(err.response.data);
        }
    }
    
}