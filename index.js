const express = require ('express');
const userController = require('./routes/web');
const config = require('./.env');
const app = express();
app.use(express.json());
app.use('/', userController);
//app.use('/tweet', userController);
const options = config[process.env.NODE_ENV];
const _PORT = options.PORT;
app.listen(_PORT);


