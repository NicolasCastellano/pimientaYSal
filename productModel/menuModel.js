const fs = require('fs');
const path = require('path');

module.exports = {
    findFiltered(menu){
        const menues = this.readFile();
        const menuesFiltered = menues.filter(product => product.category == menu);
        return menuesFiltered
    }
}