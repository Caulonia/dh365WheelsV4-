let products = require('../dataBase/products.json');
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../dataBase/products.json');
const productsJson = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productsController = {

    list: (req, res) => {
        res.render('products/productsList', {'products': products});
    },
    mostrar : ( req , res )  => {
        let  autos  =  require('../dataBase/products.json');
        let  miAuto ;
        autos.forEach ( auto  =>  {
            if ( auto.id  ==  req.params.id ) {
                miAuto  =  auto ;
            }
        } ) ;
        res.render('products/productDetail', {miAuto: miAuto});

    } ,
    carrito: (req, res) =>{
        res.render('products/productCart')
    },
    detalles: (req, res) =>{
        res.render('products/productDetail')
    },
    store: (req, res) =>{
        res.render('products/productStore')
    },
    crear: (req, res) =>{
        res.render('products/productCreate')
    },
    guardarAuto: (req, res) => {
        let autoNuevo = {
            id: req.body.id,
            marca: req.body.marca,
            modelo: req.body.modelo,
            kilometros: req.body.kilometros,
            año: req.body.año,
            color: req.body.color,
            combustible: req.body.combustible,
            motor: req.body.motor,
            precio: req.body.precio,
            imagen: req.body.imagen
        };
        res.redirect('/productos');
    },
    modificar: (req, res)=>{
        const { id } = req.params;
        const miAuto = productsJson.find((prod) => prod.id === id);
        const viewData = {
            miAuto: miAuto,
            
        }; console.log(miAuto);
          return  res.render('products/productModify',viewData);
        
    },
    editar: (req, res) => {
        const indexProduct = products.findIndex(
            (product) => product.id === req.params.id,
        );
        products[indexProduct] = {
            ...products[indexProduct],
            ...req.body,
            ...req.file,
        };
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
        res.redirect('/productos');
    },
    eliminar: (req, res)=>{
        res.render('products/productDelete')
    },
}

module.exports = productsController;