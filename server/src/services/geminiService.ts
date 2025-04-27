import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../configs/config";
import { WeatherData } from "./weatherService";

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private modelName: string = config.geminiModel;

  constructor() {
    if (!config.geminiApiKey) {
      throw new Error("Gemini API key is not defined");
    }
    this.genAI = new GoogleGenerativeAI(config.geminiApiKey);
  }

  async interpretWeatherData(
    weatherData: WeatherData,
    query?: string
  ): Promise<string> {
    const model = this.genAI.getGenerativeModel({ model: this.modelName });

    const prompt = `
Current weather data for ${weatherData.location}, ${weatherData.country}:
- Temperature: ${weatherData.temperature}°C
- Feels like: ${weatherData.feelsLike}°C
- Humidity: ${weatherData.humidity}%
- Wind speed: ${weatherData.windSpeed} m/s
- Weather description: ${weatherData.description}
- Timestamp: ${new Date(weatherData.timestamp * 1000).toISOString()}

${
  query
    ? `User query: ${query}`
    : "Provide a brief, helpful summary of the current weather conditions and any recommendations based on the weather."
}

Please respond in a helpful, concise manner with the weather information.
`;

    try {
      const result = await model.generateContent(prompt);
      const response = result.response;
      return response.text();
    } catch (error) {
      throw new Error(
        `Failed to interpret weather data: ${
          error instanceof Error ? error.message : "Unknown error"
        }`
      );
    }
  }
}
