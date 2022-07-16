const axios = require('axios');

const index = require('./endpoints/index/index')
const getCurrencies = require('./endpoints/webapi-economy/IGetCurrencies')
const getPriceHistory = require('./endpoints/webapi-economy/IGetPriceHistory')
const getUserInfo = require('./endpoints/users/usersInfo')


class API {
    constructor(api_key) {
        this.api_key = api_key;
    }
}

API.prototype.index = index
API.prototype.isBPOn = index

API.prototype.getCurrencies = getCurrencies
API.prototype.currencies = getCurrencies

API.prototype.getPriceHistory = getPriceHistory
API.prototype.priceHistory = getPriceHistory

API.prototype.getUserInfo = getUserInfo
API.prototype.userInfo = getUserInfo

module.exports = API;