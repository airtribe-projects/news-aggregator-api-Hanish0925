const jwt = require('jsonwebtoken');
const JWT_SECRET = 'jwt_secret';

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  console.log('Authorization Header:', authHeader); 

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error('Authorization header missing or invalid');
    return res.status(401).send('Access Denied. No token provided');
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log('Decoded Token:', decoded); 
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token Verification Error:', error.message); 
    res.status(400).send('Invalid token');
  }
};

module.exports = authMiddleware;
