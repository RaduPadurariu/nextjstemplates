import type { Swiper as SwiperType } from "swiper";

export type shopCatalogProduct = {
  id: number;
  src: string;
  title: string;
  longTitle: string;
  desc: string;
  longDesc: string;
  price: number;
};

export interface ShopHomeCarouselProps {
  data: shopCatalogProduct[];
  swiperRef?: React.MutableRefObject<SwiperType | null>;
}

// My Products
export interface ShopMyProductsSubCategory {
  id: number;
  subCategory: string;
  selected: boolean;
}

export interface ShopMyProductsCategory {
  id: number;
  title: string;
  subItem: ShopMyProductsSubCategory[];
}

// Context types

export interface ShopContextType {
  categoryChanged: string;
  setCategoryChanged: (value: string) => void;
  selectedCategory: ShopMyProductsCategory | null;
  setSelectedCategory: (value: ShopMyProductsCategory | null) => void;
}

export interface ShopContextProviderType {
  children: React.ReactNode;
}

// My products

export type shopMyProduct = {
  id: string;
  src: string;
  title: string;
  longDesc: string;
  price: number;
  isInCart: boolean;
  category: string;
  subCategory: string;
};
