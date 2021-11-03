const debug = require('debug')('api-face:server');
const http = require('http');
const port = normalizePort(process.env.PORT || '4000');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

if(!process.env.NODE_ENV) {
  process.env.NODE_ENV = "development";
}

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: `${process.env.NODE_ENV}.env` });
}

const indexRouter = require('./routes/index');
const postRouter = require('./routes/post');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/posts', postRouter);

app.use((req, res, next)=> {
  res.json({ status: 404 });
});

app.use((err, req, res, next)=> {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ status: 500, msg: err.message || err || 'Houve um erro' });
});

module.exports = app;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  return isNaN(port) ? val : (port >= 0) ? port : false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
}

  const bind = (typeof port === 'string' ? 'Pipe ' : 'Port ') + port;

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  console.log(`Listening on ${typeof addr === 'string' ? 'pipe ' + addr : 'port'} ${addr.port} - ENV: ${process.env.NODE_ENV}`);
}
