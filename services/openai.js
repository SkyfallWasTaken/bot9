const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getChatResponse(prompt) {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt,
      max_tokens: 150,
    });
    return response.choices[0].text.trim();
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw error;
  }
}

module.exports = { getChatResponse };
