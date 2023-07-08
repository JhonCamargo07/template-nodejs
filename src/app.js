require('colors');
const path = require('path');
const morgan = require('morgan');
const express = require('express');

const app = express();

app.set('appName', 'APP');
app.set('port', process.env.PORT || 64022);
app.set('host', process.env.HOST || '127.0.0.1');

// Settings
app.use(morgan('dev'));
app.use(express.json());

// Midelwares
app.use('/static', express.static(path.join(__dirname, 'public')));

// Routers
app.use(require('./routers/index.router'));

// Server
app.listen(app.get('port'), function () {
	console.log(`App '${app.get('appName')}' running in port ${app.get('port')}`.red);
	console.log(`Go to server: ${app.get('host')}`.blue);
});

module.exports = app;
