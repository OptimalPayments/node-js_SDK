
/**
 * Module dependencies.
 */
var express = require('express')
  , sampleApiRoutes = require('./sampleApiRoutes')
  , http = require('http');

var app = express();
// all environments
app.set('port', process.env.PORT || 3000);

app.get('/createProfile', sampleApiRoutes.createProfile);
app.get('/createCard', sampleApiRoutes.createCard);
app.get('/silentHosted', sampleApiRoutes.silentHosted);
app.get('/simpleHosted', sampleApiRoutes.simpleHosted);
app.get('/cardPayment', sampleApiRoutes.cardpayment);
app.get('/cardCustomer', sampleApiRoutes.cardCustomer);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
