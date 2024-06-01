import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import ProductDetail from "./ProductDetail";

const mockAddToCart = vi.fn();

describe("ProductDetail component", () => {
  const products = [
    { id: 1, title: "Product 1", price: 10, quantity: 1, image: "image1.jpg" },
    { id: 2, title: "Product 2", price: 20, quantity: 1, image: "image2.jpg" },
  ];
  const selectedItem = 1;

  it("renders without crashing", () => {
    render(
      <ProductDetail
        products={products}
        selectedItem={selectedItem}
        addToCart={mockAddToCart}
      />,
    );
    expect(screen.getByText("Product 1")).toBeVisible();
    expect(screen.getByText("10")).toBeVisible();
    expect(screen.getByAltText("Product 1")).toBeVisible();
  });

  it("does not render if selectedItem is not in products", () => {
    render(
      <ProductDetail
        products={products}
        selectedItem={3}
        addToCart={mockAddToCart}
      />,
    );
    expect(screen.queryByText("Product 1")).toBeNull();
    expect(screen.queryByText("Product 2")).toBeNull();
  });

  it('calls addToCart when "Add to Cart" button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <ProductDetail
        products={products}
        selectedItem={selectedItem}
        addToCart={mockAddToCart}
      />,
    );
    const addToCartButton = screen.getByText("Add to Cart");
    await user.click(addToCartButton);
    expect(mockAddToCart).toHaveBeenCalled();
  });

  it("changes quantity when increment and decrement buttons are clicked", async () => {
    const user = userEvent.setup();
    render(
      <ProductDetail
        products={products}
        selectedItem={selectedItem}
        addToCart={mockAddToCart}
      />,
    );
    const incrementButton = screen.getByText("+");
    const decrementButton = screen.getByText("-");
    const quantityInput = screen.getByLabelText("Quantity");
    await user.click(incrementButton);
    expect(quantityInput.value).toBe("2");
    await user.click(decrementButton);
    expect(quantityInput.value).toBe("1");
  });

  it("changes quantity when input value is changed", async () => {
    const user = userEvent.setup();
    render(
      <ProductDetail
        products={products}
        selectedItem={selectedItem}
        addToCart={mockAddToCart}
      />,
    );
    const quantityInput = screen.getByLabelText("Quantity");
    await user.type(quantityInput, "5");
    expect(quantityInput.value).toBe("5");
  });

  it("renders the correct product details for the selected item", () => {
    render(
      <ProductDetail
        products={products}
        selectedItem={selectedItem}
        addToCart={mockAddToCart}
      />,
    );
    const productTitle = screen.getByText("Product 1");
    const productPrice = screen.getByText("10");
    const productImage = screen.getByAltText("Product 1");

    expect(productTitle).toBeVisible();
    expect(productPrice).toBeVisible();
    expect(productImage).toBeVisible();
  });
});
