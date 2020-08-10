import React from "react";
import { render } from "@testing-library/react";

import Modal from "./index";

describe("Modal", () => {
  it("should be able to show modal with the children", () => {
    const { getByText } = render(
      <Modal>
        <div>Hello world</div>
      </Modal>
    );

    expect(getByText("Hello world")).toBeTruthy();
  });
});
