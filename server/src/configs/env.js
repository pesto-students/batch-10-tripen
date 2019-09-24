import dotenv from 'dotenv';

dotenv.config();
const configs = {
  port: process.env.PORT || 3030,
  databaseURI: process.env.DATABASE_URI || 'mongodb://localhost:27017/tripen',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  secrets: {
    jwt: process.env.SECRET,
    jwtExp: '5d',
  },
};

export default Object.freeze(configs);
