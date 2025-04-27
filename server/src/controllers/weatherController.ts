import { Request, Response } from "express";
import { WeatherService } from "../services/weatherService";
import { GeminiService } from "../services/geminiService";

export class WeatherController {
  private weatherService: WeatherService;
  private geminiService: GeminiService;

  constructor() {
    this.weatherService = new WeatherService();
    this.geminiService = new GeminiService();
  }

  async getWeather(req: Request, res: Response): Promise<void> {
    try {
      const location = req.query.location as string;
      const query = req.query.query as string | undefined;

      if (!location) {
        res.status(400).json({ error: "Location parameter is required" });
        return;
      }

      const weatherData = await this.weatherService.getCurrentWeather(location);
      const interpretation = await this.geminiService.interpretWeatherData(
        weatherData,
        query
      );

      res.json({
        weatherData,
        interpretation,
      });
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }

  async getRawWeather(req: Request, res: Response): Promise<void> {
    try {
      const location = req.query.location as string;

      if (!location) {
        res.status(400).json({ error: "Location parameter is required" });
        return;
      }

      const weatherData = await this.weatherService.getCurrentWeather(location);
      res.json(weatherData);
    } catch (error) {
      res.status(500).json({
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
}
