import React from "react";
import renderer from "react-test-renderer";

import LoadingSpinner from "../LoadingSpinner";

it("renders 55% in the spinner", () => {
  const component = renderer.create(<LoadingSpinner counter={55} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
