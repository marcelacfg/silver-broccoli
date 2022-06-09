import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const response = { test: "testing" };
const server = setupServer(
  //rest.get("http://127.0.0.1:5000", (req, res, ctx) => {
  rest.get(
    "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en",
    (req, res, ctx) => {
      // rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
      return res(ctx.json(response));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the app with a button, a quote and an image", () => {
  render(<App />);

  const button = screen.getByRole("button");
  const image = screen.getByRole("img");
  //const quote = screen.getByRole("p");
  const quote = screen.getByText(/loading speaker/);

  expect(button).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(quote).toBeInTheDocument();
});

test("calls api on button click and update text", () => {
  render(<App />);

  const button = screen.getByRole("button");
  fireEvent.click(buttonEl);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});


test('calls api on startup and renders its response', async () => {
  render(<App/>);

  const quoteEl = await screen.findByText(response.quote);

  expect(quoteEl).toBeInTheDocument();
});