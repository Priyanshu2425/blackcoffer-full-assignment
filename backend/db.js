const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI).then((data)=>{
    console.log('Connected to MONGODB');
}).catch((err)=>{
    console.log('Error connecting to MONGODB\n'+err);
})

const jsondata = mongoose.Schema({
  "end_year": Number,
  "intensity": Number,
  "sector": String,
  "topic": String,
  "insight": String,
  "url": String,
  "region": String,
  "start_year": String,
  "impact": Number,
  "added": String,
  "published": String,
  "country": String,
  "relevance": Number,
  "pestle": String,
  "source": String,
  "title": String,
  "likelihood": Number
}, {collection: 'jsondata'});

const JSONDATA = mongoose.model('jsondata', jsondata);

module.exports = {
    JSONDATA
}