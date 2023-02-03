const apii = require("../../API");

const api = new apii(api_key ,acessToken);

//Function to get the name of the account giving the steam id 64
async function getClassfiedsAlerts(idOfAlert){
    api.getClassifiedsAlertById(idOfAlert).then( (response) => {//Get the repsonse from the method
        console.log(response)
    }).catch((err) =>{//Catching the error if happens
        console.log(err);
    })
}

getClassfiedsAlerts("63dcb69e3440a7cff20b5426");