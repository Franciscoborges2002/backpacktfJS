const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/listings/snapshot
    Method: GET
    Parameters: - appId REQUIRED
                - sku - Stock Keeping Unit REQUIRED
    Description: CGet a listing snapshot
*/
module.exports = async function getListingsSnapshot(sku, appId = 440){
    let token = this.token;
    if(sku === ''){
        throw new Error("SKU not given.")
    }else{
        try{
            let response = await axios.get('https://backpack.tf/api/classifieds/listings/snapshot?sku=' + sku + '&appid=' + appId + '&token=' + token)
            return response.data
        }catch(err) {
            console.log(err.response.data)
            new Error(err.response.data);
        }
    }
    
}