# 🌦️ Weather AI Assistant

- Weather AI Assistant is a web application that provides `real-time weather data` and `AI-powered insights`.
- It fetches weather information from `OpenWeather` and uses `Gemini AI` to interpret the data, offering a user-friendly experience for understanding current weather conditions.

## 🎬 Demonstration

https://github.com/user-attachments/assets/96bd0485-8a21-4202-bfef-680b5ca68100

<br />

## ✨ Features

- 🌍 **Real-Time Weather Data**: Get up-to-date weather information for any location.
- 🤖 **AI-Powered Insights**: Leverages Gemini AI to provide meaningful interpretations of weather data.
- 🖥️ **Interactive UI**: Built with React and TypeScript for a seamless user experience.
- 🌤️ **Custom Weather Icons**: Displays weather-specific icons for clear, cloudy, rainy, and other conditions.

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript
- **API Integration**: OpenWeather API, Gemini AI API
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios

<br />

## 🚀 Installation

### ✅ Prerequisites

- 🟢 **Node.js** (v16 or higher)
- 📦 **pnpm** (preferred package manager)

### 📂 Clone the Repository

**1. Clone the repository:**

```bash
git clone https://github.com/harsh-solanki21/weather-ai-agent

cd weather-ai-agent
```

<br />

**2. Set up environment variables:**

- **Server**: Create a `.env` file in the `server` directory based on `.env.example`:

```typescript
PORT = 5000;
OPENWEATHER_API_KEY = your_openweather_api_key;
GEMINI_API_KEY = your_gemini_api_key;
```

- **Client**: Create a `.env` file in the `client` directory if needed for additional configurations.

<br />

**3. Install Dependencies:**

**Server:**

```bash
cd server
pnpm install
```

**Client:**

```bash
cd ../client
pnpm install
```

<br />

### ▶️ Running the Application

**1. Start the Server**

```bash
cd server
pnpm run dev
```

**2. Start the Client**

```bash
cd ../client
pnpm run dev
```

**3. Access the application:**

- Client: `http://localhost:5173` (default Vite port)
- Server: `http://localhost:5000`

<br />

## 📡 API Endpoints

`/api/weather`

- **Method**: `GET`
- **Query Parameters**:

  - `location` (required): The location for which to fetch weather data.
  - `query` (optional): Additional query for AI interpretation.

- **Response**:
  - `weatherData`: Weather details (temperature, humidity, etc.).
  - `interpretation`: AI-generated insights.
