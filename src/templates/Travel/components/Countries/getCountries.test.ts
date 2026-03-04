import { TravelCountriesType } from "../../types/types";
import { getCountries } from "./getCountries";

describe("getCountries", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns countries data when response is successful", async () => {
    const mockData: TravelCountriesType[] = [
      {
        name: "Romania",
        region: "Europe",
        flags: { png: "flag.png", svg: "flag.svg" },
        population: 19000000,
        area: 238397,
        capital: "Bucharest",
        currencies: [{ name: "Leu", symbol: "RON", code: "2333" }],
      },
    ];

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    }) as jest.Mock;

    const data = await getCountries();

    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://www.apicountries.com/countries",
    );
  });

  it("throws error when response is not ok", async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
    }) as jest.Mock;

    await expect(getCountries()).rejects.toThrow("Failed to fetch countries");
  });
});
