import apiRoutes from './api';
import routeStatus from '../middlewares/printRoute';

const init = (server) => {
  server.use(
    '/api',
    routeStatus,
    apiRoutes,
  );
};


const routes = {
  init,
};

export default routes;
