// const jwt = require('jsonwebtoken'); 

// module.exports = (req, res, next) => { 
//     try { 
//         const token = req.headers.authorization.split(' ')[1]; 
//         const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET'); 
//         const userId = decodedToken.userId; 
//         if (req.body.userId && req.body.userId !== userId) { 
//             throw 'Invalid user ID'; 
//         } 
//         else { 
//             next(); 
//         } 
//     } 
//     catch { 
//         res.status(401).json({ error: new Error('Invalid request!') }); 
//     } 
// };
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const Auth = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1]

      // Verify token
      const decoded = jwt.verify(token,'RANDOM_TOKEN_SECRET')

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

module.exports = { Auth }