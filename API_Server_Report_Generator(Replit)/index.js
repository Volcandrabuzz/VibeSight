// index.js

import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';

// Load env variables
dotenv.config();

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini Client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/generate-report', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Path to graph.png inside same folder as index.js
    const imagePath = path.join(process.cwd(), 'image.jpg');

    // Read & encode image
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');

    // Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

    // Send text + image
    const result = await model.generateContent([
      {
        text: `You are a machine health monitoring insight generator.
The graph image attached shows machine performance data.
User Request: ${prompt}
Generate a detailed technical report based on BOTH the image and the user request.`
      },
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: base64Image
        }
      }
    ]);

    const output = result.response.text();
    res.json({ report: output });

  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({
      error: 'Failed to generate report',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running → http://localhost:${port}`);
});
