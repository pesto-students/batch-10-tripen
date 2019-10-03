import { verify, sign } from 'jsonwebtoken';
import config from '../../configs/env';
import errorMessage from '../errorMessage';

const newToken = (user) => sign(user, config.secrets.jwt, {
  expiresIn: config.secrets.jwtExp,
});

const verifyToken = (token) => verify(token, config.secrets.jwt);


const extractTokenFromHeader = (bearerToken, req, res) => {
  if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
    return errorMessage({
      status: 401,
      message: 'Bearer Token missing',
    }, req, res);
  }

  const extractedToken = bearerToken.split('Bearer ')[1].trim();

  try {
    const payload = verifyToken(extractedToken);
    return payload;
  } catch (error) {
    return errorMessage({
      status: 401,
      error: error.message,
      message: 'unable to verify token',
    }, req, res);
  }
};

export {
  newToken,
  verifyToken,
  extractTokenFromHeader,
};
