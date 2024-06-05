import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './src/routes/index.js';
import { print } from './src/helps/print.js';
import { DbAuth, DbUser } from './src/config/connectMultiDBMongo.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = process.env.PORT_SERVER || 5012;
try {
  DbAuth;
  DbUser;
} catch (error) {
  print(error, 'ERROR');
}
router(app);
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});
