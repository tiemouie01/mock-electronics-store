import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { Products } from "./Products";

const mockOnClick = vi.fn();

vi.mock("./ProductCard", () => {
  return {
    default: () => <div onClick={mockOnClick}>ProductCard</div>,
  };
});

describe("Product component", () => {
  const products = [
    { id: 1, title: "Product 1", price: 10, quantity: 1 },
    { id: 2, title: "Product 2", price: 20, quantity: 1 },
  ];

  it("renders without crashing", () => {
    render(<Products products={products} setSelectedItem={mockOnClick} />);
    expect(screen.getByText("Products")).toBeVisible();
    expect(screen.getAllByText("ProductCard").length).toBe(2);
  });

  it("calls setSelectedItem when a product card is clicked", async () => {
    const user = userEvent.setup();
    render(<Products products={products} setSelectedItem={mockOnClick} />);
    const productCards = screen.getAllByText("ProductCard");
    await user.click(productCards[0]);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("renders all products received in props", () => {
    render(<Products products={products} setSelectedItem={mockOnClick} />);
    const productCards = screen.getAllByText("ProductCard");
    expect(productCards.length).toBe(products.length);
  });
});
