// describe("My Test Suite", () => {
//   it("My Test Case", () => {
//     expect(true).toEqual(true);
//   });
// });
//-------------
// import React from "react";
// import renderer from "react-test-renderer";

// import { Counter } from "./App";

// describe("Counter", () => {
//   test("snapshot renders", () => {
//     const component = renderer.create(<Counter counter={1} />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
//--------------------------
// import renderer from "react-test-renderer";
// // import { render } from "@testing-library/react";
// import App from "../src/components/App";
// import ReactTestUtils from "react-dom/test-utils"; // ES6
// // var ReactTestUtils = require("react-dom/test-utils"); // ES5 with npm

// test("renders learn react link", () => {
//   const component = renderer.create(<App />);
//   // const { getByText } = render( <App /> );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });
//---------------------------
// import renderer from "react-test-renderer";
// // import { render } from "@testing-library/react";
// import App from "../src/components/App";
// import ReactTestUtils from "react-dom/test-utils"; // ES6
// // var ReactTestUtils = require("react-dom/test-utils"); // ES5 with npm

// test("renders learn react link", () => {
//   const component = renderer.create(<App />);
//   // const { getByText } = render( <App /> );
//   let tree = component.toJSON();
//   expect(tree).toMatchSnapshot();

//   // const linkElement = getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });
//------------------------
// // import React from "react";
// import renderer from "react-test-renderer";
// import { mount } from "enzyme";

// import App, { Counter, dataReducer } from "./App";

// const list = ["a", "b", "c"];

// describe("App", () => {
//   describe("Reducer", () => {
//     it("should set a list", () => {
//       const state = { list: [], error: null };
//       const newState = dataReducer(state, {
//         type: "SET_LIST",
//         list
//       });
//       expect(newState).toEqual({ list, error: null });
//     });
//   });

//   test("snapshot renders", () => {
//     const component = renderer.create(<App />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it("renders the inner Counter", () => {
//     const wrapper = mount(<App />);
//     expect(wrapper.find(Counter).length).toEqual(1);
//   });
// });

// describe("Counter", () => {
//   test("snapshot renders", () => {
//     const component = renderer.create(<Counter counter={1} />);
//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
// // });
//------------
import React from "react";
import { shallow } from "enzyme";
import App from "./components/App";

describe("App", () => {
  it("should render a <div />", () => {
    const container = shallow(<App />);
    expect(container.find("div").length).toEqual(1);
  });
});
