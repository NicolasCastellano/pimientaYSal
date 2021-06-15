const menuModel = require('../models/menuModel')

const menuController = {
    list: (req,res) => {
    const menuList = menuModel.findAll ()
    res.render('menu/list', { menuList })
    },
}

module.exports = menuController