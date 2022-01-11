const express = require('express');
let router = express.Router();

const upload = require('../Middlewares/uploadProduct');
const validationCreate = require('../Middlewares/createProduct');

const productsController = require('../controllers/productsController');


router.get('/', productsController.list);
router.post('/',upload.single('image'),validationCreate, productsController.save);
//router.get('/detalles', productsController.detail);
router.get('/carrito', productsController.cart);
router.get('/crear', productsController.crear);
router.get('/:id/modificar', productsController.modificar);
router.put('/:id/actualizar', productsController.update);
router.get('/:id/eliminar', productsController.eliminar);
router.delete('/:id/destruir', productsController.destroy);
router.get('/:id', productsController.show);


module.exports = router;