import userRouter from './userRouter.js';
const router = (app) => {
  app.use('/user', userRouter);
};

export default router;
