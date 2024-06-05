import userRouter from './userRouter.js';
import departmentRouter from './departmentRouter.js';
const router = (app) => {
  // User Router
  app.use('/user', userRouter);

  // Department Router
  app.use('/department', departmentRouter);
};

export default router;
