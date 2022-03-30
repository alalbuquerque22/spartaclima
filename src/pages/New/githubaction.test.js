import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { New } from "./index.js";

it("check if text exist on screen", () => {
  const { getByText } = render(<New />);
  const text = getByText("New");
  expect(text).toBeTruthy();
});
