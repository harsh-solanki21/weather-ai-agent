import axios from "axios";
import { config } from "../configs/config";

export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  description: string;
  country: string;
  timestamp: number;
}

export class WeatherService {
  private apiKey: string;
  private baseUrl: string = config.openWeatherBaseUrl;

  constructor() {
    if (!config.openWeatherApiKey) {
      throw new Error("OpenWeather API key is not defined");
    }
    this.apiKey = config.openWeatherApiKey;
  }

  async getCurrentWeather(location: string): Promise<WeatherData> {
    try {
      const response = await axios.get(`${this.baseUrl}/weather`, {
        params: {
          q: location,
          appid: this.apiKey,
          units: "metric", // Use metric units
        },
      });

      const data = response.data;
      return {
        location: data.name,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        description: data.weather[0].description,
        country: data.sys.country,
        timestamp: data.dt,
      };
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        throw new Error(`Location "${location}" not found`);
      }
      throw new Error(
        `Failed to fetch weather data: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}
