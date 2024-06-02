import { print } from '../helps/print';

export default class ErrorHandler extends Error {
  static WRONG_DB_USERNAME_PASSWORD = 'Sai username and password DB';
  static WRONG_DB_SERVER_NAME = 'Sai server name/connection string';
  static WRONG_DB_AUTH = 'khong ket noi mongodb DB Auth';
  static WRONG_DB = 'khong ket noi mongodb DB';
  static BAD_REQUEST = 'Bad request';
  constructor({ message, statusCode }) {
    super(message, statusCode); // call constructor of Error class
    print(message, 'ERROR');
  }
}

export class AuthError extends ErrorHandler {
  fields = [];
  statusCode = 401;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class NotFoundError extends ErrorHandler {
  fields = [];
  statusCode = 404;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class BadRequestError extends ErrorHandler {
  fields = [];
  statusCode = 400;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class ForbiddenError extends ErrorHandler {
  fields = [];
  statusCode = 403;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class AlreadyExistsError extends ErrorHandler {
  fields = [];
  statusCode = 409;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class InternalServerError extends ErrorHandler {
  fields = [];
  statusCode = 500;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class ServiceUnavailableError extends ErrorHandler {
  fields = [];
  statusCode = 503;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}

export class RequiredFieldError extends ErrorHandler {
  fields = [];
  statusCode = 1000;
  constructor({ message, statusCode }) {
    super(message, statusCode);
  }
}
