import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";
import { vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

vi.mock("./Header", () => {
  return {
    default: () => <div>Header</div>,
  };
});

vi.mock("./shop/Shop", () => {
  return {
    default: () => <div>Shop</div>,
  };
});

vi.mock("./Home", () => {
  return {
    default: () => <div>Home</div>,
  };
});

it("renders App without crashing", () => {
  render(
    <Router>
      <App />
    </Router>
  );
});

it("renders Header component", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const headerElement = screen.getByText("Header");
  expect(headerElement).toBeInTheDocument();
});

it("renders Home component by default", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const homeElement = screen.getByText("Home");
  expect(homeElement).toBeInTheDocument();
});

it("renders Shop component when route is /shop", () => {
  window.history.pushState({}, "Shop page", "/shop");
  render(
    <Router>
      <App />
    </Router>
  );
  const shopElement = screen.getByText("Shop");
  expect(shopElement).toBeInTheDocument();
});
