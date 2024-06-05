import HttpStatusCode from '../config/HttpStatusCode.js';
import { createUserService } from '../services/userService.js';
import sendEmail from '../utils/sendEmail.js';
import { userValidation } from '../validations/userValidation.js';

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
  // Validate dữ liệu
  // Kiem tra loi dau vao
  const { error } = userValidation(req.body);

  if (error) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      status: HttpStatusCode.BAD_REQUEST,
      message: error.details[0].message,
    });
  }

  // Tạo user

  try {
    const result = await createUserService(req.body);
    const { firstName, lastName, email, phoneNum, password } = result;

    const data = {
      email,
      template: 'welcomeMessage',
      subject: 'Register an account at honaifurniture',
      firstName,
      password,
      href: 'http://localhost:3000/login',
    };

    const sendEmailLogin = await sendEmail(data);
    return res.status(HttpStatusCode.CREATED_OK).json({
      status: HttpStatusCode.CREATED_OK,
      message: 'Created user successfully',
      data: result,
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
