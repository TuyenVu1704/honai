import bcrypt from 'bcrypt';

// Salt rounds for bcrypt
const salt = 10;
// Mã hóa mật khẩu
export const hashPassword = async (password) => bcrypt.hash(password, salt);

// So sánh mật khẩu
export const comparePassword = async (password, hash) =>
  bcrypt.compare(password, hash);
