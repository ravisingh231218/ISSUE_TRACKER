
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://ravibaba4199:Ravi7277@cluster0.gbdlpmf.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database');
});

module.exports = db;
