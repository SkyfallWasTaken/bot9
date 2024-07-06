const express = require('express');
const { getChatResponse } = require('../services/openai');
const { Conversation } = require('../models');

const router = express.Router();

router.post('/chat', async (req, res) => {
  const { userId, message } = req.body;

  try {
    const response = await getChatResponse(message);
    await Conversation.create({ userId, message, response });

    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process the request' });
  }
});

module.exports = router;
