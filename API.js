const axios = require('axios');

const header= {
    "accept": "application/json"
}

async function index(){
    try{
        let response = await axios.get('https://backpack.tf/api/', header)
        console.log(response)
    }catch(err) {
        console.log(err)
        new Error(err);
    }
}

index();

class API {
    constructor (api_key) {
        this.api_key = api_key;
        this.header 
    }
}