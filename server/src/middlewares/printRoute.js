const printRoute = (req, res, next) => {
  console.debug(`request received for ${req.method} ${req.originalUrl}`);
  next();
};

export default printRoute;
