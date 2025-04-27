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

export interface WeatherResponse {
  weatherData: WeatherData;
  interpretation: string;
}
