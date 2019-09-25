import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod;
async function connect() {
    mongod = new MongoMemoryServer();
    const uri = await mongod.getConnectionString();
    await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }, err => {
        console.log(err);
    });
}

async function disconnect() {
    await mongoose.disconnect();
    await mongod.stop();
}

async function cleanup() {
    const collections = await mongoose.connection.db.listCollections();
    return Promise.all(
        collections.toArray((err, collections) => {
            if(err) console.log(err);
            collections.map((c) => mongoose.connection.db.collection(c.name).drop());
        })
    );
}

export default {
    connect,
    disconnect,
    cleanup
}