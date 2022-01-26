import React from "react";
import reactDom from "react-dom";
import { shallow } from "enzyme";

import AppConstants from "./helper/constants";

import App from "./App";

// const r = require("fetch-mock-jest");

// jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());
// const fetchMock = require("node-fetch");

// import fetchMockJest from "fetch-mock-jest";

const apiResponse = {
  products: [
    {
      id: "123442",
      title: "Product 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/product1.jpeg",
      price: "39",
      currency: "$",
    },
    {
      id: "123443",
      title: "Product 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/product2.jpeg",
      price: "39",
      currency: "$",
    },
    {
      id: "123444",
      title: "Product 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      image: "/product3.jpeg",
      price: "39",
      currency: "$",
    },
  ],
};

describe("Component: App", () => {
  it("renders properly without crashing", () => {
    // fetchMock.getOnce(AppConstants.urls.getProductList, apiResponse);

    // jest.spyOn(window, "fetch");
    // window.fetch.mockResolvedValueOnce({
    //   ok: true,
    //   json: async () => apiResponse,
    // });

    const div = document.createElement("div");
    reactDom.render(<App />, div);
    reactDom.unmountComponentAtNode(div);
  });
});
