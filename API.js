const axios = require('axios');

const index = require('./endpoints/index/index')
const getCurrencies = require('./endpoints/webapi-economy/IGetCurrencies')
const getPriceHistory = require('./endpoints/webapi-economy/IGetPriceHistory')
const getUserInfo = require('./endpoints/users/usersInfo')
const getPricesV4 = require('./endpoints/webapi-economy/IGetPricesV4')
const getSpecialItems = require('./endpoints/webapi-economy/IGetSpecialItemsV1')
const getUser = require('./endpoints/webapi-users/IGetUsersV3')
const getImpersonatedUsers = require('./endpoints/webapi-users/IGetImpersonatedUsers')
const classifiedsSearch = require('./endpoints/classifieds/classifiedsSearchV1')
const classifiedsListings = require('./endpoints/classifieds/classifiedsListingsV1')

const getClassifiedsAlertById = require('./endpoints/alerts/getClassifiedsAlertsById')
const getClassifiedsAlert = require('./endpoints/alerts/getClassifiedsAlerts')

const getListingSnapshot = require('./endpoints/classifieds/classifiedsListingSnapshots')

class API {
    constructor(api_key, accountAccessToken) {
        this.api_key = api_key;
        this.token = accountAccessToken;
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

API.prototype.getUser = getUser

API.prototype.getImpersonatedUsers = getImpersonatedUsers
API.prototype.impersonatedUsers = getImpersonatedUsers

API.prototype.getPrices = getPricesV4
API.prototype.getPricesV4 = getPricesV4

API.prototype.getSpecialItems = getSpecialItems
API.prototype.getSpecialItemsV1 = getSpecialItems

API.prototype.getClassifiedsListings = classifiedsListings
API.prototype.classifiedsListings = classifiedsListings

API.prototype.getClassifiedsAlertById = getClassifiedsAlertById
API.prototype.classifiedsAlertById = getClassifiedsAlertById

API.prototype.getClassifiedsAlert = getClassifiedsAlert
API.prototype.classifiedsAlert = getClassifiedsAlert

API.prototype.getListingSnapshot = getListingSnapshot
API.prototype.listingSnapshot = getListingSnapshot

module.exports = API;