const express=require("express")
const imagesRouter = express.Router();//
const Imagescontrollers = require("../controllers/images");
 //image
 imagesRouter.route("/").
 post(Imagescontrollers.AddImages)
 .put(Imagescontrollers.update)
 .get(Imagescontrollers.GetAllImages)
 
 imagesRouter.route("/:imageId")
 .get(Imagescontrollers.GetImagesById)
 .delete(Imagescontrollers.deleteimages)
 module.exports = imagesRouter;
