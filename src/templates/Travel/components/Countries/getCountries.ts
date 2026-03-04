import { TravelCountriesType } from "../../types/types";

export async function getCountries(): Promise<TravelCountriesType[]> {
  const res = await fetch("https://www.apicountries.com/countries");

  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }

  return res.json();
}
