const axios = require('axios')

/*
    Uses url https://backpack.tf/api/
    Method: GET
    Parameters: - steamId64 REQUIRED
    Description: To know if backpack.tf is online and operatable
*/
module.exports = async function index(){
    try{
        let response = await axios.get('https://backpack.tf/api/', header)
        console.log(response)
    }catch(err) {
        console.log(err.response.data)
        new Error(err.response.data);
    }
}