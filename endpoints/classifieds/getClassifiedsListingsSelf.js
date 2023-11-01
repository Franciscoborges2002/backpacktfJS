const axios = require("axios");

/*
    Uses url https://backpack.tf/api/classifieds/listings/v1
    Method: GET
    Parameters: - intent :  ACCEPTED= sell, buy, dual. DEFAULT= dual.
                - page_size : ACCEPTED= >= 1 and <= 30. DEFAULT = 10
                - fold: DEFAULT = 0
    Description: 
*/
module.exports = async function classifiedSearch(skip = 0, limit = 0) {
  let token = this.token;
  var link;
  try {
    if (skip !== 0) {
      link = "https://backpack.tf/api/classifieds/listings/self?skip=" + skip;
    }

    if (skip !== 0 && limit !== 0) {
      link = link + "&limit=" + limit;
    }

    if (limit !== 0) {
      link = "https://backpack.tf/api/classifieds/listings/self?limit=" + limit;
    }

    let response = await axios.get(link);

    return response.data;
  } catch (err) {
    console.log(err.response.data);
    new Error(err.response.data);
  }
};
