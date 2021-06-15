const fs = require('fs');

// lee el archivo
const file = fs.readFileSync(__dirname + '/menu.json')

// parsea el json
const jsonFile = JSON.parse(file)

module.exports = {
    // método que devuelve todos los planetas
    findAll() {
        return jsonFile.menus
    },
    
    // método que devuelve un planeta por id
    findByPk(id) {
        return jsonFile.menus.find(menu =>
            Number(menu.id) === Number(id)
        )
    }
}