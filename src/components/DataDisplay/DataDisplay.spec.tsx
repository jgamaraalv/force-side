import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";

import DataDisplay from "./index";

jest.mock("react-redux");

describe("DataDisplay", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should show data", () => {
    useSelector.mockReturnValue({
      people: {
        status: "loaded",
        data: { name: "Luke Skywalker", force: "light" },
      },
    });
    const { getByTestId } = render(<DataDisplay />);

    expect(getByTestId("master-name")).toBeTruthy();
  });

  it("should show loading", () => {
    useSelector.mockReturnValue({
      people: {
        status: "loading",
      },
    });
    const { getByText } = render(<DataDisplay />);

    expect(getByText("Carregando...")).toBeTruthy();
  });

  it("should show error", () => {
    useSelector.mockReturnValue({
      people: {
        status: "error",
      },
    });
    const { getByText } = render(<DataDisplay />);

    expect(getByText("Ops! Algo de errado não está certo...")).toBeTruthy();
  });
});
