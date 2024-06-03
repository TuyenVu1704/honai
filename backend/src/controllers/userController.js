import ErrorHandler from '../config/ErrorHandler.js';
import HttpStatusCode from '../config/HttpStatusCode.js';
import { validateRequiredInput } from '../utils/index.js';
import { regexEmail, regexPhone } from '../utils/regex.js';
import { createUserService } from '../services/userService.js';
import sendEmail from '../utils/sendEmail.js';

// Tạo user
/**
 * Các trường dữ liệu cần nhập:
 * - firstName
 * - lastName
 * - email
 * - phoneNum
 * Password sẽ được tạo ngẫu nhiên
 *
 */
const createUser = async (req, res) => {
  const { email, phoneNum } = req.body;

  // Kiểm tra email, phoneNum
  const isCheckEmail = regexEmail.test(email);
  const isCheckPhoneNum = regexPhone.test(phoneNum);
  // Kiểm tra các trường bắt buộc
  const requiredFields = validateRequiredInput(req.body, [
    'firstName',
    'lastName',
    'email',
    'phoneNum',
  ]);
  console.log(requiredFields);
  if (requiredFields?.length) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      status: ErrorHandler.BAD_REQUEST,
      message: `Thiếu trường bắt buộc ${requiredFields.join(', ')}`,
    });
  } else if (!isCheckEmail) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      status: ErrorHandler.BAD_REQUEST,
      message: 'Email không hợp lệ',
    });
  } else if (!isCheckPhoneNum) {
    return res.status(BadRequestError.statusCode).json({
      status: ErrorHandler.BAD_REQUEST,
      message: 'Số điện thoại không hợp lệ',
    });
  }
  // Tạo user

  try {
    const result = await createUserService(req.body);
    const { firstName, lastName, email, phoneNum, password } = result;

    const emailHtml = render(EmailLogin);
    const data = {
      email,
      emailHtml,
      subject: 'Email Login',
      text: 'Email Login',
    };

    const sendEmailLogin = await sendEmail(data);
    return res.status(HttpStatusCode.CREATED_OK).json({
      status: HttpStatusCode.CREATED_OK,
      message: 'Tạo user thành công',
      data: { firstName, lastName, email, phoneNum, password },
      sendEmailLogin,
    });
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};
// Lấy tất cả user
// Lấy user theo id
// Cập nhật user theo id
// Cập nhật toàn bộ user theo id
// Xóa nhiều user theo id
// Xóa user theo id
// Thay đổi mật khẩu
// Tìm kiếm user theo email, tên, số điện thoại, groupRole,

export { createUser };
