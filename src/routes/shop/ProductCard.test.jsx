import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ProductCard from "./ProductCard";

const mockOnClick = vi.fn();

describe("ProductCard component", () => {
  const product = { id: 1, title: "Product 1", price: 10, image: "image1.jpg" };

  it("renders without crashing", () => {
    render(<ProductCard product={product} onClick={mockOnClick} />);
    expect(screen.getByText("Product 1")).toBeVisible();
    expect(screen.getByText("10")).toBeVisible();
    expect(screen.getByAltText("Product 1")).toBeVisible();
  });

  it("calls onClick when product card is clicked", async () => {
    const user = userEvent.setup();
    render(<ProductCard product={product} onClick={mockOnClick} />);
    const productCard = screen.getByTestId("product-card");
    await user.click(productCard);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("does not render if product prop is not provided", () => {
    render(<ProductCard onClick={mockOnClick} />);
    expect(screen.queryByText("Product 1")).toBeNull();
    expect(screen.queryByText("10")).toBeNull();
    expect(screen.queryByAltText("Product 1")).toBeNull();
  });
});
