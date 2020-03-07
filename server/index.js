const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('connected');
});
app.use(
  session({ secret: 'dashboarapp', saveUninitialized: true, resave: true })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./models/User');
require('./services/passport')(passport);
require('./routes/index')(app, passport);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
