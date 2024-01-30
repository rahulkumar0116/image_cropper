import multer from "multer";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      const sufix = ".jpg";
      cb(null, file.fieldname + sufix)
    }
  })
  
export const upload = multer({ storage })