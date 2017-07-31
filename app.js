var express = require("express")
var app = express()
var useragent = require("express-useragent")
const PORT = 3000
var api = '/api/whoami'

app.use(useragent.express())

app.get('/', function (req, res) {
  res.redirect(api);
});

app.get(api, function(req, res) {
  var ip = req.ip;
  var language = req.acceptsLanguages()
  var software = "os: " + req.useragent.os + ", browser: " + req.useragent.browser

  res.json({
    'ipaddress': ip,
    'language': language,
    'software': software
  });


})


app.listen(PORT, function() {
  console.log('server listen in port ' + PORT)
})
