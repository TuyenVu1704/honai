import ErrorHandler from '../config/ErrorHandler.js';
import { Department } from '../models/Department.js';
import HttpStatusCode from '../config/HttpStatusCode.js';

// Create a new department
const createDepartmentService = async (department) => {
  try {
    const { departCode, description } = department;
    // Convert department code to lowercase and remove all spaces
    const departCodeToLower = departCode.toLowerCase().replace(/\s+/g, '');
    const descriptionToUpper = description.toUpperCase();
    // Check if department already exists
    const existedDepartment = await Department.findOne({
      departCode: departCodeToLower,
    });
    if (existedDepartment) {
      throw new ErrorHandler({
        message: ErrorHandler.ALREADY_EXISTS_DEPARTMENT_CODE,
        statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
      });
    }
    // Create a new department
    const newDepartment = await Department.create({
      departCode: departCodeToLower,
      description: descriptionToUpper,
    });
    return newDepartment;
  } catch (error) {
    throw new ErrorHandler({
      message: error.message
        ? error.message
        : ErrorHandler.CANNOT_CREATE_DEPARTMENT,
      statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
    });
  }
};

export { createDepartmentService };
