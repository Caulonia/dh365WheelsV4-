const userController = {
    registrar: (req, res) =>{
        res.render('users/register');
    },
    crear: (req, res) =>{
        // let usuario = {
        //     nombre: req.body.nombre,//nombre es el imput de form
        //     apellido: req.body.apellido,
        //     correo: req.body.correo,
        //     password: req.body.password,
        // }

        res.send('usuario');
// req.body tiene los datos enviados por post
// cuando viaja info por GET es req.query

    },
    ingresar: (req, res) =>{
        res.render('users/login')
    },
    perfil: (req, res) =>{
        res.render('users/usersDetail')
    },
    editar: (req, res) =>{
        let idUser = req.params.idUser;//para guardar parametro de ruta
        let users = [
            {id:1, nombre: 'Oscar', apellido: 'Alvarez', correo: 'oscar@gmail.com', domicilio: 'Calle 25 Mza 2', celular: 1234514, nacimiento: "02-11-1998"},
            {id:2, nombre: 'Carla', apellido: 'Perez', correo: 'carla@gmail.com', domicilio: 'Calle 26 Mza 2', celular: 12345194},
            {id:3, nombre: 'Beatriz', apellido: 'Garcia', correo: 'bety@gmail.com', domicilio: 'Calle 28 Mza 2', celular: 123453414},
        ]    
        let usersToEdit = users[idUser];
        
    //    res.send(usersToEdit);

         res.render('users/userEdit',{usersToEdit: usersToEdit}); 
    },
}

module.exports = userController;