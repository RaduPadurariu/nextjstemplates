import { shopMyProductList } from "@/data/shopData";
import { useShopContext } from "./useShopContext";
import { ShopContextProvider } from "./ShopContextProvider";
import { fireEvent, render, screen } from "@testing-library/react";

const TestComponent = () => {
  const { cartProducts, handleAddToCart } = useShopContext();
  const product = shopMyProductList[0];

  return (
    <div>
      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          handleAddToCart(product);
        }}
      >
        Add to cart
      </button>
      <div data-testid="qty">{cartProducts[0]?.quantity ?? 0}</div>
    </div>
  );
};

describe("ShopContextProvider - handleAddToCart", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("adds new product with quantity 1", () => {
    render(
      <ShopContextProvider>
        <TestComponent />
      </ShopContextProvider>,
    );

    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    expect(screen.getByTestId("qty").textContent).toBe("1");
  });

  it("increments quantity if product already exists", () => {
    render(
      <ShopContextProvider>
        <TestComponent />
      </ShopContextProvider>,
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByTestId("qty").textContent).toBe("2");
  });
});
