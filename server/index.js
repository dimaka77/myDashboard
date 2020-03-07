const express = require('express');
const passport = require('passport');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send("It's working"));
app.listen(PORT, () => console.log('HELLO WORLD'));
