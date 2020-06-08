// Importar express router
const express = require("express");
const routes = express.Router();

//Importar los controladores 
const proyectosController = require("../controllers/proyectosController");

//Consruir las rutas disponibles para el servidor
// LAs rutas deben de exportarse para poder ser utilizadas 
module.exports = function(){
    routes.get("/", proyectosController.home);

    routes.get("/holamundo", proyectosController.holaMundo);
    
    return routes;
}