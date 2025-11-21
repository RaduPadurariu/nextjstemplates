export interface TravelLinkType {
  id: number;
  title: string;
  link: string;
}

export interface TravelSingleBlogType {
  id: number;
  title: string;
  slug: string;
  desc: string;
  src: string;
  tags: string[];
  author: string;
  views: string;
  date: string;
  comments: number;
}

export interface TravelCountriesType {
  name: string;
  region: string;
  flags: { png: string; svg: string };
  population: number;
  area: number;
  capital: string;
  currencies: TravelCurrenciesType[];
}

export interface TravelCurrenciesType {
  code: string;
  name: string;
  symbol: string;
}
