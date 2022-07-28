const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/alerts
    Method: GET
    Parameters: - skip Offset at which to return results.
                - limit Result count.
    Description: Get alerts
*/
module.exports = async function getClassfiedsAlerts(skip = 0, limit = 0){
    let token = this.token;
    try{
        let response = await axios.get('https://backpack.tf/api/classifieds/alerts?skip=' + skip + '&limit=' + limit + '&token=' + token)
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}