import * as Express from 'express';
const router = Express.Router();

router.get('/login', (req: any, res: any) => {
  res.render('admin/login');
});

router.get('/update', (req: any, res: any) => {
  res.render('admin/setting');
});

router.get('/users', (req: any, res: any) => {
  res.render('admin/back-user');
});

router.get('/sites', (req: any, res: any) => {
  res.render('admin/back-count');
});
/**
 * 文件分类
 */
router.get('/file/category', (req: any, res: any) => {
  res.render('admin/back-file-category');
});

export default router;
