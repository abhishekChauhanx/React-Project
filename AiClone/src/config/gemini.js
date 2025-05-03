// file: generateText.js

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai" ;

// Load your API key from environment variable or config
const API_KEY = "AIzaSyCqzXpSI67mmASWGC45lTEyYMvaO-cCxYU";

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_LOW,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_LOW,
      },
    ],
    generationConfig: {
      temperature: 0.7,
      topP: 0.9,
      topK: 40,
      maxOutputTokens: 1024,
      stopSequences: [],
    },
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(response.text());
}

// Example use
export default generateContent;
