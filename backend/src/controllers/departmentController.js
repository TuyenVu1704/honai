import { departmentValidation } from '../validations/departmentValidation.js';
import HttpStatusCode from '../config/HttpStatusCode.js';
import { createDepartmentService } from '../services/departmentService.js';
//Tạo Phòng ban mới
//Kiem tra loi dau vao

const createDepartment = async (req, res) => {
  const { departCode, description } = req.body;
  const { error } = departmentValidation(req.body);
  if (error) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      status: HttpStatusCode.BAD_REQUEST,
      message: error.details[0].message,
    });
  }
  try {
    const result = await createDepartmentService(req.body);
    res.status(HttpStatusCode.OK).json({
      status: HttpStatusCode.OK,
      message: 'Create department successfully',
      data: result,
    });
  } catch (error) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      status: HttpStatusCode.INTERNAL_SERVER_ERROR,
      message: error.message,
    });
  }
};

// Cập nhật phòng ban theo id
// Cập nhật toàn bộ phòng ban theo id
// Xóa nhiều phòng ban theo id
// Xóa phòng ban theo id
// Lấy tất cả phòng ban
// Lấy phòng ban theo id

export { createDepartment };
