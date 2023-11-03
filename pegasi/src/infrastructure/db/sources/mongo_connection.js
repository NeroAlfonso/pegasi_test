const mongoose = require('mongoose');
const uri =process.env.MONGO_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, dbName: 'pegasi_db'});
const connection = mongoose.connection;
module.exports =connection;