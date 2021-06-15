const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, 'public');
let menuRoutes = require ('./routes/menuRoutes.js')

app.set('view engine', 'ejs')
//directorio donde van a estar las vistas
app.set('views', './views')

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

app.use('/', menuRoutes);

app.listen(3000, () => {
    console.log('El servidor ya está corriendo en el puerto 3000')
})