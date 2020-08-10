import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "./index";

jest.mock("react-redux");

describe("Home Page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should render the page", () => {
    useSelector.mockReturnValue({ people: { status: "" } });
    const { getByText } = render(<Home />);

    expect(getByText("Frontend challenge")).toBeTruthy();
  });

  it("should loading data", () => {
    useSelector.mockReturnValue({ people: { status: "loading" } });
    const { getByTestId } = render(<Home />);

    const startButton = getByTestId("start-button");

    expect(startButton).toBeDisabled();
  });

  it("should show error message when fetch failed", () => {
    useSelector.mockReturnValue({ people: { status: "error" } });
    const { getByTestId } = render(<Home />);

    expect(getByTestId("error-message")).toBeTruthy();
  });

  it("should render modal when opened", () => {
    useSelector.mockReturnValue({
      people: { status: "" },
      open: true,
    });
    const { getByTestId } = render(<Home />);

    expect(getByTestId("modal")).toBeTruthy();
  });
});
