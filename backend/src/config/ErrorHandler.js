import { print } from '../helps/print.js';

export default class ErrorHandler extends Error {
  static WRONG_DB_USERNAME_PASSWORD = 'Sai username and password DB';
  static WRONG_DB_SERVER_NAME = 'Sai server name/connection string';
  static WRONG_DB_AUTH = 'khong ket noi mongodb DB Auth';
  static WRONG_DB = 'khong ket noi mongodb DB';
  static ALREADY_EXISTS_EMAIL = 'Email đã tồn tại';
  static ALREADY_EXISTS_PHONE = 'Số điện thoại đã tồn tại';
  static BAD_REQUEST = 'Bad request';
  static CANNOT_REGISTER_USER = 'Tạo user thất bại';

  statusCode = Number;
  constructor({ message, statusCode }) {
    super(message, statusCode); // call constructor of Error class
    print(message, 'ERROR');
  }
}
