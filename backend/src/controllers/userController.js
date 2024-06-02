import { BadRequestError } from '../config/ErrorHandler.js';
import { validateRequiredInput } from '../utils/index.js';
import { regexEmail, regexPhone } from '../utils/regex.js';

// Tạo user
const createUser = async (req, res) => {
  try {
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
      'password',
    ]);
    if (requiredFields) {
      return res.status(BadRequestError.statusCode).json({
        status: BadRequestError.statusCode,
        typeError: BadRequestError.BAD_REQUEST,
        message: `Thiếu trường bắt buộc ${requiredFields.join(', ')}`,
      });
    } else if (!isCheckEmail) {
      return res.status(BadRequestError.statusCode).json({
        status: BadRequestError.statusCode,
        typeError: BadRequestError.BAD_REQUEST,
        message: 'Email không hợp lệ',
      });
    } else if (!isCheckPhoneNum) {
      return res.status(BadRequestError.statusCode).json({
        status: BadRequestError.statusCode,
        typeError: BadRequestError.BAD_REQUEST,
        message: 'Số điện thoại không hợp lệ',
      });
    }
    // Tạo user
    const result = await userService.createUser(req.body);
  } catch (error) {}
};
// Lấy tất cả user
// Lấy user theo id
// Cập nhật user theo id
// Cập nhật toàn bộ user theo id
// Xóa nhiều user theo id
// Xóa user theo id
// Thay đổi mật khẩu
// Tìm kiếm user theo email, tên, số điện thoại, groupRole,
