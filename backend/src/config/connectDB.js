import mongoose from 'mongoose';
import { print } from '../helps/print.js';
import ErrorHandler from './ErrorHandler.js';

export const connectDb_Auth = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URL_AUTH);
    print('Đã kết nối tới database Auth thành công', 'SUCCESS');
    return connection;
  } catch (error) {
    //debugger;
    // lấy code ra khi kiểm tra debug phát hiện
    //repl
    // Object.keys(error)

    const { code } = error;
    if (code == 8000) {
      throw new ErrorHandler(ErrorHandler.WRONG_DB_USERNAME_PASSWORD, 'ERROR');
    } else if (code == 'ENODATA') {
      throw new ErrorHandler(ErrorHandler.WRONG_DB_SERVER_NAME, 'ERROR');
    }
    throw new ErrorHandler(ErrorHandler.WRONG_DB_AUTH, 'ERROR');
  }
};

export const connectDB = async () => {
  try {
    let connection = await mongoose.connect(process.env.MONGODB_URL);
    print('Đã kết nối tới database thành công', 'SUCCESS');
    return connection;
  } catch (error) {
    //debugger;
    // lấy code ra khi kiểm tra debug phát hiện
    //repl
    // Object.keys(error)
    // debugger;
    const { code } = error;

    if (code == 8000) {
      throw new ErrorHandler(ErrorHandler.WRONG_DB_USERNAME_PASSWORD, 'ERROR');
    } else if (code === 'ENODATA') {
      throw new ErrorHandler(ErrorHandler.WRONG_DB_SERVER_NAME, 'ERROR');
    }
    throw new ErrorHandler(ErrorHandler.WRONG_DB, 'ERROR');
  }
};
