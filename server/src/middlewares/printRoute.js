const printRoute = (req, res, next) => {
  console.log(`request received for ${req.method} ${req.originalUrl}`);
  next();
};

export default printRoute;
