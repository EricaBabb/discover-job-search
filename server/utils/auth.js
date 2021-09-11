const jwt = require('jsonwebtoken');

//Secret allows server to verify
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // Function for our authenticated routes
  authMiddleware: function({ req, res, next }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token
        .split(' ').pop().trim();
    }

    // IF no token, return request object as is
    if (!token) {
      return res.status(400).json({ message: 'You have no token!' });
    }
    // Verify the token and get the user data
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      return res.status(400).json({ message: 'invalid token!' });
    }

    // Send to end/break
    next();
  },
  signToken: function({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
}; 