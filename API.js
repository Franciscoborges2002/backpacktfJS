const axios = require('axios');

const index = require('./endpoints/index/index')
const getCurrencies = require('./endpoints/webapi-economy/IGetCurrencies')
const getPriceHistory = require('./endpoints/webapi-economy/IGetPriceHistory')
const getUserInfo = require('./endpoints/users/usersInfo')
const getPricesV4 = require('./endpoints/webapi-economy/IGetPricesV4')
const getSpecialItems = require('./endpoints/webapi-economy/IGetSpecialItemsV1')


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

API.prototype.getPrices = getPricesV4
API.prototype.getPricesV4 = getPricesV4

API.prototype.getSpecialItems = getSpecialItems
API.prototype.getSpecialItemsV1 = getSpecialItems

module.exports = API;