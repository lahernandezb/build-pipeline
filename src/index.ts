import express from 'express';
import logger from './logger';

const app = express();
logger();
app.listen(4000, () => {});
