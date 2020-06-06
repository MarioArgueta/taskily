// Importar express router
const express = require("express");
const routes = express.Router();

//Consruir las rutas disponibles para el servidor
// LAs rutas deben de exportarse para poder ser utilizadas 
module.exports = function(){
    routes.get("/");
    
    return routes;
}