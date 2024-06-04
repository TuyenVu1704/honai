import ErrorHandler from '../config/ErrorHandler.js';
import HttpStatusCode from '../config/HttpStatusCode.js';
import User from '../models/User.js';

// Create a new user
const createUserService = async (user) => {
  try {
    const { email, phoneNum } = user;
    // Kiểm tra xem user đã tồn tại chưa
    const emailTolower = email.toLowerCase();
    const exitedUserEmail = await User.findOne({ email: emailTolower });
    const exitedUserPhoneNum = await User.findOne({ phoneNum });
    if (exitedUserEmail) {
      throw new ErrorHandler({
        message: ErrorHandler.ALREADY_EXISTS_EMAIL,
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      });
    }
    if (exitedUserPhoneNum) {
      throw new ErrorHandler({
        message: ErrorHandler.ALREADY_EXISTS_PHONE,
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      });
    }
    // Tạo password Random
    const passwordRandom = Math.random().toString(36).slice(-6);
    // Tạo user mới
    const newUser = await User.create({
      ...user,
      email: emailTolower,
      password: passwordRandom,
    });
    return newUser;
  } catch (error) {
    throw new ErrorHandler({
      message: error.message
        ? error.message
        : ErrorHandler.CANNOT_REGISTER_USER,
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    });
  }
};

export { createUserService };
