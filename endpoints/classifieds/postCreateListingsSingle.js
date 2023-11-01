const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/listings
    Method: POST
    Parameters: 
    Description: https://backpack.tf/api/docs/create_listings see on how to make the body
*/
module.exports = async function createListing(body){
    let api_key = this.api_key;
    try{
        let response = await axios.get('https://backpack.tf/api/classifieds/listings', body)
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}