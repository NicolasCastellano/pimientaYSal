const express = require('express')
const menuRoutes = express.Router()

const menuController = require('../controllers/menuController')

menuRoutes.get('/list', menuController.list)

module.exports = menuRoutes