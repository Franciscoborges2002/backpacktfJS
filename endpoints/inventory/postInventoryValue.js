const axios = require('axios')

/*
    Uses url https://backpack.tf/api/inventory/{steamid}/values
    Method: GET
    Parameters: - skip Offset at which to return results.
                - limit Result count.
    Description: Get a info about an accounts, more info https://backpack.tf/api/docs/user_info
*/
module.exports = async function getValue(steamId){
    if(steamId === ''){
        throw new Error("No steam id given.");
    }else{
        try{
            let response = await axios.get('https://backpack.tf/api/inventory/' + steamId + '/values');
            return response.data;
        }catch(err) {
            throw new Error(err.response.data);
        }
    }
    
}