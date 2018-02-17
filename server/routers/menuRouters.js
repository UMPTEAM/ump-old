import MenuController from '../controllers/menuController'
import KoaRouter from 'koa-router'

const router = KoaRouter();

router.get('/menuList', MenuController.findAll);
router.post('/menu', MenuController.menuAdd);

export default router;
