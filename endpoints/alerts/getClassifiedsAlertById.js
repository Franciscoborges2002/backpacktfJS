const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/alerts/{id}
    Method: GET
    Parameters: - steamId64 REQUIRED
    Description: Get alerts by id
*/
module.exports = async function getClassfiedsAlerts(id){
    let api_key = this.api_key;
    if(id === ''){
        new Error("Id not given.")
    }else{
        try{
            let response = await axios.get('https://backpack.tf/api/classifieds/alerts/' + id);//+ '&key=' + api_key
            return response.data
        }catch(err) {
            console.log(err.response.data)
            new Error(err.response.data);
        }
    }
}