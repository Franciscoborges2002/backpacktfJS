const axios = require("axios");

/*
    Uses url https://backpack.tf/api/classifieds/listings/snapshot
    Method: GET
    Parameters: - appId REQUIRED
                - sku - Stock Keeping Unit REQUIRED
    Description: CGet a listing snapshot
*/
module.exports = async function getClassifiedsLimits() {
  let token = this.token;
  try {
    let response = await axios.get(
      "https://backpack.tf/api/classifieds/limits"
    );
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    new Error(err.response.data);
  }
};
