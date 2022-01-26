import React from "react";
import reactDom from "react-dom";
import { shallow, mount } from "enzyme";

import Minicart from "./Minicart";

describe("Testing Minicart component", () => {
  it("should render without crash", () => {
    const div = document.createElement("div");
    reactDom.render(<Minicart />, div);
    reactDom.unmountComponentAtNode(div);
  });
});
