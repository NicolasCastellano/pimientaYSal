const path = require('path');
const viewsPath = path.join(__dirname, '../')
const productModel = require('../models/menuModel')

const mainController = {
    home: function(req, res){
        const menuCategory = 'menu'
        const menuList = productModel.findFiltered(menuCategory)
        return res.render('index',{menuList})
    }    
}
module.exports = mainController;