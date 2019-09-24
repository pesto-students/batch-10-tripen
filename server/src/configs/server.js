import express from 'express';
import env from './env';
import routes from '../routes';

const app = () => {
  let application;
  const server = express();

  const create = () => {
    server.set('port', env.port);
    server.use(express.json());
    server.use(express.urlencoded({ extended: false }));
    routes.init(server);
    return server;
  };

  const start = () => {
    const port = server.get('port');
    application = server.listen(port, () => {
      console.debug(`Tripen server active on port ${port}`);
    });
  };

  const stop = () => {
    application.close(() => {
      console.debug('Stopping Tripen server');
      process.exit(0);
    });

    setTimeout(() => {
      console.debug('Could not stop gracefully, stopping forcefully');
      process.exit(1);
    }, 5000);
  };

  return {
    create,
    start,
    stop,
  };
};

export default app;
