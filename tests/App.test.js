import React from 'react';
import renderer from 'react-test-renderer';
// import ReactTestUtils from 'react-dom/test-utils'; // ES6
import App from '../src/components/App';

test('renders learn react link', () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
