var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

/*=============================================
JWT CONFIGURATION
=============================================*/

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 50,
        jwksUri: 'https://ordersmanager.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3001',
  issuer: 'https://ordersmanager.us.auth0.com/',
  algorithms: ['RS256']
  });

  module.exports= {
      jwtCheck
  }