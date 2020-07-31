import React from "react";
import renderer from "react-test-renderer";
// import { render } from "@testing-library/react";
import App from "../src/components/App";
import ReactTestUtils from "react-dom/test-utils"; // ES6
// var ReactTestUtils = require("react-dom/test-utils"); // ES5 with npm

test("renders learn react link", () => {
  const component = renderer.create(<App />);
  // const { getByText } = render( <App /> );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
