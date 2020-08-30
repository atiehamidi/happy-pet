import dotenv from "dotenv";
dotenv.config();
export const apiUrl = process.env.API_URL || "http://localhost:4000";
export const DEFAULT_MESSAGE_TIMEOUT = 3000;
export const apiKeyGoogle = process.env.REACT_APP_GOOGLE;
