import express from "express";
import cors from "cors";
import { config } from "./configs/config";
import weatherRoutes from "./routes/weatherRoutes";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api", weatherRoutes);

app.get("/", (_req, res) => {
  res.send(
    "Weather Agent API is running. Use /api/weather?location=CITY_NAME to get weather information."
  );
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
