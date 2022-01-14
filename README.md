# Comenzando | 🚀

El mismo apuntará a dar una copia del proyecto en funcionamiento, describirá la lógica del mismo. Basado en proyectos similares, adecuado a la realidad requerida. Utilizando lo impartido a lo largo del curso, aplicando todas las tecnologías necesarias. 


------------


# Integrantes | 👨‍💻

👨‍ Martin Martincorena, Uruguayo de Paysandú estudiante de UTEC en la carrera LTI (Licenciatura en Tecnología de la Información). Hincha de Peñarol en su tiempo libre le gusta ir al gym.

👴 Enrique Martínez, Argentino de Córdoba y Lic. en Adm. de Empresa. Actualmente trabajando en la industria del cemento y agregados como Analista de Procesos Logísticos SAP SD. Hincha de River Plate y gran aficionado del Voley. En sus tiempos libre disfruta en familia, amigos, haciendo deportes en equipo(tercer tiempo lo mejor!!) y viajando. 

🧙‍ Willy Romero, Uruguayo edad 31 estudiante de UTEC en la carrera LTI (Licenciatura en Tecnología de la información). Gran fanático de Star Wars y de Game of Thrones, en sus tiempos libres le gusta andar en bicicleta. 

👨‍🦱 Emidio Tassone, Italiano edad 34 años estudiante de UTEC en la carrera LTI (Licenciatura en Tecnología de la Información). Hincha del Bolso (Club Nacional de Footbal), en sus tiempos libres le gusta ir a la cancha.


 ------------
 
 # Descripción general | 📚

E-Commerce orientado a un público selecto, el cual es consumidor de vehículos de alta gama. 365 Wheels es una empresa que se dedica a la compra y venta de autos nuevos y usados, trabajamos con todas las marcas y modelos. ¡Si lo pide, 365 Wheels lo consigue!

![image](https://user-images.githubusercontent.com/18647088/148680318-9169bfdb-4351-42d3-ac04-d45cdf0e5199.png)


------------


 ## Sitios de referencia | 📃 

| Empresa | Página |
| ------ | ------ |
| Toyota | https://www.toyota.com |
| Volkswagen | https://www.vw.com|
| Ferrari | https://www.ferrari.com |
| Lamborghini | https://www.lamborghini.com |
| Tesla | https://www.tesla.com |


------------
 
 
# Software utilizado | 📋

### Front End	
| Software | Descripción |
| ------ | ------ |
| **HTML** | Lenguaje de marcado para la elaboración de páginas web. |
| **CSS** |  Lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado. |
| **JavaScript** | Lenguaje de programación interpretado, dialecto del estándar ECMAScript. |
| **EJS** | Motores de visualización de plantillas más populares para Node.js y Express.js. | 


### Back End
| Software | Descripción |
| ------ | ------ |
| **Node.js** | Entorno en tiempo de ejecución multiplataforma, para la capa del servidor basado en JavaScript. |
| **Express** | Marco de aplicación web de back-end para Node.js. | 
| **JSON** | Formato de texto sencillo para el intercambio de datos. |
| **MySQL** | Sistema de gestión de bases de datos relacional. |


### Otros
| Software | Descripción |
| ------ | ------ |
| **Visual Studio** | Editor de código fuente. |
| **React** | Biblioteca Javascript, diseñado para crear interfaces de usuario. |
| **Multer** | Middleware para Express, el cual se encarga de la gestión de subida de archivos. |
| **GitHub** | Forja para alojar proyectos utilizando el sistema de control de versiones Git |
| **Heroku** | Plataforma como servicio de computación en la Nube |		
	
	
------------


# Desarrollo | 🛠️

A continuación se detallarán los sprints y en que consiste cada uno de ellos

![image](https://user-images.githubusercontent.com/18647088/148680334-80f6ebe5-7b97-45bf-9c8c-a742fed68f82.png)


------------

## Sprint 1 - Introducción y wireframing
El origen del proyecto. Donde deben elegir la temática del sitio y que presentar un boceto gráfico de las principales secciones a implementar, antes de comenzar con el proceso de desarrollo.

#### URL del repositorio con todos los colaboradores agregados
#### Wireframe de las siguientes páginas
	Home
	Detalle de producto
	Carrito de compras
	Formulario de registro
	Formulario de login
#### Boceto o diseño gráfico del sitio (logo, colores, tipografías, etc) (Opcional)


## Sprint 2 - HTML + CSS
En esta etapa les pedimos que comiencen a escribir HTML y CSS. Con estas dos herramientas les pedimos que les den “vida” a los bocetos que prepararon en el primer sprint.

#### Aplicación Node + Express con:
	Home (index.html)
	Detalle del producto (productDetail.html)
	Carrito de compras (productCart.html)
	Formulario de registro (register.html)
	Formulario de login (login.html)
	

## Sprint 3 - Template Engines
Tiempo de agregar algo de dinamismo a su web y empezar a reutilizar todos aquellos componentes que se comparten como: el header, el footer, la navegación y los productos.

#### Aplicación Node + Express + EJS con:
	Archivos parciales (head, header, footer, etc…)
	Home
	Listado de productos
	Detalle del producto
	Carrito de productos
	Formulario de registro y login
#### Formulario de carga y edición de productos


## Sprint 4 - JSON + Métodos HTTP
Nos toca ahora lograr que el sitio comience a cobrar vida haciendo que todos esos formularios y acciones trabajen con productos y usuarios reales almacenados en formato JSON.

#### Archivos products.json y users.json con datos de productos y usuarios
#### Administración completa de productos con:
	Listado
	Detalle
	Creación
	Edición
	Eliminación


## Sprint 5 - Middlewares y autenticación
Nos enfocamos en los usuarios, en esta etapa generamos el registro, el login, el perfil y además trabajamos en las rutas a las cuales podrán acceder nuestros huéspedes (los visitantes que no hicieron login) y otras para los usuarios con login.

#### Formulario de registro con:
	Los campos mínimos mencionados en el sprint anterior
	Subida de una imagen de perfil
	Guardado en JSON con encriptación de contraseña
#### Formulario de login con:
	Campos de email y password
	Función de recordar al usuario (Opcional)
#### Rutas de huéspedes y usuarios
	Las de huéspedes deberán redireccionar al perfil si el usuario está logeado
	Las de usuarios deberán redireccionar al login si el usuario no está logeado


## Sprint 6 - Bases de datos
Dejamos atrás JSON para pasar a algo más profesional que escale mejor. En este sprint estaremos trabajando con MySQL por un lado y Sequelize por el otro.

#### Diagrama de base de datos
#### Script de creación de estructura de base de datos con:
	Creación de la base de datos y de todas sus tablas
	Tipos de datos de los campos y sus restricciones
	Relaciones entre las diferentes tablas
#### Script de datos de base de datos para (Opcional):
	Tabla de usuarios
	Tabla de productos
	Tablas secundarias (categorías, marcas, colores, talles, etc)
	Tabla de carrito de compras y productos de carritos de compras (Opcional)
#### Creación de carpeta Sequelize con:
	Archivos de configuración
	Modelos con sus relaciones
#### BREAD
	De productos
	De usuarios
	De tablas secundarias (Opcional) 


## Sprint 7 - Validaciones (Back + Front)
Si el formulario se llena con datos inválidos no hay problema, el problema es si llegan a nuestra base de datos, ahí es donde se desata el caos y se rompe todo. ¡Para eso está la validación! En este sprint validamos tanto desde el frontend como desde el backend.
#### Validaciones del backend con Express Validator :
	Registro de usuarios
	Login de usuarios
	Creación y modificación de productos
	Resto de los formularios del sitio (Opcional) 
#### Validaciones del frontend con JS + validator.js :
	Registro de usuarios
	Login de usuarios
	Creación y modificación de productos
	Resto de los formularios del sitio (Opcional) 


## Sprint 8 - APIs + React
En este sprint final vemos que podemos enviar y recibir datos de manera eficiente a través de las APIs 🌐 ↔ 🌐 y que React nos permite trabajar el frontend de una manera modularizada y súper eficiente 🧙 ✨.

#### Endpoints de usuarios :
	Listado de usuarios
	Paginado (Opcional) 
	Detalle de usuario
#### Endpoints de productos :
	Listado de productos
	Paginado (Opcional) 
	Detalle de producto
#### Dashboard del sitio hecho en React
	3 a 6 paneles simples con totales
	Panel de detalle de último producto o usuario creado
	Panel de categorías con el total de productos de cada una
	Panel con el listado de productos
	Datos adicionales (Opcional) 
------------


# Despliegue | 📦

**Heroku**  - https://wheels365.herokuapp.com/
		

