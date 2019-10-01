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


const extractTokenFromHeader = (token, req, res) => {
  const bearer = token;

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return res.status(401).end();
  }

  const extractedToken = bearer.split('Bearer ')[1].trim();
  try {
    const payload = verifyToken(extractedToken);
    return payload;
  } catch (error) {
    return res.status(401).end();
  }
};

export {
  newToken,
  verifyToken,
  extractTokenFromHeader,
};
