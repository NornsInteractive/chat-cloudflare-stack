import { google } from "@ai-sdk/google";

const modelId = "gemini-2.5-flash-lite";

export const model = google(modelId);
