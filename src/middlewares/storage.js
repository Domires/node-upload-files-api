const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // location where the files will be stored
        cb(null, `${__dirname}/../uploads` )
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage })

module.exports = upload