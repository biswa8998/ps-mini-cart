import axios from "axios";
import AppConstants from "./constants";

const apiHelper = {
  /**
   * This will get data using axios and on successful return it will run the callback function
   * @param {*} url
   * @param {*} callback
   */
  getData: function (url, callback) {
    axios
      .get(url)
      .then((data) => {
        callback(data.data.products);
      })
      .catch((error) => {
        throw error;
      });
  },

  /**
   * Get the list of products
   * @param {*} callback
   */
  getProductList: function (callback) {
    apiHelper.getData(AppConstants.urls.getProductList, callback);
  },
};

export default apiHelper;
