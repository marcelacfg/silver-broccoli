import { getByText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button, button } from "./Button";

test("renders button with text", () => {
  render(<Button>Teste</Button>);

  const buttonEl = screen.getByText("Teste");

  expect(buttonEl).toBeInTheDocument();
});
