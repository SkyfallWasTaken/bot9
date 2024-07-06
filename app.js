const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const { sequelize } = require('./models');
const chatRoutes = require('./routes/chat');

app.use(bodyParser.json());
app.use('/api', chatRoutes);
app.use(express.static('public'));

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
