const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/');
    },
    filename: function (req, file, cb) {
        crypto.randomBytes(16, (err, buf) => {
            if (err) return cb(err);
            const filename = buf.toString('hex') + path.extname(file.originalname);
            cb(null, filename);
        });
    }
});

const fileFilter = (req, file, cb) => {
    const allowfiles = ['application/json', 'application/javascript', 'text/javascript'];
    
    if (allowfiles.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('File type not allowed'), false);
    }
};

const limiter = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 1
    },
    fileFilter: fileFilter
});

module.exports = limiter;