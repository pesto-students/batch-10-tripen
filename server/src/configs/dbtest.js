import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 130000;

let mongod;
async function connect() {
  mongod = new MongoMemoryServer();
  const uri = await mongod.getConnectionString();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoReconnect: true,
    reconnectTries: 10,
    reconnectInterval: 1000,
    poolSize: 10,
    useFindAndModify: false,
    useCreateIndex: true,
  }, (err) => {
    if (err) console.log(err);
  });
}

async function disconnect() {
  await mongoose.disconnect();
  await mongod.stop();
}

async function cleanup() {
  const collections = await mongoose.connection.db.listCollections().toArray();
  const promises = await Promise.all(
    collections
      .map(({ name }) => name)
      .map((collection) => mongoose.connection.db.collection(collection).drop()),
  );
  return promises;
}

export default {
  connect,
  disconnect,
  cleanup,
};
