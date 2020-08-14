const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
//Shoudn't need this, but better safe than sorry, right?
require('dotenv').config();

