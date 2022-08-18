const axios = require('axios')

/*
    Uses url https://backpack.tf/api/
    Method: GET
    Parameters: 
    Description: To know if backpack.tf is online and operatable
*/
module.exports = async function index(){
    var token = this.token;
    try{
        let response = await axios.get('https://backpack.tf/api?token=' + token)
        return response;
    }catch(err) {
        //console.log(err.response.data)
        new Error(err.response.data);
    }
}