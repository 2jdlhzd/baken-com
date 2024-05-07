import { Router } from 'express';
import Controller from '@controllers/Controller';
import Carritos from '@models/Carrito.models';

const controller = new Controller(Carritos);

const router = Router();
router.post('/crear', controller.insertar);
router.get('/obtener/:usuario_id', (req, res) =>
  controller.obtenerUno(req,res,'usuario_id')
);
router.put('/actualizar/:id', (req, res) =>
  controller.actualizar(req, res, 'id', 'carrito actualizado correctamente')
);
router.delete('/eliminar/:id', (req, res) =>
  controller.eliminar(req, res, 'id')
);

export default router;
