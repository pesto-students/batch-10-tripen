const errorHandler = (err, req, res) => {
  const {
    error, message, status, ...rest
  } = err;
  const resStatus = status || 500;
  return res
    .status(resStatus)
    .json({
      success: false,
      error: error || 'Some error occured',
      message: message || err,
      ...rest,
      timestamp: new Date(),
    });
};

export default errorHandler;
