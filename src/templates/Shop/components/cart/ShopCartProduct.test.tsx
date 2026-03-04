/* eslint-disable @next/next/no-img-element */

import { render, screen, fireEvent } from "@testing-library/react";
import ShopCartProduct from "./ShopCartProduct";

// mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => (
    <img {...props} alt="no-img" />
  ),
}));

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
      price: 100,
      isInCart: false,
      category: "Tools",
      subCategory: "Abrasives",
    },
    quantity: 1,
  },
];

describe("ShopCartProduct", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("removes product when Remove button is clicked", () => {
    render(
      <ShopCartProduct
        cartProducts={mockCartProducts}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
        item={mockCartProducts[0]}
      />,
    );

    const removeButton = screen.getByRole("button", { name: /remove/i });

    fireEvent.click(removeButton);

    expect(mockSetCartProducts).toHaveBeenCalledWith([]);
  });

  it("increments quantity and updates cart when Update is clicked", () => {
    render(
      <ShopCartProduct
        cartProducts={mockCartProducts}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
        item={mockCartProducts[0]}
      />,
    );

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);
    fireEvent.click(plusButton);

    const updateButton = screen.getByRole("button", { name: /update/i });
    fireEvent.click(updateButton);

    expect(mockSetCartProducts).toHaveBeenCalledWith([
      {
        ...mockCartProducts[0],
        quantity: 4,
      },
    ]);
  });

  it("decrements quantity correctly", () => {
    render(
      <ShopCartProduct
        cartProducts={mockCartProducts}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
        item={mockCartProducts[0]}
      />,
    );

    const plusButton = screen.getByText("+");
    fireEvent.click(plusButton);
    fireEvent.click(plusButton); // 3

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton); // 2

    const updateButton = screen.getByRole("button", { name: /update/i });
    fireEvent.click(updateButton);

    expect(mockSetCartProducts).toHaveBeenLastCalledWith([
      {
        ...mockCartProducts[0],
        quantity: 2,
      },
    ]);
  });

  it("does not decrement quantity below 1", () => {
    render(
      <ShopCartProduct
        cartProducts={mockCartProducts}
        setCartProducts={mockSetCartProducts}
        selectedCurrency={mockSelectedCurrency}
        item={mockCartProducts[0]}
      />,
    );

    const minusButton = screen.getByText("-");
    fireEvent.click(minusButton);

    const updateButton = screen.getByRole("button", { name: /update/i });
    fireEvent.click(updateButton);

    expect(mockSetCartProducts).toHaveBeenLastCalledWith([
      {
        ...mockCartProducts[0],
        quantity: 1,
      },
    ]);
  });
});
