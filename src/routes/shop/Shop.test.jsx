import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import { Shop } from "./Shop";

vi.mock("../../getData", () => {
  return {
    default: () => {
      return {
        data: [
          { id: 1, title: "Product 1", price: 10, quantity: 1 },
          { id: 2, title: "Product 2", price: 20, quantity: 1 },
        ],
        error: null,
        loading: false,
      };
    },
  };
});

vi.mock("./Products", () => {
  return {
    default: () => <div>Product</div>,
  };
});

vi.mock("./ProductCard", () => {
  return {
    default: () => <div>Product Card</div>,
  };
});

vi.mock("./Cart", () => {
  return {
    default: () => <div>Cart</div>,
  };
});

describe("Shop component", () => {
  it("renders without crashing", () => {
    render(<Shop cartItems={[]} setCartItems={mockSetCartItems} />);
    expect(screen.getByText("Product")).toBeVisible();
    expect(screen.getByText("ProductCard")).toBeVisible();
  });

  it("renders loading state correctly", () => {
    useData.mockReturnValue({
      data: null,
      error: null,
      loading: true,
    });
    render(<Shop cartItems={[]} setCartItems={mockSetCartItems} />);
    expect(screen.getByText("Loading...")).toBeVisible();
  });

  it("renders error state correctly", () => {
    useData.mockReturnValue({
      data: null,
      error: "Error message",
      loading: false,
    });
    render(<Shop cartItems={[]} setCartItems={mockSetCartItems} />);
    expect(screen.getByText("Error message")).toBeVisible();
  });

  it("renders Cart when route is /shop/cart", () => {
    window.history.pushState({}, "Cart Section", "/shop/cart");
    render(<Shop />);
    const cartElement = screen.getByRole("heading", { name: "Cart" });
    expect(cartElement).toBeInTheDocument();
  });

  it("renders Product Detail page when route is /shop/detail", () => {
    window.history.pushState({}, "Product Details page", "/shop/detail");
    render(<Shop />);
    const detailElement = screen.getByRole("heading", {
      name: "Product Details",
    });
    expect(detailElement).toBeInTheDocument();
  });
});
