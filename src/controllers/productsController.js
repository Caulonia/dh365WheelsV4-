const path = require('path');
const fs = require('fs');

const products = path.join(__dirname, '../dataBase/products.json');
const autos = JSON.parse(fs.readFileSync(products, 'utf-8'));


const productsController = {

    list: (req, res) => {

        res.render('products/productsList', {autos});
    },
    show : ( req , res )  => {
        let  miAuto ;
        autos.forEach ( auto  =>  {
            if ( auto.id  ==  req.params.id ) {
                miAuto  =  auto ;
            }
        } ) ;
        res.render('products/productDetail', {miAuto: miAuto});

    } ,
    /*detail: (req, res) => {
        res.render('products/productDetail')
    },*/
    cart: (req, res) => {
        res.render('products/productCart')
    },
    crear: (req, res) =>{
        res.render('products/productCreate');
    },
    save: (req, res) => {
        const productCreate = req.body;
        const imageUpLoad = req.file;
        let ultimoAuto = autos.pop();
        autos.push(ultimoAuto);
        let autoNuevo = {
            id: ultimoAuto.id +1,
            marca: productCreate.marca,
            modelo: productCreate.modelo,
            kilometros: productCreate.kilometros,
            año: productCreate.año,
            color: productCreate.color,
            combustible: productCreate.combustible,
            motor: productCreate.motor,
            precio: productCreate.precio,
            imagen: imageUpLoad.filename,
        };
        autos.push(autoNuevo);
        let autoNuevoGuardar = JSON.stringify(autos,null,2);
        fs.writeFileSync(path.resolve(__dirname,'../dataBase/products.json'), autoNuevoGuardar);
        res.redirect('/productos');
    },
    modificar: (req, res)=>{
        const idAuto = req.params.id;
        let miAuto = autos.find(auto=> auto.id == idAuto);
        if(miAuto){
            res.render('products/productModify', {miAuto});  
        }else{
            res.render('main/not-found');
        };
    },
    update: (req, res) => {
        console.log('update');
        const productEdit = req.body;
        req.body.id = req.params.id;
        console.log(productEdit);
        req.body.imagen = req.file ? req.file.filename : req.body.oldImagen;
        let autosEditar = autos.map(auto =>{
            if(auto.id == req.body.id){
                return auto = productEdit;   
            } console.log(productEdit)
            return auto;
            //acá solo esta tomando el id del body, 
            
        }); 
        //autosEditar.push(productEdit);
       
        let autoActualizar = JSON.stringify(autosEditar, null, 2);
        console.log(autoActualizar);
        fs.writeFileSync(path.resolve(__dirname,'../dataBase/products.json'),autoActualizar);
        res.redirect('/productos');
    },
    eliminar: (req, res)=>{
        const idAuto = req.params.id;
        let miAuto = autos.find(auto=> auto.id == idAuto);
        if(miAuto){
            res.render('products/productDelete', {miAuto});  
        }else{
            res.render('main/not-found');
        };
        
    },
    destroy: (req,res) =>{
        const autoDeleteId = req.params.id;
        const autosFinal = autos.filter(auto => auto.id != autoDeleteId);
        let autoGuardar = JSON.stringify(autosFinal,null,2)
        fs.writeFileSync(path.resolve(__dirname, '../dataBase/products.json'),autoGuardar);
       res.redirect('/productos');
    }
}

module.exports = productsController;