import chalk from 'chalk';
class OutPutType {
  static INFO = 'INFO';
  static WARN = 'WARN';
  static ERROR = 'ERROR';
  static SUCCESS = 'SUCCESS';
  static DEBUG = 'DEBUG';
}
const print = (message, outPutType) => {
  switch (outPutType) {
    case OutPutType.INFO:
      console.log(chalk.white(message));
      break;
    case OutPutType.WARN:
      console.log(chalk.yellow(message));
      break;
    case OutPutType.ERROR:
      console.log(chalk.red(message));
      break;
    case OutPutType.SUCCESS:
      console.log(chalk.green(message));
      break;
    case OutPutType.DEBUG:
      console.log(chalk.blue(message));
      break;
    default:
      console.log(chalk.white(message));
      break;
  }
};

export { print, OutPutType };
