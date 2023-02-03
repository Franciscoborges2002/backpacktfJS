//***** WEBAPI-ECONOMY *****//
const getCurrencies = require('./endpoints/webapi-economy/IGetCurrencies');
const getPriceHistory = require('./endpoints/webapi-economy/IGetPriceHistory');
const getPricesV4 = require('./endpoints/webapi-economy/IGetPricesV4');
const getSpecialItems = require('./endpoints/webapi-economy/IGetSpecialItemsV1');

//***** WEBAPI-USERS *****//
const getUser = require('./endpoints/webapi-users/IGetUsersV3');
const getImpersonatedUsers = require('./endpoints/webapi-users/IGetImpersonatedUsers');

//***** WEBAPI-CLASSIFIEDS *****//
const getUserTradesV1 = require('./endpoints/webapi-classifieds/IGetUserTradesV1');

//***** CLASSIFIEDS *****//
const getClassifiedsSearch = require('./endpoints/classifieds/getClassifiedsSearchV1');
const getClassifiedsListings = require('./endpoints/classifieds/getClassifiedsListingsV1');

//***** ALERTS PART *****//
const getClassifiedsAlertById = require('./endpoints/alerts/getClassifiedsAlertById');
const getClassifiedsAlert = require('./endpoints/alerts/getClassifiedsAlerts');
const postClassifieds = require('./endpoints/alerts/postClassifiedAlert');
const deleteClassifiedsAlertById = require('./endpoints/alerts/deleteClassifiedsAlertById');
const deleteClassifiedsAlert = require('./endpoints/alerts/deleteClassifiedsAlert');

//***** NOTIFICATIONS *****//

//***** AGENT *****//

//***** INDEX *****//
const index = require('./endpoints/index/index');

//***** INVENTORY *****//
const getInventoryValue = require('./endpoints/inventory/postInventoryValue');
const getInventoryStatus = require('./endpoints/inventory/getInventoryStatus');
const postInventoryRefresh = require('./endpoints/inventory/getInventoryRefresh');

//***** USERS *****//
const getUserInfo = require('./endpoints/users/usersInfo');

//***** CLASSIFIEDS-REST-ALPHA *****//
const getListingSnapshot = require('./endpoints/classifieds/getClassifiedsListingSnapshots');


class API {
    constructor(api_key, accountAccessToken) {
        this.api_key = api_key;
        this.token = accountAccessToken;
    }
}

//***** WEBAPI-ECONOMY *****//
API.prototype.getCurrencies = getCurrencies;
API.prototype.currencies = getCurrencies;

API.prototype.getPriceHistory = getPriceHistory;
API.prototype.priceHistory = getPriceHistory;

API.prototype.getPrices = getPricesV4;
API.prototype.getPricesV4 = getPricesV4;

API.prototype.getSpecialItems = getSpecialItems;
API.prototype.getSpecialItemsV1 = getSpecialItems;

//***** WEBAPI-USERS *****//
API.prototype.getUser = getUser;

API.prototype.getImpersonatedUsers = getImpersonatedUsers;
API.prototype.impersonatedUsers = getImpersonatedUsers;

//***** WEBAPI-CLASSIFIEDS *****//
API.prototype.getUserTrades = getUserTradesV1;
API.prototype.userTrades = getUserTradesV1;

//***** CLASSIFIEDS *****//
API.prototype.getClassifiedsSearch = getClassifiedsSearch;
API.prototype.classifiedsSearch = getClassifiedsSearch;

API.prototype.getClassifiedsListings = getClassifiedsListings;
API.prototype.classifiedsListings = getClassifiedsListings;

//***** ALERTS PART *****//
API.prototype.getClassifiedsAlertById = getClassifiedsAlertById;
API.prototype.classifiedsAlertById = getClassifiedsAlertById;

API.prototype.getClassifiedsAlert = getClassifiedsAlert;
API.prototype.classifiedsAlert = getClassifiedsAlert;

API.prototype.postClassifiedsAlert = postClassifieds;
API.prototype.createClassifiedsAlert = postClassifieds;

API.prototype.deleteClassifiedsAlertById = deleteClassifiedsAlertById;

API.prototype.deleteClassifiedsAlert = deleteClassifiedsAlert;
API.prototype.deleteClassifiedsAlertByName = deleteClassifiedsAlert;

//***** NOTIFICATIONS *****//

//***** AGENT *****//

//***** INDEX *****//
API.prototype.index = index;
API.prototype.isBPOn = index;

//***** INVENTORY *****//
API.prototype.getInventoryValue = getInventoryValue;
API.prototype.inventoryValue = getInventoryValue;

API.prototype.getInventoryStatus = getInventoryStatus;
API.prototype.inventorystatus = getInventoryStatus;

API.prototype.postIventoryRefresh = postInventoryRefresh;
API.prototype.iventoryRefresh = postInventoryRefresh;

//***** USERS *****//
API.prototype.getUserInfo = getUserInfo;
API.prototype.userInfo = getUserInfo;

//***** CLASSIFIEDS-REST-ALPHA *****//
API.prototype.getListingSnapshot = getListingSnapshot;
API.prototype.listingSnapshot = getListingSnapshot;

module.exports = API;