import { print } from '../helps/print.js';

export default class ErrorHandler extends Error {
  static WRONG_DB_USERNAME_PASSWORD = 'Invalid username or password DB';
  static WRONG_DB_SERVER_NAME = 'Wrong server name/connection string';
  static ALREADY_EXISTS_EMAIL = 'Email already exists';
  static ALREADY_EXISTS_PHONE = 'PhoneNumber already exists';
  static BAD_REQUEST = 'Bad request';
  static CANNOT_REGISTER_USER = 'Cannot register user failed';
  static INTERNAL_SERVER_ERROR = 'Internal server error';
  // Department
  static CANNOT_CREATE_DEPARTMENT = 'Cannot create department';
  static ALREADY_EXISTS_DEPARTMENT_CODE = 'Department code already exists';
  statusCode = Number;
  constructor({ message, statusCode }) {
    super(message, statusCode); // call constructor of Error class
    print(message, 'ERROR');
  }
}
