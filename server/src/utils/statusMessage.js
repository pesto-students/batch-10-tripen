const returnMessage = (info, req, res) => {
  const {
    status, message, ...rest
  } = info;
  const resStatus = status || 200;
  return res
    .status(resStatus)
    .json({
      message,
      ...rest,
      timestamp: new Date(),
    });
};

export default returnMessage;
