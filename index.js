// importar los modulos de express.js
const express = require('express');

// Importar todas las rutas disponibles
const routes = require("./routes")

// Crear un servidor de express
const app = express();

// Indicarle a express donde estan las rutas del servidor
app.use("/", routes())

// inicializar el servidor en un puerto especifico
app.listen(7000, () => {
    console.log("Servidor ejecutandose en el puerto 7000")
});

