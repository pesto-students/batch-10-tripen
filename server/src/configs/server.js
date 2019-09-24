import express from 'express';
import env from './env';
import router from '../router'

const app = () => {
    let application;
    const server = express();

    const create = () => {
        server.set('port', env.port);
        server.use(express.json());
        server.use(express.urlencoded({ extended: false }));
        server.use(function(req, res, next){
            res.append('Access-Control-Allow-Origin', ['*']);
            res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.append('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
        server.use('/api', router);
    };

    const start = () => {
        create();
        const port = server.get('port');
        application = server.listen(port, () => {
            console.log(`Tripen server active on port ${port}`);
        });
        server.get('/', (req, res) => res.status(200).json({ 'Status': 'Online'}));
    };

    const stop = () => {
        application.close(() => {
            console.log('Stopping Tripen server');
            process.exit(0);
        });

        setTimeout(() => {
            console.log('Could not stop gracefully, stopping forcefully');
            process.exit(1);
        }, 5000);
    };

    return {
        start,
        stop,
    };
};

export default app;
