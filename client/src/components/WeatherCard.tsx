import React from "react";
import { WeatherData } from "../types/weather";
import WeatherIcon from "./WeatherIcon";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const date = new Date(weather.timestamp * 1000);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {weather.location}, {weather.country}
          </h2>
          <p className="text-gray-500">
            {formattedDate} - {formattedTime}
          </p>
        </div>
        <div className="text-primary-light text-5xl">
          <WeatherIcon description={weather.description} />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-end">
          <span className="text-5xl font-bold text-gray-800">
            {Math.round(weather.temperature)}°C
          </span>
          <span className="ml-2 text-lg text-gray-600">
            Feels like {Math.round(weather.feelsLike)}°C
          </span>
        </div>
        <p className="text-xl text-gray-700 capitalize mt-1">
          {weather.description}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-500 mb-1">Humidity</p>
          <p className="text-lg font-semibold">{weather.humidity}%</p>
        </div>
        <div className="bg-gray-50 p-3 rounded">
          <p className="text-gray-500 mb-1">Wind Speed</p>
          <p className="text-lg font-semibold">{weather.windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
