import express from 'express';
import cors from 'cors';

import './database';
import routes from './routes';

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen('8080');
