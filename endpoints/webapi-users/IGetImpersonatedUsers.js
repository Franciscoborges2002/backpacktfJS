const axios = require('axios')

/*
    Uses url https://backpack.tf/api/IGetUsers/GetImpersonatedUsers
    Method: GET
    Parameters: - 
    Description: 
*/
module.exports = async function GetImpersonatedUsers(limit = 5, skip = 0){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/IGetUsers/GetImpersonatedUsers?limit=' + limit + '&skip=' + skip + '&key=' + api_key)
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}