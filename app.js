const express = require('express')
const app = express()
const path = require('path')
const publicPath = path.resolve(__dirname, 'public');
let rutasMain = require ('./routes/menu.js')

app.set('view engine', 'ejs')
//directorio donde van a estar las vistas
app.set('views', './views')

// definimos la carpeta que devuelve archivos estáticos
app.use(express.static('public'))

// home
/* app.get('/', (req, res) => {
    //primer parametro archivo a mostrar, la extension no hace falta
    res.render('index', {
        title: 'INDEX'
    })
}) */

app.use('/', rutasMain);

app.listen(3000, () => {
    console.log('El servidor ya está corriendo en el puerto 3000')
})