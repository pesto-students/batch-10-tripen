import mongoose from 'mongoose';
import config from './env';

const uri = config.databaseURI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

export default mongoose;
