const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
let fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '../../public/images/users'));
    },
    filename: (req, file, cb) => {
        cb(null, 'user-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const usersController = require('../controllers/usersController');


router.get('/registrar', usersController.registrar);
router.post('/registrar', usersController.crear);
router.get('/ingresar', usersController.ingresar);
router.get('/perfil', usersController.perfil);
router.get('/editar/:idUser', usersController.editar);
router.put('/editar',function(req, res){
    res.send('Falta vista de PUT');
})


module.exports = router;