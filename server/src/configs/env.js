import dotenv from 'dotenv';

dotenv.config();
const configs = {
  port: process.env.PORT || 3030,
  databaseURI: 'mongodb://hackathon:hackathon1@ds015750.mlab.com:15750/tripen' || 'mongodb://localhost:27017/tripen',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
};

export default Object.freeze(configs);