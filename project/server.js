const express = require('express');
const app = express();
const path = require('path');

let clickCount = 0;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/increment_click', (req, res) => {
    clickCount++;
    res.redirect('/');
});

app.get('/click_count', (req, res) => {
    res.json({ clickCount });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
