import React from "react";
import { describe, it } from "mocha";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "../src/components/App.jsx";
import Header from "../src/components/common/Header.jsx";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("renders a single Header element", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).to.have.length(1);
  });
});
