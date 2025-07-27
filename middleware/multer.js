import multer from "multer"
import path from "path";


// // Multer Configuration to file in disk storage at public/uploads folder
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './public/uploads')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
//     }
// });

// Multer Configuration to file in disk storage at public/uploads folder
const storage = multer.memoryStorage();

// File type Check Handler
const checkFileType = (file, cb) => {
    const fileTypes = /pdf/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())

    if (extName) {
        return cb(null, true);
    } else {
        cb("Error :  Please upload only PDF files!")
    }
};


// Initializing multer
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
});

export default upload;
