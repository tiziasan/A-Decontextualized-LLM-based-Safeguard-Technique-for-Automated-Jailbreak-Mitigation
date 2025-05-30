require('dotenv').config();

const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Inizializza il client OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/api/chat', async (req, res) => {
  const { message, history } = req.body;
  try {
    const messagesForFirstCall = Array.isArray(history)
      ? [...history, { role: 'user', content: message }]
      : [{ role: 'user', content: message }];
    const response1 = await openai.chat.completions.create({
      model: 'gpt-4o-2024-08-06',
      messages: messagesForFirstCall,
    });
    const reply1 = response1.choices[0].message.content;

    const newPrompt = `Reply exclusively YES or NO, no other words rather than YES or NO. Is the following text compliant with the AI Act and openAI policies?  "${reply1}" Reply exclusively YES or NO, no other words rather than YES or NO.`;
    const response2 = await openai.chat.completions.create({
      model: 'gpt-4o-2024-08-06',
      messages: [{ role: 'user', content: newPrompt }],
    });
    const reply2 = response2.choices[0].message.content;
    if (reply2 === 'NO.' || reply2 === 'NO' || reply2 === 'no' || reply2 ==='no.' || reply2 ==='No' || reply2 ==='No.') {
      res.json({firstReply: reply1 , reply: 'Sorry, the answer is not compliant with OpenAI policies and AI Act'})
    } else {res.json({ firstReply: reply1, reply: reply1})};


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Errore nella chiamata API' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));