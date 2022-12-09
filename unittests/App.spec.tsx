import * as React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "../src/App";

test("click of button is avaliable", async () => {
  render(<App />);
  await UserEvent.click(screen.getByRole('button'));
  expect(screen.getByRole("button").textContent).toBe("count is 1");
});
