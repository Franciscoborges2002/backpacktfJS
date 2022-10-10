const axios = require('axios')

/*
    Uses url https://backpack.tf/api/classifieds/alerts/{id}
    Method: DELETE
    Parameters: - id of the alert to delete
    Description: Delete alert
*/
module.exports = async function getClassfiedsAlerts(id){
    try{
        let response = await axios.delete('https://backpack.tf/api/classifieds/alerts/' + id);
        return response.data
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}