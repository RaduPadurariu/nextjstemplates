import type { Swiper as SwiperType } from "swiper";

export type ShopMyProduct = {
  id: string;
  src: string;
  title: string;
  longTitle: string;
  desc: string;
  longDesc: string;
  price: number;
  isInCart: boolean;
  category: string;
  subCategory: string;
};

export interface ShopMyCartProduct {
  product: ShopMyProduct;
  quantity: number;
}
export interface ShopHomeCarouselProps {
  data: ShopMyProduct[];
  swiperRef?: React.MutableRefObject<SwiperType | null>;
}

export interface ShopCurrencyType {
  id: number;
  currency: string;
  sign: string;
  coefficient: number;
}

// Context types

export interface ShopContextType {
  selectedCurrency: ShopCurrencyType | null;
  setSelectedCurrency: (value: ShopCurrencyType | null) => void;
  cartProducts: ShopMyCartProduct[];
  setCartProducts: (value: ShopMyCartProduct[]) => void;
  handleAddToCart: (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    item: ShopMyProduct
  ) => void;
}

export interface ShopContextProviderType {
  children: React.ReactNode;
}

// My products

export interface ShopMyProductsSubCategory {
  id: number;
  subCategory: string;
  slug: string;
}

export interface ShopMyProductsCategory {
  id: number;
  title: string;
  slug: string;
  subItem: ShopMyProductsSubCategory[];
}

// Cart

export interface ShopMyProductLocalCart {
  id: string;
  quantity: number;
}

export interface ShopSingleBlogTags {
  id: number;
  name: string;
}

export interface ShopSingleBlogComment {
  id: number;
  author: string;
  date: string;
  comment: string;
}
export interface ShopSingleBlogType {
  slug: string;
  imgSrc: string;
  heading: string;
  blogContent: string;
  tags: ShopSingleBlogTags[];
  comments: ShopSingleBlogComment[];
}
