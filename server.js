const http   = require('http');
const app    = require('./app');
const port   = process.env.PORT || 3069;
const server = http.createServer(app);
server.listen(port);