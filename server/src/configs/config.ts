import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  openWeatherApiKey: process.env.OPENWEATHER_API_KEY,
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiModel: "gemini-2.0-flash",
  openWeatherBaseUrl: "https://api.openweathermap.org/data/2.5",
};
