import React from "react";
import { describe, it } from "mocha";
import { expect } from "chai";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Header from "../src/components/common/Header.jsx";
import { Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

describe("Header", () => {
  it("renders a single nav element", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("nav").exists()).to.equal(true);
    expect(wrapper.find("nav")).to.have.length(1);
  });
  it("renders two Link elements", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Link)).to.have.length(2);
  });
  it("renders a link to the homepage first", () => {
    const wrapper = shallow(<Header />);
    expect(
      wrapper
        .find(Link)
        .first()
        .props().to
    ).to.equal("/");
    expect(
      wrapper
        .find(Link)
        .first()
        .props().href
    ).to.equal("/");
  });
  it("renders a link to the About page second", () => {
    const wrapper = shallow(<Header />);
    expect(
      wrapper
        .find(Link)
        .at(1)
        .props().to
    ).to.equal("about");
    expect(
      wrapper
        .find(Link)
        .at(1)
        .props().href
    ).to.equal("about");
  });
});
