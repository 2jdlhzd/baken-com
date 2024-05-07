import { Router } from 'express';
import Usuarios from '@routes/Usuarios.route';
import carritos from '@routes/Carritos.route';
import Productos from '@routes/Productos.route';
import Pagos from '@routes/Pagos.route';
import formadepagos from '@routes/Formadepagos.route';
import { verifyAdmin } from '@middlewares/auth';

const router = Router();

router.use('/usuarios', verifyAdmin,Usuarios);
router.use('/carritos', verifyAdmin, carritos);
router.use('/productos',  Productos);
router.use('/pagos', verifyAdmin, Pagos);
router.use('/Formadepagos', verifyAdmin, formadepagos);
export default router;
