// index.js

import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import cors from 'cors';
import bodyParser from 'body-parser';

// Load env variables
dotenv.config();

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Initialize Gemini AI client
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Test endpoint to verify server is running
app.get('/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

app.post('/generate-report', async (req, res) => {
  console.log('Received request:', req.body);
  
  const { prompt } = req.body;

  if (!prompt) {
    console.error('No prompt provided');
    return res.status(400).json({ error: 'Prompt is required' });
  }

  // Check if API key exists
  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY not found in environment variables');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    console.log('Initializing Gemini model...');
    
    // Get the Gemini model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

    // Create the prompt with system context
    const fullPrompt = `You are a health insight generator for machine health monitoring systems. 
    
User request: ${prompt}

Please provide a detailed, professional analysis.`;

    console.log('Sending request to Gemini...');
    
    // Generate content
    const result = await model.generateContent(fullPrompt);
    const response = await result.response;
    const output = response.text();

    console.log('Response received from Gemini');
    console.log('Output length:', output.length);

    res.json({ report: output });
  } catch (error) {
    console.error('Gemini API error details:');
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Full error:', error);
    
    // Return more detailed error information
    res.status(500).json({ 
      error: 'Failed to generate report',
      details: error.message,
      hint: 'Check server console for detailed error logs'
    });
  }
});

app.listen(port, () => {
  console.log(`PulseLensAgent server running on http://localhost:${port}`);
  console.log(`Test the server at: http://localhost:${port}/test`);
  console.log(`API Key configured: ${process.env.GEMINI_API_KEY ? 'Yes' : 'No'}`);
});