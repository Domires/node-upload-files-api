const routes = require('express').Router()
const FileController = require('./../controllers/FileController')
const uploadMiddleware = require('./../middlewares/storage')

// single - define the name of the multipart key
routes.post('/upload', uploadMiddleware.single('file'), FileController.uploadFile)

module.exports = routes