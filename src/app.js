import express from 'express';
import { startDatabase } from './database/index.js';

import 'dotenv/config';

import categoryRouter from './routers/category.routes.js';


const app = express();

app.use(express.json());

app.use('/categories', categoryRouter);

app.listen(3005, () => {
	console.log('Server running');
    startDatabase()
});

export default app