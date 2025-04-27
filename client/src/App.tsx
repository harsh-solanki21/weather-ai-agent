import React, { useState } from "react";
import { getWeather } from "./services/api";
import { WeatherResponse } from "./types/weather";
import SearchForm from "./components/SearchForm";
import WeatherCard from "./components/WeatherCard";
import InterpretationCard from "./components/InterpretationCard";
import ErrorDisplay from "./components/ErrorDisplay";

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (location: string, query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWeather(location, query);
      setWeatherData(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
      setWeatherData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-gray-700 py-6 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">🌦️ Weather AI Assistant</h1>
          <p className="mt-2">Get current weather with AI-powered insights</p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-2xl mx-auto">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />

          {error && <ErrorDisplay message={error} />}

          {isLoading && (
            <div className="text-center py-12">
              <div className="spinner animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">
                Fetching weather information...
              </p>
            </div>
          )}

          {weatherData && !isLoading && (
            <>
              <WeatherCard weather={weatherData.weatherData} />
              <InterpretationCard interpretation={weatherData.interpretation} />
            </>
          )}
        </div>
      </main>

      <footer className="border-t border-gray-200 py-4 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>Weather AI Assistant &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
