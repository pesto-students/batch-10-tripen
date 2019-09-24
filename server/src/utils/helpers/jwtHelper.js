import { verify, sign } from 'jsonwebtoken';
import config from '../../configs/env';

const newToken = (user) => sign(user, config.secrets.jwt, {
  expiresIn: config.secrets.jwtExp,
});

const verifyToken = (token) => verify(token, config.secrets.jwt, (err, payload) => {
  if (err) {
    return err;
  }
  return payload;
});

export {
  newToken,
  verifyToken,
};
