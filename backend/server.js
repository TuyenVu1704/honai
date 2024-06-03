import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import router from './src/routes/index.js';
import { connectDB } from './src/config/connectDB.js';
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT_SERVER || 5012;

router(app);
app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on port ${port}`);
});
