const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/listings
    Method: POST
    Parameters: - steamId64 REQUIRED
    Description: Create a listning
*/
module.exports = async function createListing(id){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/classifieds/listings')
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}