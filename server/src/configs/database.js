import mongoose from 'mongoose';
import config from '../configs/env';

const uri = config.databaseURI;

mongoose.connect(uri, { useNewUrlParser: true });

module.exports = mongoose;
