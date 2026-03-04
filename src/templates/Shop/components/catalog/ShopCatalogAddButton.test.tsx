import { render, screen, fireEvent } from "@testing-library/react";
import ShopCatalogAddButton from "./ShopCatalogAddButton";
import { ShopMyProduct } from "../../types/shopTypes";

const mockHandleAddToCart = jest.fn();

const mockProduct: ShopMyProduct = {
  id: "1",
  src: "/images/test-product.png",
  title: "Test Product",
  longTitle: "Test Product Long Title",
  desc: "Short description",
  longDesc: "This is a longer description for testing purposes.",
  price: 99.99,
  isInCart: false,
  category: "Tools",
  subCategory: "Abrasives",
};

describe("ShopCatalogAddButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("calls handleAddToCart when clicking Add to cart button", () => {
    render(
      <ShopCatalogAddButton
        product={mockProduct}
        handleAddToCart={mockHandleAddToCart}
      />,
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(button);

    expect(mockHandleAddToCart).toHaveBeenCalledWith(mockProduct);
  });
});
