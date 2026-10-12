const express = require('express');
const app = express();
const db = require('./config/db');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipe')

app.listen(process.env.PORT, () => {
    console.log('server listening to port 3000');
})

app.use(bodyParser.json());

app.use('/recipe', recipeRoutes);



