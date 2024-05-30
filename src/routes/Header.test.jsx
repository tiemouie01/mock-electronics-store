import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { describe, it, expect } from "vitest";
import Header from "./Header";

describe("Check that all expected elements render", () => {
  it("renders Header without crashing", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
  });

  it("renders heading", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders home link", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const homeLinkElement = screen.getByRole("link", { name: /home/i });
    expect(homeLinkElement).toBeInTheDocument();
  });

  it("renders shop link", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const shopLinkElement = screen.getByRole("link", { name: /shop/i });
    expect(shopLinkElement).toBeInTheDocument();
  });

  it("renders shopping cart icon with correct number of items", () => {
    render(
      <Router>
        <Header cartItems={3} />
      </Router>
    );
    const cartIconElement = screen.getByTestId("cart-icon");
    expect(cartIconElement).toBeInTheDocument();
    const cartItemsElement = screen.getByText("3");
    expect(cartItemsElement).toBeInTheDocument();
  });
});

describe("Test navigation links", () => {
  it("navigates to home page when home link is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Header />
      </Router>
    );
    const homeLinkElement = screen.getByRole("link", { name: /home/i });
    await user.click(homeLinkElement);
    expect(window.location.pathname).toBe("/");
  });

  it("navigates to shop page when shop link is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Header />
      </Router>
    );
    const shopLinkElement = screen.getByRole("link", { name: /shop/i });
    await user.click(shopLinkElement);
    expect(window.location.pathname).toBe("/shop");
  });
});
