import express from "express";
import path from "path";
import { upload } from "./middleware/multer.js"

const app = express();
const port = 3000;
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const homePage = path.join(__dirname,'frontend','home','index.html')
const imageCropPage = path.join(__dirname,'frontend','crop_image','index.html')

app.use(express.static("./"));
app.get("/home",(req, res)=>{
    res.sendFile(homePage);
})
app.get("/crop_image",(req, res)=>{
    res.sendFile(imageCropPage)
})
app.post("/upload", upload.single("image"), (req, res, next)=>{
console.log("image upload")
res.sendStatus(200)
})
app.listen(port,()=>{
    console.log(`app listing on port ${port}`)
})


