const apii = require("../../API");

const api = new apii(api_key ,acessToken);

//Function to get the name of the account giving the steam id 64
async function getClassfiedsAlerts(){
    api.getClassifiedsAlert().then( (response) => {//Get the repsonse from the method
        console.log(response)
    }).catch((err) =>{//Catching the error if happens
        console.log(err);
    })
}

getClassfiedsAlerts();