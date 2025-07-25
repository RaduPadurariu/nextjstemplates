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
