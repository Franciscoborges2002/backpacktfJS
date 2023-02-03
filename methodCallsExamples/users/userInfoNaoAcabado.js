const apii = require("../../API");

const api = new apii(api_key ,acessToken);

let steamid64 = "76561198243929698";

api.userInfo(steamid64).then( (response) =>{
    console.log(response.users.steamid64);
});