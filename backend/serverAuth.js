import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import router from './src/routes/index.js';
import { connectDb_Auth } from './src/config/connectDB.js';

// dotenv
dotenv.config();
//Khởi tạo express
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT_SERVER_AUTH || 5013;

app.use('/', router);
app.listen(port, async () => {
  await connectDb_Auth();
  console.log(`Server is running on port ${port}`);
});
