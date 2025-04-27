import axios from "axios";
import { WeatherResponse } from "../types/weather";

const API_BASE_URL =
  import.meta.env.API_BASE_URL || "http://localhost:5000/api";

export const getWeather = async (
  location: string,
  query?: string
): Promise<WeatherResponse> => {
  try {
    const params: Record<string, string> = { location };
    if (query) {
      params.query = query;
    }

    const response = await axios.get<WeatherResponse>(
      `${API_BASE_URL}/weather`,
      { params }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.error || "Failed to fetch weather data"
      );
    }
    throw new Error("Failed to connect to weather service");
  }
};
