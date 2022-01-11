const path = require('path');
const { body } = require('express-validator');

// validación
const validationCreate = [
    body('color').notEmpty().withMessage('Ingresá un color')
    .isLength({ min: 3 }).withMessage('El color debe contener al menos 3 caracteres'),
    body('precio').notEmpty().withMessage('Ingresá un precio para el producto').bail()
    .custom((value, { req }) => req.body.precio > 0).withMessage("El precio debe ser mayor a 0"),
    body('kilometros').notEmpty().withMessage('Ingresá los kilometros'),
    body('marca').notEmpty().withMessage('Ingresá una marca')
    .isLength({ min: 2 }).withMessage('La marca debe contener al menos 2 caracteres'),
    body('modelo').notEmpty().withMessage('Ingresá un modelo')
    .isLength({ min: 2 }).withMessage('El modelo debe contener al menos 2 caracteres'),
    body('imagen').custom((value, { req }) => {
        const { file } = req;
        const acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
        if (!file) {
            throw new Error('Tienes que subir una imagen');
        } else {
            const fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(
                    `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
                  ','
                )}`
                );
            }
        }
        return true
    })

];

module.exports = validationCreate;