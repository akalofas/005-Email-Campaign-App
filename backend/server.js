const https = require('https');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dbConnect = require('./utils/dbConnect');
const routes = require('./routes');

const app = express();
dbConnect().catch(console.dir);

app.use(cors({ credentials: true, origin: `${process.env.FRONT_URL}:${process.env.FRONT_URL}` }));
app.use(express.json());
app.use(cookieParser());
app.use('/api', routes);

const sslServer = https.createServer(
	{
		key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
		cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
	},
	app
);

const PORT = process.env.SERVER_PORT || 443;

sslServer.listen(PORT, () => console.log(`Secure server on https ${PORT}`));
