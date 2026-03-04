import { fireEvent, render, screen } from "@testing-library/react";
import ShopCartContent from "./ShopCartContent";

const mockSelectedCurrency = {
  id: 1,
  currency: "Euro",
  sign: "€",
  coefficient: 1,
};

const mockSetCartProducts = jest.fn();

const mockCartProducts = [
  {
    product: {
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
    },
    quantity: 1,
  },
];

describe("ShopCartContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("renders empty cart message when cart is empty", () => {
    render(
      <ShopCartContent
        cartProducts={[]}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
      />,
    );

    expect(
      screen.getByText(/It appears that your cart is currently empty./i),
    ).toBeInTheDocument();
  });

  it("renders cart products when cart is not empty", () => {
    render(
      <ShopCartContent
        cartProducts={mockCartProducts}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
      />,
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(
      screen.queryByText(/It appears that your cart is currently empty./i),
    ).not.toBeInTheDocument();
  });

  it("calls setCartProducts with empty array when Clear Cart is confirmed", () => {
    jest.spyOn(window, "confirm").mockReturnValue(true);

    render(
      <ShopCartContent
        cartProducts={mockCartProducts}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
      />,
    );

    const button = screen.getByRole("button", { name: /clear cart/i });

    fireEvent.click(button);

    expect(mockSetCartProducts).toHaveBeenCalledWith([]);
  });
});
