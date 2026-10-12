const mongoose = require('mongoose');

require('dotenv').config();
const mongoURL = `${process.env.MONGOURL_LOCAL}`;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', ()=> console.log('db server connected'));
db.on('err', (err) => console.log(err));
db.on('disconnected', ()=> console.log('db server disconnected'));

module.exports = db;


