import { Router } from "express";
import { WeatherController } from "../controllers/weatherController";

const router = Router();
const weatherController = new WeatherController();

router.get("/weather", (req, res) => weatherController.getWeather(req, res));
router.get("/weather/raw", (req, res) =>
  weatherController.getRawWeather(req, res)
);

export default router;
