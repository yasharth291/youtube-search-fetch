const express_ = require('express');
const app = express_();
const connectToDatabase = require('./Config/connectToDatabase.js');
var cron = require('node-cron');
const Downloader = require('./Utils/utils');
const logger = require('morgan');

connectToDatabase();

let PORT = process.env['PORT'];

app.use('/api/', require('./Routes/getData'));
app.use(logger('dev'));
app.listen(PORT, () =>
  cron.schedule('*/30 * * * *', () => {
    console.log('hitting');
    // Downloader.Downloader();
  })
);
