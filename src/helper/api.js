import axios from "axios";
import AppConstants from "./constants";

const apiHelper = {
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

  getProductList: function (callback) {
    apiHelper.getData(AppConstants.urls.getProductList, callback);
  },
};

export default apiHelper;
